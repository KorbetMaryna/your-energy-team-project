import MicroModal from 'micromodal';
import { showMessage } from './helpers/notificationHandler';

import {
  fetchBodyParts,
  fetchEquipment,
  fetchExercises,
  fetchMuscles,
} from './api';
import {
  checkScreenWidth,
  createExercisesMarkup,
  createHeadline,
  hideHeadlineAndSearch,
  makeFilterButtonActive,
  renderPagination,
} from './exercises';

const youChoiceBtnElem = document.querySelector('.your-choice-button');

class YourChoiceModal {
  constructor() {
    this.id = 'your-choice-modal';

    this.bodyPartsOptions = [];
    this.bodyPartsSelectElem = document.getElementById('you-choice-body-part');

    this.musclesOptions = [];
    this.musclesSelectElem = document.getElementById('your-choice-muscle');

    this.equipmentOptions = [];
    this.equipmentSelectElem = document.getElementById('your-choice-equipment');

    this.selectGroups = document.querySelectorAll(`#${this.id} .select-group`);

    this.submitBtnElem = document.getElementById('search-exercises');
    this.submitBtnElem.addEventListener('click', () => {
      this.triggerSearchExercises();
    });

    MicroModal.init();
  }

  async show() {
    MicroModal.show(this.id);

    try {
      const [muscles, bodyParts, equipment] = await Promise.all([
        fetchMuscles(),
        fetchBodyParts(),
        fetchEquipment(),
      ]);

      this.musclesOptions = muscles.results;
      this.bodyPartsOptions = bodyParts.results;
      this.equipmentOptions = equipment.results;

      this.hideLoading();
      this.toggleShowSelectGroups(true);

      [
        {
          filters: this.musclesOptions,
          elem: this.musclesSelectElem,
        },
        {
          filters: this.bodyPartsOptions,
          elem: this.bodyPartsSelectElem,
        },
        {
          filters: this.equipmentOptions,
          elem: this.equipmentSelectElem,
        },
      ].forEach(({ filters, elem }) => {
        const options = [];
        for (let i = 0; i < filters.length; i++) {
          const { name } = filters[i];
          options.push(`<option value=${i}>${name}</option>`);
        }
        elem.innerHTML = options.join('');

        this.hideLoading();
      });
    } catch (err) {
      const msg = 'Could not fetch lists of filters for modal';
      console.log(msg);
      showMessage('error', err.message);
    }
  }

  hideLoading() {
    document
      .querySelector(`#${this.id} .modal__content-loading`)
      .classList.add('hidden');
  }

  toggleShowSelectGroups(isShow) {
    for (const elem of this.selectGroups) {
      if (isShow) {
        elem.classList.remove('hidden');
      } else {
        elem.classList.add('hidden');
      }
    }
  }

  getFormValues() {
    return {
      bodyPart: this.bodyPartsOptions[this.bodyPartsSelectElem.value].name,
      muscle: this.musclesOptions[this.musclesSelectElem.value].name,
      equipment: this.equipmentOptions[this.equipmentSelectElem.value].name,
    };
  }

  async triggerSearchExercises() {
    const { bodyPart, muscle, equipment } = this.getFormValues();
    if (!bodyPart || !muscle || !equipment) {
      return;
    }

    this.submitBtnElem.disabled = true;

    try {
      const isFound = await this.getAndRenderExercises({ page: 1 });
      if (!isFound) {
        showMessage(
          'warning',
          'No exercises found. Try another set of muscle, body part and equipment paramaters.'
        );

        this.submitBtnElem.disabled = false;
        return;
      }

      createHeadline('you choice');
      hideHeadlineAndSearch();
      MicroModal.close();
      makeFilterButtonActive(youChoiceBtnElem);
    } catch (err) {
      showMessage('error', err.message);
    } finally {
      this.submitBtnElem.disabled = false;
    }
  }

  async getAndRenderExercises({ page = 1 }) {
    const { bodyPart, muscle, equipment } = this.getFormValues();

    const limit = checkScreenWidth('');

    console.log('Calling api with', {
      bodyPart,
      muscle,
      equipment,
      page,
      limit,
    });
    const { totalPages, results } = await fetchExercises({
      bodyPart,
      muscle,
      equipment,
      page,
      limit,
    });
    console.log({ results });

    if (!(results || []).length) {
      return false;
    }

    createExercisesMarkup({ results });
    renderPagination({
      page,
      totalPages,
      customListener: page => {
        this.getAndRenderExercises({ page });
      },
    });
    return true;
  }
}

if (youChoiceBtnElem) {
  const yourChoiceModal = new YourChoiceModal();
  youChoiceBtnElem.addEventListener('click', () => {
    yourChoiceModal.show();
  });
}

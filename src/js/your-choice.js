import MicroModal from 'micromodal';
import { fetchBodyParts, fetchEquipment, fetchMuscles } from './api';
import { endsWith } from 'lodash';
// import SlimSelect from 'slim-select';

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

      this.musclesOptions = muscles;
      this.bodyPartsOptions = bodyParts;
      this.equipmentOptions = equipment;
      console.log({ muscles, bodyParts, equipment });

      [
        { filters: muscles, elem: this.musclesSelectElem },
        { filters: bodyParts, elem: this.bodyPartsSelectElem },
        { filters: equipment, elem: this.equipmentSelectElem },
      ].forEach(({ filters, elem }) => {
        console.log({ filters, elem });
        const options = [];
        for (let i = 0; i < filters.length; i++) {
          const { name } = filters[i];
          options.push(`<option value=${i}>${name}</option>`);
        }
        elem.innerHTML = options.join('');

        new SlimSelect({
          select: elem,
        });
      });

      this.hideLoading();
      this.toggleShowSelectGroups(true);
    } catch (err) {
      const msg = 'Could not fetch lists of filters for modal';
      console.error(msg, err);
      iziToast.error({
        message: msg,
      });
    }
  }

  hideLoading() {
    document.querySelector(`#${this.id} .modal__content-loading`);
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
}

if (youChoiceBtnElem) {
  const yourChoiceModal = new YourChoiceModal();
  youChoiceBtnElem.addEventListener('click', () => {
    yourChoiceModal.show();
  });
}

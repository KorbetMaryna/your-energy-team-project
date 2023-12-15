import axios from 'axios';
import { errorHandler } from './quote';
import iziToast from 'izitoast';

const subscribeForm = document.querySelector('.footer-sub-form');
const BASE_URL = 'https://your-energy.b.goit.study/api/';

subscribeForm.addEventListener('submit', subscribeHandler);

async function subscribeHandler(event) {
  event.preventDefault();

  const email = event.target.email.value;

  try {
    const { data } = await axios.post(`${BASE_URL}subscription`, { email });

    subscriptionSuccessfull(data.message);
  } catch (error) {
    errorHandler(error.response.data.message);
  }
}

function subscriptionSuccessfull(message) {
  iziToast.success({
    message: `${message}`,
  });
}

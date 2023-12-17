import axios from 'axios';

import { showMessage } from './helpers/notificationHandler';

const subscribeForm = document.querySelector('.footer-sub-form');
const BASE_URL = 'https://your-energy.b.goit.study/api/';

subscribeForm.addEventListener('submit', subscribeHandler);

async function subscribeHandler(event) {
  event.preventDefault();

  const email = event.target.email.value;

  if (!isValidEmail(email)) {
    showMessage(
      'warning',
      'Please enter email in correct format. (test@email.com)'
    );
  }

  try {
    const { data } = await axios.post(`${BASE_URL}subscription`, { email });

    showMessage('success', data.message);
  } catch (error) {
    console.log(error.response.data.message);
    showMessage('error', error.response.data.message);
  } finally {
    event.target.email.value = '';
  }
}

const isValidEmail = email => {
  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailRegex.test(email);
};

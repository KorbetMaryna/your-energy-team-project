import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function showMessage(type, message) {
  let color;
  if (type === 'error') {
    color = '#f58e82';
  } else if (type === 'success') {
    color = '#0ecc2e';
  } else {
    color = '#9dfab5';
  }

  iziToast.show({
    messageColor: '#262121',
    backgroundColor: color,
    messageSize: '18px',
    position: 'bottomRight',
    progressBar: false,
    animateInside: false,
    timeout: 3000,
    targetFirst: false,
    message: message,
  });
}

export { showMessage };

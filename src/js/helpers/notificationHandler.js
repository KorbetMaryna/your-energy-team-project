import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const colors = {
  colorSuccess: '#0ecc2e',
  colorError: '#f58e82',
  colorInfo: '#9dfab5',
};

function showMessage(type, message) {
  let color;
  if (type === 'error') {
    color = colors.colorError;
  } else if (type === 'success') {
    color = colors.colorSuccess;
  } else {
    color = colors.colorInfo;
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

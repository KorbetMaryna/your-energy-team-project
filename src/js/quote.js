import iziToast from 'izitoast';
import { fetchApiData } from './api';

const QUOTE = document.querySelector('.quote-wrapper');

async function checkQuote() {
  const todayDate = new Date().toLocaleDateString();
  const restoredData = getQuoteFromStorage();
  const restoredQuote = JSON.parse(restoredData);

  if (!restoredQuote || restoredQuote.date != todayDate) {
    let { quote, author } = await getQuote();

    quoteMarkup(quote, author);
    storeQuote(quote, author, todayDate);
  } else {
    quoteMarkup(restoredQuote.quote, restoredQuote.author);
  }
}

function storeQuote(quote, author, date) {
  const quoteOfDay = {
    quote,
    author,
    date,
  };

  localStorage.setItem('quoteOfDay', JSON.stringify(quoteOfDay));
}

function getQuoteFromStorage() {
  return localStorage.getItem('quoteOfDay');
}

async function getQuote() {
  try {
    const { quote, author } = await fetchApiData('quote', '');

    return { quote, author };
  } catch (err) {
    errorHandler(err.message);
  }
}

function quoteMarkup(quote, author) {
  const markup = `<p class="quote quote-text">${quote}</p>
    <p class="qoute-author">${author}</p>`;

  QUOTE.insertAdjacentHTML('beforeend', markup);
}

function errorHandler(errorMessage) {
  iziToast.error({
    message: `${errorMessage}`,
  });
}
checkQuote();
export { checkQuote, errorHandler };

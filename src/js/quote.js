import { fetchApiData } from './api';
import { showMessage } from './helpers/notificationHandler';

const QUOTE = document.querySelector('.quote-wrapper');

async function checkQuote() {
  const todayDate = new Date().toLocaleDateString();
  const restoredQuote = getQuoteFromStorage(todayDate);

  if (!validateStoredQuote(restoredQuote, todayDate)) {
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
  const restoredData = localStorage.getItem('quoteOfDay');
  const restoredQuote = JSON.parse(restoredData);

  return restoredQuote;
}

async function getQuote() {
  try {
    const { quote, author } = await fetchApiData('quote', '');

    return { quote, author };
  } catch (err) {
    showMessage('error', err.message);
  }
}

function quoteMarkup(quote, author) {
  const markup = `<p class="quote quote-text">${quote}</p>
    <p class="qoute-author">${author}</p>`;

  QUOTE.insertAdjacentHTML('beforeend', markup);
}

function validateStoredQuote(restoredQuote, todayDate) {
  if (
    !restoredQuote ||
    !restoredQuote.quote ||
    !restoredQuote.date ||
    restoredQuote.author ||
    restoredQuote.date != todayDate
  ) {
    return false;
  }

  return true;
}

checkQuote();

export { checkQuote };

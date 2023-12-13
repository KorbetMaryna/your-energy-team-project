import axios from 'axios';

const QUOTE = document.querySelector('.quote-wrapper');

const BASE_URL = 'https://your-energy.b.goit.study/api/quote';

async function fetchQuote() {
  const { data } = await axios(BASE_URL);
  return data;
}

function checkQuote() {
  const todayDate = new Date().toLocaleDateString();
  const restoredData = getQuoteFromStorage();
  const restoredQuote = JSON.parse(restoredData);

  if (!restoredQuote || restoredQuote.date != todayDate) {
    getQuote(todayDate);
  } else {
    quoteMarkup(restoredQuote.quote, restoredQuote.author);
  }
}

function storeQuote(quote, author, date) {
  const quoteOfDay = {
    quote,
    author,
    date: date,
  };

  localStorage.setItem('quoteOfDay', JSON.stringify(quoteOfDay));
}

function getQuoteFromStorage() {
  return localStorage.getItem('quoteOfDay');
}

async function getQuote(todayDate) {
  await fetchQuote().then(({ quote, author }) => {
    quoteMarkup(quote, author);
    storeQuote(quote, author, todayDate);
  });
}

function quoteMarkup(quote, author) {
  const markup = `<p class="quote quote-text">${quote}</p>
    <p class="qoute-author">${author}</p>`;

  QUOTE.insertAdjacentHTML('beforeend', markup);
}

checkQuote();

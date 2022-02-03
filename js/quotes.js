const quotes = [
  {
    quote: "What people commonly call fate is mostly their own stupidity",
    quoteAuthor: "Schopenhauer",
  },
  {
    quote: "No rose without a thorn but many a thorn without a rose",
    quoteAuthor: "Schopenhauer",
  },
  {
    quote:
      "The sad truth is that most evil is done by people who never make up their minds to be good or evil",
    quoteAuthor: "Hannah Arendt",
  },
  {
    quote: "There are no dangerous thoughts; thinking it-self is dangerous",
    quoteAuthor: "Hannah Arendt",
  },
  {
    quote:
      "Loving life is easy when you are abroad. Where no one knows you and you hold your life in your hands all alone, you are more master of yourself than at any other time",
    quoteAuthor: "Hannah Arendt",
  },
  {
    quote: "We are not rich by what we possess but by what we can do without",
    quoteAuthor: "Immanuel Kant",
  },
  {
    quote:
      "Live your life as though your every act were to become a universal law",
    quoteAuthor: "Immanuel Kant",
  },
  {
    quote: "I know nothing except the fact of my ignorance",
    quoteAuthor: "Socrates",
  },
  {
    quote:
      "The advantage of a bad memory is that one enjoys several times the same good things for the first time",
    quoteAuthor: "Friedrich Nietzsche",
  },
  {
    quote: "The real world is much smaller than the imaginary",
    quoteAuthor: "Friedrich Nietzsche",
  },
];

const quote = document.querySelector(
  "#seolyu__header--quote--quote span:first-child"
);
const quoteAuthor = document.querySelector(
  "#seolyu__header--quote--quote span:last-child"
);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
quoteAuthor.innerText = `- ${todaysQuote.quoteAuthor} -`;

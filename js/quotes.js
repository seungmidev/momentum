const quotes = [
  {
    quote: "You will never know until you try.",
    author: "Hyejin",
  },
  {
    quote: "Don't give your past the power to define your future.",
    author: "Nico",
  },
  {
    quote: "Rome was not built in a day.",
    author: "Jonas",
  },
  {
    quote: "No pain, No gain",
    author: "Sunyoung",
  },
  {
    quote: "No sweat, No sweet.",
    author: "Harry",
  },
  {
    quote: "He can do, she can do, why not me?",
    author: "Emma",
  },
  {
    quote: "If not now, then when?",
    author: "Sopia",
  },
  {
    quote: "This too shall pass away.",
    author: "Seungmi",
  },
  {
    quote: "Time waits for no one.",
    author: "James",
  },
  {
    quote: "If you do not walk today, you will have to run tomorrow.",
    author: "Tim",
  },
]

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = todaysQuote.author;
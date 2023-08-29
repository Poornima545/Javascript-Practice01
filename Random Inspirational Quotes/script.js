const quotes = [
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    authorPhoto: "Images/pic-1.jpg"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    authorPhoto: "Images/pic-2.jpg"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    authorPhoto: "Images/pic-3.jpg"
  },
  // Add more quotes here
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');
const authorPhotoElement = document.getElementById('author-photo')

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const randomQuote = getRandomQuote();
  quoteElement.textContent = randomQuote.text;
  authorElement.textContent = `- ${randomQuote.author}`;
  authorPhotoElement.src = randomQuote.authorPhoto;
}

newQuoteButton.addEventListener('click', displayQuote);
displayQuote();
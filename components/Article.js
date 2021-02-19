// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

import { data } from '../lib';

/*
  Step 1: Write a component called 'articleMaker' to create an article.
  Your component is a function that takes an article object as its only argument,
  and returns a DOM node looking like the one below:

  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class="expandButton">+</span>
  </div>

  Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  This listener should toggle the class 'article-open' on div.article.

  Step 3: Don't forget to return something from your function!
*/
function articleMaker(articleData) {
  let article = document.createElement('div');
  article.classList.add('article');

  let title = document.createElement('h2');
  title.textContent = articleData['title'];
  article.appendChild(title);

  let date = document.createElement('p');
  date.textContent = articleData['date'];
  date.classList.add('date');
  article.appendChild(date);

  const paragraphNames = ['first', 'second', 'third'];
  paragraphNames.forEach((name) => {
    let paragraph = document.createElement('p');
    paragraph.textContent = articleData[`${name}Paragraph`];
    article.appendChild(paragraph);
  });

  let expandButton = document.createElement('span');
  expandButton.textContent = '+';
  expandButton.classList.add('expandButton');

  expandButton.addEventListener('click', () => {
    article.classList.toggle('article-open');
  });
  article.appendChild(expandButton);

  return article;
}

/*
  Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  to create a div.article element and append it to the DOM inside div.articles (see index.html).
*/
let mainDiv = document.querySelector('.articles');

function addArticle(articleData) {
  mainDiv.appendChild(articleMaker(articleData));
}

data.forEach((articleData) => addArticle(articleData));

/*
  Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  Refresh the page to see the new article.
*/

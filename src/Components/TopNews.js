const form = document.querySelector('form');
const destinationInput = document.querySelector('#destination-input');
const searchButton = document.querySelector('#search-button');
const headlinesList = document.querySelector('#headlines');

const apikey = '62bcea3d0ec6311465039f3e2a53dda2';

form.addEventListener('submit', function(event) {
  event.preventDefault(); // this prevents the form from submitting and refreshing the page

  const destination = destinationInput.value;
  const url = `https://gnews.io/api/v4/top-headlines?q=${destination}&max=5&token=${apikey}&image=required`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      headlinesList.innerHTML = ''; // this will clear the existing list each time the user enters new input

      data.articles.forEach(article => {
        const li = document.createElement('li');
        const image = document.createElement('img');
        image.src = article.image;
        image.alt = 'Article Image';
        const link = document.createElement('a');
        link.href = article.url;
        link.target = '_blank';
        link.textContent = article.title;
        li.appendChild(image);
        li.appendChild(link);
        li.innerHTML += ` - ${article.description}`;
        headlinesList.appendChild(li);
      });
    })
    .catch(error => console.log(error));
});

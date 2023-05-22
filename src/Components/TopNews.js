const form = document.querySelector('form');
const destinationInput = document.querySelector('#destination-input');
const searchButton = document.querySelector('#search-button');
const headlinesList = document.querySelector('#headlines');

apikey = '62bcea3d0ec6311465039f3e2a53dda2';

form.addEventListener('submit', function(event) {
  event.preventDefault(); // this prevents the form from submitting and refreshing the page
  
  const destination = destinationInput.value;
  const url = `https://gnews.io/api/v4/top-headlines?q=${destination}&max=5&token=${apikey}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      headlinesList.innerHTML = ''; // this will clear the existing list each time user enters new input

      data.articles.forEach(article => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a> - ${article.description}`;
        headlinesList.appendChild(li);
      });
    })
    .catch(error => console.log(error));
});
let clientId = /*"your id here";*/
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientId}`;

let imageElement = document.querySelector("#unsplashImage");
let imageLink = document.querySelector("#imageLink");
let creator = document.querySelector("#creator");

fetch(endpoint)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    imageElement.src = jsonData.urls.regular;
    imageLink.setAttribute("href", jsonData.links.html);

    creator.innerText = jsonData.user.name;
    creator.setAttribute("href", jsonData.user.portfolio_url);
  })
  .catch(function (error) {
    console.log(error);
  });

function Refresh() {
  window.location.reload();
}

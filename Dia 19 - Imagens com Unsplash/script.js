<<<<<<< HEAD
let clientId = /*"your id here";*/
=======
let clientId = "8WrQwW7QUzoNhpbZZxDzdlyntFjg-iayavm6jpcnJuU";
>>>>>>> 33dc24ff4b915f99d0593b791bf78fa4609e98d9
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

const picButton = document.querySelector("#get-picture");
const score = document.querySelector("#score");

picButton.addEventListener("click", inputHandler);

function inputHandler(e) {
  e.preventDefault();
  fetch("https://dog.ceo/api/breeds/image/random", {
    method: "GET"
  })
    .then(res => res.json())
    .then(data => postPicture(data));
}

function postPicture(data) {
  console.log(data);
}

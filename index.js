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
  if (data.status === "success") {
    renderDogPicture(data.message);
  } else {
    alert("There was an error, please try again");
  }
}

function renderDogPicture(picture) {
  let parentDiv = document.getElementById("picture-and-button");
  let pictureDiv = document.createElement("div");
  pictureDiv.className = "picture";

  let img = document.createElement("img");
  img.src = picture;
  img.className = "randomBreed";

  if (parentDiv.childNodes.length === 4) {
    parentDiv.removeChild(parentDiv.childNodes[3]);
  }

  parentDiv.appendChild(pictureDiv);
  pictureDiv.appendChild(img);
}

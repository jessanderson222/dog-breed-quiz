const picButton = document.querySelector("#get-picture");
const score = document.querySelector("#score");
let breedList = [];
let output;

document.addEventListener("DOMContentLoaded", () => {
  getBreeds();
  console.log(breedList);
  picButton.addEventListener("click", inputHandler);
});

function getBreeds() {
  fetch("http://localhost:3000/api/v1/dogs/", {
    method: "GET"
  })
    .then(res => res.json())
    .then(data => breedList.push(data));
}

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
  console.log(breedList);
  let parentDiv = document.getElementById("picture-and-button");
  let pictureDiv = document.createElement("div");
  pictureDiv.className = "picture";

  let img = document.createElement("img");
  img.src = picture;
  img.className = "randomBreed";
  let buttonOne = document.createElement("button");
  buttonOne.className = "breedOption";
  buttonOne.innerText = "option 1";
  let buttonTwo = document.createElement("button");
  buttonTwo.className = "breedOption";
  buttonTwo.innerText = "option 2";
  let buttonThree = document.createElement("button");
  buttonThree.className = "breedOption";
  buttonThree.innerText = "option 3";
  let linebreak = document.createElement("br");

  if (parentDiv.childNodes.length === 4) {
    parentDiv.removeChild(parentDiv.childNodes[3]);
    // parentDiv.removeChild(parentDiv.childNodes[1]);
  }

  parentDiv.appendChild(pictureDiv);
  pictureDiv.appendChild(linebreak);
  pictureDiv.appendChild(img);

  pictureDiv.appendChild(buttonOne);

  pictureDiv.appendChild(buttonTwo);

  pictureDiv.appendChild(buttonThree);
}

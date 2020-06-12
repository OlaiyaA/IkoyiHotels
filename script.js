// get the fa buttons for image slider

const forward = document.getElementById("forward");
const back = document.getElementById("back");

const bgImage = document.getElementsByClassName("imgsection")[0];

const setImage = () => {
  console.log("button forward clicked");
  bgImage.style.backgroundImage = "url('../images/Rectangle 13.svg')";
};

const setSecond = () => {
  console.log("button back clicked");
  bgImage.style.backgroundImage = "url('../images/Rectangle 28(1).svg')";
};

forward.addEventListener("click", setImage);
back.addEventListener("click", setSecond);

// background change for section two

const secondForward = document.getElementById("forward2");
const secondback = document.getElementById("back2");

const bgImage2 = document.getElementsByClassName("imgtwo")[0];

const setimage2 = () => {
  console.log("second button clicked");
  bgImage2.style.backgroundImage = "url('../images/Rectangle 15.svg')";
};

const setImage21 = () => {
  console.log("back button clicked");
  bgImage2.style.backgroundImage = "url('../images/Vector.svg')";
};

secondForward.addEventListener("click", setimage2);
secondback.addEventListener("click", setImage21);

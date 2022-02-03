const images = ["01.png", "02.png", "03.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `imgs/album/${chosenImage}`;

console.log(bgImage);

document
  .getElementById("seolyu__content--wall--photo--image")
  .appendChild(bgImage);

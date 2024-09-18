let img = document.getElementById("main-image");

function changeImage(imageSrc) {
  document.getElementsByClassName("image").src = img;
  img.src = imageSrc;
}

window.addEventListener("load", function () {
  var loadingGif = document.querySelector(".loading-gif");
  loadingGif.parentNode.removeChild(loadingGif);
});

const myBikeButton = document.getElementById("myBikeButton");

myBikeButton.addEventListener("click", function () {
  window.location.href = "myBike.html";
});

const goHomeButton = document.getElementById("goHomeButton");

goHomeButton.addEventListener("click", function () {
  window.location.href = "index.html";
});

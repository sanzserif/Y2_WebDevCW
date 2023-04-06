const image1 = document.getElementById("img1");
const image2 = document.getElementById("img2");
const image3 = document.getElementById("img3");
const image4 = document.getElementById("img4");

image1.addEventListener("click", () => {
  window.location.href = "contentPage1.html";
});

image2.addEventListener("click", () => {
  window.location.href = "contentPage2.html";
});

image3.addEventListener("click", () => {
  window.location.href = "contentPage3.html";
});

image4.addEventListener("click", () => {
  window.location.href = "contentPage4.html";
});

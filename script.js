const apiLink = document.getElementById("apiLink");
const hlExplorerLink = document.getElementById("hlExplorerLink");

apiLink.addEventListener("click", function () {
  location.href = "https://api-ebudgeting.atjhoendz.me";
});
apiLink.addEventListener("mouseover", function () {
  apiLink.classList.toggle("shadow");
});
apiLink.addEventListener("mouseleave", function () {
  apiLink.classList.toggle("shadow");
});

hlExplorerLink.addEventListener("mouseover", () => {
  hlExplorerLink.classList.toggle("shadow");
});
hlExplorerLink.addEventListener("mouseleave", () => {
  hlExplorerLink.classList.toggle("shadow");
});
hlExplorerLink.addEventListener("click", () => {
  alert("coming soon...");
});

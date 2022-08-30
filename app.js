const loadButton = document.querySelector(".show_more_button");
let currentItem = 1;

loadButton.addEventListener("click", (e) => {
  const items = [...document.querySelectorAll(".more_item .per_item")];
  e.target.classList.add("show-loader");

  for (let i = currentItem; i < currentItem + 1; i++) {
    setTimeout(function () {
      e.target.classList.remove("show-loader");
      if (items[i]) {
        items[i].style.display = "flex";
      }
    }, 1000);
  }
  currentItem += 1;

  if (currentItem >= items.length) {
    e.target.classList.add("loaded");
  }
});

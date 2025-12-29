
const searchInput = document.querySelector("#search");
const listItems = document.querySelectorAll(".item");

searchInput.addEventListener("input", function () {

  const searchText = searchInput.value.toLowerCase();

  listItems.forEach(function (item) {

    const itemText = item.textContent.toLowerCase();

    if (itemText.includes(searchText)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }

  });
});

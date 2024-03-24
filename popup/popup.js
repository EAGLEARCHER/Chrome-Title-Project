const pickbtn = document.querySelector(".pickbtn");
const resetBtn = document.getElementById("reset-button");
let pickedItem;

//Displays the titles selected
function renderTitles(titles) {
  const titleList = document.createElement("ul");
  titleList.classList.add("title-list");

  titles.forEach((title) => {
    const listItem = document.createElement("li");
    listItem.textContent = title;
    listItem.className = "title-item";
    titleList.appendChild(listItem);
  });

  const showTitleDiv = document.querySelector(".showTitle");
  showTitleDiv.innerHTML = ""; // Clear the previous content
  showTitleDiv.appendChild(titleList);
}

// Load tab titles from localStorage when the extension is opened
window.addEventListener("DOMContentLoaded", () => {
  const tabTitles = JSON.parse(localStorage.getItem("tabTitles")) || [];
  renderTitles(tabTitles);
});

pickbtn.addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const tabTitle = tab.title;

  // Retrieve existing tab titles from localStorage or initialize an empty array
  const tabTitles = JSON.parse(localStorage.getItem("tabTitles")) || [];
  tabTitles.push(tabTitle);

  // Save updated tab titles to localStorage
  localStorage.setItem("tabTitles", JSON.stringify(tabTitles));

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: renderTitles,
    args: [tabTitles],
  });
});

// Reset Button Functionality
resetBtn.onclick = function () {
  // Clear stored tab titles from localStorage
  localStorage.removeItem("tabTitles");

  // Clear displayed titles
  document.querySelector(".showTitle").innerHTML = "";
};

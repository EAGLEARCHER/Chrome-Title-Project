const pickbtn = document.querySelector(".pickbtn");
const resetBtn = document.getElementById("reset-button");
let pickedItem;

//Displays the titles selected
function renderTitles(titles) {
  const titleList = document.createElement("ul");
  titleList.classList.add("title-list");

  titles.forEach((title, index) => {
    
    const listItem = document.createElement("li");
    const spanNum = document.createElement("span");
    spanNum.innerText = `${index + 1}`; 
    listItem.appendChild(spanNum);
    listItem.appendChild(document.createTextNode(title)); 
    listItem.classList.add("title-item"); 
    titleList.appendChild(listItem);
  });

  const showTitleDiv = document.querySelector(".showTitle");
  showTitleDiv.innerHTML = ""; 
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

  // Update the displayed titles
  renderTitles(tabTitles);
});

// Reset Button Functionality
resetBtn.onclick = function () {
  localStorage.removeItem("tabTitles");
  document.querySelector(".showTitle").innerHTML = "";
  counter = 0;
};

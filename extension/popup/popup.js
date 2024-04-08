// // document.addEventListener("DOMContentLoaded", function () {
// //   const openerButton = document.getElementById("linkedin-opener");

// //   openerButton.addEventListener("click", function () {
// //     // Send a message to the background script requesting URLs
// //     chrome.runtime.sendMessage({ action: "getUrls" });
// //   });

// //   // Listen for response from background script
// //   chrome.runtime.onMessage.addListener(function (
// //     message,
// //     sender,
// //     sendResponse
// //   ) {
// //     if (message.action === "sendUrls") {
// //       const urls = message.urls;
// //       console.log("Received URLs:", urls);
// //       // Now you can open the received URLs or perform any other action
// //     }
// //   });
// //   let pickedItem;

// //   //Displays the titles selected
// //   function renderTitles(titles) {
// //     const titleList = document.createElement("ul");
// //     titleList.classList.add("title-list");

// //     titles.forEach((title, index) => {
// //       const listItem = document.createElement("li");
// //       const spanNum = document.createElement("span");
// //       spanNum.innerText = `${index + 1}`;
// //       listItem.appendChild(spanNum);
// //       listItem.appendChild(document.createTextNode(title));
// //       listItem.classList.add("title-item");
// //       titleList.appendChild(listItem);
// //     });

// //     const showTitleDiv = document.querySelector(".showTitle");
// //     showTitleDiv.innerHTML = "";
// //     showTitleDiv.appendChild(titleList);
// //   }

// //   // Load tab titles from localStorage when the extension is opened
// //   window.addEventListener("DOMContentLoaded", () => {
// //     const data = JSON.parse(localStorage.getItem("tabTitles")) || [];
// //   });
// // });

// let urlsReceived = false;

// document.addEventListener("DOMContentLoaded", function () {
//   const openerButton = document.getElementById("linkedin-opener");
//   openerButton.addEventListener("click", function () {
//     // Send a message to the background script requesting URLs
//     chrome.runtime.sendMessage({ action: "getUrls" });
//   });

//   // Listen for response from background script
//   chrome.runtime.onMessage.addListener(function (
//     message,
//     sender,
//     sendResponse
//   ) {
//     if (message.action === "sendUrls") {
//       const urls = message.urls;
//       console.log("Received URLs:", urls);
//       urlsReceived = true;
//       // Now you can open the received URLs or perform any other action
//     }
//   });
// });

// // Wait until the URLs are received before performing any actions
// setInterval(() => {
//   if (urlsReceived) {
//     // Perform actions with the received URLs
//   }
// }, 100); // Check every 100 milliseconds

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.msg === "something_completed") {
    //  To do something
    console.log(request.data.subject);
    console.log(request.data.content);
  }
});



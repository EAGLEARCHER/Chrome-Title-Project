// chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
//   if (message.action === "getUrls") {
//     // Generate mock data URLs
//     const urls = [
//       "https://www.linkedin.com/in/mock-profile-1",
//       "https://www.linkedin.com/in/mock-profile-2",
//       "https://www.linkedin.com/in/mock-profile-3",
//     ];

//     // Send the generated URLs back to the popup script after a short delay
//     setTimeout(() => {
//       chrome.runtime.sendMessage({ action: "sendUrls", urls: urls });
//     }, 500); // 500 milliseconds delay
//   }
// });

chrome.runtime.sendMessage({
  msg: "something_completed", 
  data: {
      subject: "Loading",
      content: "Just completed!"
  }
});
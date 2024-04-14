chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "openLinkedInProfile") {
    chrome.tabs.create({ url: message.linkedinProfileUrl }, function (tab) {
      if (
        chrome.scripting &&
        typeof chrome.scripting.executeScript === "function"
      ) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["scripts/content.js"],
        });
      } else {
        console.error("chrome.scripting.executeScript is not available");
      }
    });
  } else if (message.action === "sendData") {
    console.log("Data received from content script:", message.data);
  }
});

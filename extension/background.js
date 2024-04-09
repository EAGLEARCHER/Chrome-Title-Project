chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  console.log("World, 1");

  if (message.action === "openLinkedInProfile") {
    console.log("World, 2");

    chrome.tabs.create({ url: message.linkedinProfileUrl }, function (tab) {
      console.log("World, 3");

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
    console.log("World, 4");

    console.log("Data received from content script:", message.data);
  }
});

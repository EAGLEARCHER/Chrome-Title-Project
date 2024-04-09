// Extract data from the LinkedIn profile page
function extractData() {
  const profileData = {};

  // Extract name
  const nameElement = document.querySelector(".pv-top-card-section__name");
  if (nameElement) {
    profileData.name = nameElement.textContent.trim();
  }

  // Extract location
  const locationElement = document.querySelector(
    ".pv-top-card-section__location"
  );
  if (locationElement) {
    profileData.location = locationElement.textContent.trim();
  }

  // Extract about section
  const aboutElement = document.querySelector(".pv-about__summary-text");
  if (aboutElement) {
    profileData.about = aboutElement.textContent.trim();
  }

  // Extract bio
  const bioElement = document.querySelector(
    ".pv-about__summary-content .lt-line-clamp__line"
  );
  if (bioElement) {
    profileData.bio = bioElement.textContent.trim();
  }

  // Extract follower count
  const followerCountElement = document.querySelector(
    ".pv-recent-activity-section__follower-count"
  );
  if (followerCountElement) {
    profileData.followerCount = followerCountElement.textContent.trim();
  }

  // Extract connection count
  const connectionCountElement = document.querySelector(
    ".pv-recent-activity-section__connections-count"
  );
  if (connectionCountElement) {
    profileData.connectionCount = connectionCountElement.textContent.trim();
  }

  // Extract bio line (if available)
  const bioLineElement = document.querySelector(
    ".pv-about__bio-container .pv-about__summary-text"
  );
  if (bioLineElement) {
    profileData.bioLine = bioLineElement.textContent.trim();
  }

  return profileData;
}

// Send extracted data to the background script
function sendDataToBackground(data) {
  console.log("Hello", 1);
  localStorage.setItem("data", JSON.stringify(data));
  chrome.runtime.sendMessage({ action: "sendData", data: data });
  console.log("Hello", 2);
}

// Main function to extract data and send it to the background script
function main() {
  console.log("Hello", 3);

  const profileData = extractData();
  console.log("Hello, 4");

  sendDataToBackground(profileData);
  console.log("Hello, 5");
}

// Execute the main function when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", main);

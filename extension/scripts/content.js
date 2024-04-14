function extractData() {
  // Extract the user's name
  const name = document
    .querySelector(
      ".text-heading-xlarge.inline.t-24.v-align-middle.break-words"
    )
    .textContent.trim();

  // Extract the user's location
  const location = document
    .querySelector(".text-body-small.inline.t-black--light.break-words")
    .textContent.trim();

  // Extract the user's bio
  const bio = document
    .querySelector(".text-body-medium.break-words")
    .textContent.trim();

  // Extract the user's connections
  const connectionsText = document
    .querySelector(".link-without-visited-state .t-bold")
    .textContent.trim();
  const connections = parseInt(connectionsText, 10);

  // Extract the user's followers
  const followersText = document
    .querySelector(".pvs-header__optional-link strong")
    .textContent.trim();
  const followers = parseInt(followersText.replace(/\D/g, ""), 10);

  console.log("Name:", name);
  console.log("Location:", location);
  console.log("Bio:", bio);
  console.log("Connections:", connections);
  console.log("Followers:", followers);
  const userData = { name, location, bio, connections, followers };
  return userData;
}
// Main function to extract data and send it to the background script
function main() {
  const profileData = extractData();
  console.log(profileData);
  sendDataToBackground(profileData);
}

// Execute the main function when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", main);

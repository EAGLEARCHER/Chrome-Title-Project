document.addEventListener("DOMContentLoaded", async function () {
  const openerButton = document.getElementById("linkedin-opener");

  openerButton.addEventListener("click", async function () {
    chrome.runtime.sendMessage(
      {
        action: "openLinkedInProfile",
        linkedinProfileUrl: "https://www.linkedin.com/in/",
      },
      async function (response) {
        console.log("Received response from background script:", response);

        const profileData = response.profileData;
        console.log(profileData);
        try {
          const response = await fetch(
            "http://localhost:3000/api/linkedin-profiles",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(profileData),
            }
          );

          if (response.ok) {
            console.log("Profile data sent to backend successfully.");
          } else {
            console.error(
              "Failed to send profile data to backend:",
              response.status
            );
          }
        } catch (error) {
          console.error("Error sending profile data to backend:", error);
        }
      }
    );
  });
});

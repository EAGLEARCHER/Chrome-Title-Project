# Tab Title Viewer Chrome Extension

## Overview
Tab Title Viewer is a Chrome extension that automatically picks up the title of the current tab and displays it in the extension popup. With this extension, you can easily view the title of the webpage you're currently browsing without needing to switch tabs.

## Features
- Persistent storage using `localStorage` to keep track of visited tab titles.
- Reset button functionality to clear stored tab titles and reset the extension.

## Usage
1. Install the extension by following these steps:
   - Download or clone this repository to your local machine.
   - Open Google Chrome and navigate to `chrome://extensions/`.
   - Enable Developer mode in the top right corner.
   - Click on "Load unpacked" and select the directory where the extension files are located.

2. Once installed, you'll see the Tab Title Viewer icon in the Chrome toolbar.
3. Click on the icon to open the extension popup.
4. The popup will display the title of the current tab.
5. Click the "Add Title" button to add the title to the list.
6. To clear stored tab titles, click the "Reset" button.

## Development
- This extension is built using HTML, CSS, and JavaScript.
- The `manifest.json` file contains configuration settings for the extension.
- JavaScript files (`background.js`, `content.js`, `popup.js`) handle extension functionality.
- CSS file (`popup.css`) styles the extension popup.
- Icons for the extension are stored in the `images` directory.

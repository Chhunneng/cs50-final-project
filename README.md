# Copy Histories Chrome Extension

#### Video Demo: [https://youtu.be/RbAA5gSGCWc](https://youtu.be/RbAA5gSGCWc)

## Overview

The Copy Histories Chrome Extension is a versatile and efficient tool designed to enhance your browsing experience by providing a seamless solution for managing and reusing your copy history from any webpage. If you've ever found yourself constantly switching between tabs to retrieve previously copied text, this extension is tailored to streamline your workflow and save you valuable time.

## Features

### 1. Copy History Storage

One of the core features of this extension is its ability to intelligently store a history of your copied text locally. Leveraging the `chrome.storage.local` API, the extension maintains a record of the latest 20 entries, ensuring a balance between preserving your history and optimizing performance.

### 2. User Interface

The extension offers an intuitive and user-friendly popup interface that displays a comprehensive list of your copied texts. This feature is designed to provide easy access and efficient management of your copy history. Each entry in the list comes with options to either copy the text again or delete it from the history, giving you complete control over your stored data.

### 3. Keyboard Shortcut

Navigating the extension is made seamless with the "Alt+C" keyboard shortcut. This quick-access method ensures that you can open the extension effortlessly whenever you need to reference or manage your copy history.

### 4. Copy Event Listener

The content script (`content.js`) actively listens for copy events on web pages. This real-time event handling ensures that your copy history is updated dynamically, reflecting changes as you copy text across different pages.

### 5. Copy and Delete Actions

Copying text from your history is a breeze with the extension. A simple click on the copy icon or text, and the popup window automatically closes after copying. Additionally, the extension empowers you to declutter your history by providing a delete option for each entry.

### 6. Bootstrap and Icons Integration

The extension doesn't just prioritize functionality; it also offers a visually appealing design. Bootstrap, a popular front-end framework, is employed for seamless styling. To enhance the overall user interface, Bootstrap icons are integrated, providing a modern and polished look.

### 7. Popup Positioning

User experience is further optimized through intelligent popup positioning. The extension leverages information about the display to center the popup window on the screen, ensuring a visually pleasing and accessible interaction.

## Execution

The extension operates through three main components:

- **Background Script (`background.js`):** Responsible for initializing an empty copy history array upon installation.

- **Content Script (`content.js`):** Listens for copy events on web pages and communicates with the background script to update the copy history.

- **Popup Interface (`popup.html`, `popup.js`, and `popup.css`):** Provides a user-friendly interface for managing and viewing the copy history.

## Usage

Using the Copy Histories Chrome Extension is straightforward:

1. **Copy Text:** Highlight the text you want to copy on any webpage.
2. **Open Extension:** Use the "Alt+C" keyboard shortcut to open the extension.
3. **Manage Copy History:** The popup displays your copy history, allowing you to copy text again or delete entries.

## Installation

To install the extension:

1. Download the extension files from [GitHub](https://github.com/Chhunneng/cs50-final-project).
2. Open your Chrome browser and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the folder containing the extension files.

## Skills and Research

The development of this extension involved comprehensive research into Chrome extension development and the utilization of Chrome extension APIs. Key skills and areas of expertise include:

- Understanding the intricacies of handling and storing data locally using `chrome.storage.local`.
- Proficiency in event handling within content scripts.
- Skillful use of Bootstrap for styling, coupled with the integration of icons for an enhanced user interface.

## Conclusion

The Copy Histories Chrome Extension is a testament to the power of simplicity and efficiency in web browsing. By providing a centralized and easily accessible copy history, the extension empowers users to work more seamlessly across different tabs and web pages. Whether you're a professional multitasker or someone who values a clean and organized workflow, this extension is designed to cater to your needs.

Feel free to explore the project, contribute to its development, or provide feedback to help shape its future iterations. Your input is valued, and together, we can continue to enhance the browsing experience for users around the world.

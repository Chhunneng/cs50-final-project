(() => {
  chrome.runtime.onInstalled.addListener(function () {
    // Initialize an empty copy history array
    chrome.storage.local.set({ copyHistory: [] });
  });
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    if (request.action === "copyText") {
      // Retrieve the current copy history
      chrome.storage.local.get("copyHistory", function (result) {
        const copyHistory = result.copyHistory || [];
        if (!request.text.trim()) {
          return;
        }
        const available = copyHistory.indexOf(request.text);
        if (available > -1) {
          copyHistory.splice(available, 1);
        }
        // Add the copied text to the history
        copyHistory.push(request.text);
        // Limit 20 items in copyHistory
        if (copyHistory.length > 20) {
          // Remove the oldest item
          copyHistory = copyHistory.slice(copyHistory.length - 20);
        }

        // Save the updated copy history
        chrome.storage.local.set({ copyHistory: copyHistory });
      });
    }
  });
  chrome.commands.onCommand.addListener((command) => {
    if (command === "open_extension") {
      chrome.system.display.getInfo({ singleUnified: true }, (info) => {
        const wDimension = info[0].workArea;
        const { top, left, height, width } = wDimension;
        const w = 440;
        const h = 220;
        const l = width / 2 - w / 2 + left;
        const t = height / 2 - h / 2 + top;
        chrome.windows.create({
          url: "popup.html",
          type: "popup",
          width: w,
          height: h,
          left: Math.round(l),
          top: Math.round(t),
        });
      });
    }
  });
})();

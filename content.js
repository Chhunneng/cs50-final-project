(() => {
  document.addEventListener(
    "copy",
    (e) => {
      const copiedText = window.getSelection().toString();
      chrome.runtime.sendMessage({ action: "copyText", text: copiedText });
    },
    true
  );
})();

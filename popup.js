(() => {
  function escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }

  function renderData(copyHistory, bodyHistoryList) {
    bodyHistoryList.innerHTML = "";
    if (copyHistory.length === 0) {
      const noDataDiv = document.createElement("div");
      noDataDiv.classList.add("no-data");
      noDataDiv.textContent = "No copied text history.";
      bodyHistoryList.appendChild(noDataDiv);
    } else {
      const parentListItem = document.createElement("ul");
      parentListItem.classList.add("list-group");
      let len = copyHistory.length;
      for (let i = len - 1; i >= 0; i--) {
        const text = copyHistory[i];
        const listItem = document.createElement("li");
        listItem.classList.add(
          "list-group-item",
          "d-flex",
          "justify-content-between",
          "align-items-center"
        );

        listItem.innerHTML = `
        <p class="text-truncate copy-btn" role="button" data-index="${i}">${escapeHtml(
          text
        )}</p>
        <span>
          <span class="badge bg-light copy-btn" role="button" data-index="${i}"><i class="bi bi-copy text-primary" alt="Copy"></i></span>
          <span class="badge bg-light delete-btn" role="button" data-index="${i}"><i class="bi bi-x-lg text-danger" alt="Delete"></i></span>
        </span>`;
        parentListItem.appendChild(listItem);
      }
      bodyHistoryList.appendChild(parentListItem);
      document.querySelectorAll(".copy-btn").forEach(function (copyBtn) {
        copyBtn.addEventListener("click", function (e) {
          e.preventDefault();
          const indexToCopy = parseInt(this.getAttribute("data-index"));
          if (
            !isNaN(indexToCopy) &&
            indexToCopy >= 0 &&
            indexToCopy < copyHistory.length
          ) {
            const textToCopy = copyHistory[indexToCopy];
            copyToClipboard(textToCopy);
            setTimeout(() => {
              window.close();
            }, 200);
          }
        });
      });

      document.querySelectorAll(".delete-btn").forEach(function (deleteBtn) {
        deleteBtn.addEventListener("click", function (e) {
          e.preventDefault();
          const indexToDelete = parseInt(this.getAttribute("data-index"));
          if (
            !isNaN(indexToDelete) &&
            indexToDelete >= 0 &&
            indexToDelete < copyHistory.length
          ) {
            // Remove the entry from copyHistory
            copyHistory.splice(indexToDelete, 1);
            // Save the updated copyHistory
            chrome.storage.local.set({ copyHistory: copyHistory });
            // Update the UI
            renderData(copyHistory, bodyHistoryList);
          }
        });
      });
    }
  }

  chrome.storage.local.get("copyHistory", function (result) {
    const copyHistory = result.copyHistory || [];
    const bodyHistoryList = document.getElementById("bodyHistoryList");
    renderData(copyHistory, bodyHistoryList);
  });
})();

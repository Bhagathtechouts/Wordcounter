const textArea = document.getElementById("textArea");

textArea.addEventListener("input", function () {
  const userInput = this.value.trim();
  const wordCount = userInput ? userInput.split(/\s+/).length : 0;
  const wordCountDisplay = document.getElementById("wordCount");
  wordCountDisplay.textContent = `Word Count: ${wordCount}`;
});

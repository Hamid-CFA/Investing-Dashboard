
// dashboard.js
function addToPosition(ticker) {
  alert(`Add more to ${ticker}`);
}

function autoSellPosition(ticker) {
  alert(`Auto-sell triggered for ${ticker}`);
}

function partialSell(ticker) {
  alert(`Partial sell triggered for ${ticker}`);
}

function updateStopLoss() {
  alert("Stop loss update triggered");
}

function autoRebalance() {
  alert("Auto-rebalance triggered");
}

function calculateAndExecute() {
  const ticker = document.getElementById("ticker").value;
  const entry = document.getElementById("entryPrice").value;
  const stop = document.getElementById("stopLoss").value;
  alert(`Calculated for ${ticker} at entry $${entry}, stop $${stop}`);
}

function autoLogEmotion(emotion) {
  alert(`Emotion logged: ${emotion}`);
}

function sendToClaude() {
  const msg = document.getElementById("claudeInput").value;
  const chatBox = document.getElementById("claudeChat");
  const message = document.createElement("div");
  message.classList.add("message", "user");
  message.innerHTML = `<strong>You:</strong> ${msg}`;
  chatBox.appendChild(message);
}

function quickAnalysis(type) {
  alert(`Running quick ${type} analysis`);
}

function autoExecuteTrade(ticker, price, type) {
  alert(`Executing ${type} trade for ${ticker} at $${price}`);
}

function addToWatchlist() {
  alert("Add to Watchlist triggered");
}

function openTradeModal(type) {
  alert(`Open ${type.toUpperCase()} modal`);
}

function autoOptimizeExposure() {
  alert("Auto-Optimize Exposure executed");
}

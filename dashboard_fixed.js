
const sheetURL = "https://script.google.com/macros/s/AKfycbwJ24i4OLwSpwbD43TvbaJDlYWUZjoC2qDKa7EgVgVPM4P5pFE6yMrwsQctyuLeORAG_A/exec";

function fetchPortfolioData() {
  fetch(sheetURL)
    .then(response => response.json())
    .then(data => updatePortfolioTable(data))
    .catch(error => console.error("Error fetching sheet data:", error));
}

function updatePortfolioTable(data) {
  const table = document.getElementById("portfolioTable");
  table.innerHTML = ""; // Clear old rows

  data.forEach(row => {
    const tr = document.createElement("tr");

    // Format percentages and numbers
    const pnlPercent = (row["P&L %"] * 100).toFixed(2) + "%";
    const cushionPercent = (row["Cushion"] * 100).toFixed(2) + "%";

    tr.innerHTML = `
      <td class="ticker">${row.Ticker}</td>
      <td>${row.Shares}</td>
      <td>$${parseFloat(row["Avg Cost"]).toFixed(2)}</td>
      <td>$${parseFloat(row["Live Price"]).toFixed(2)}</td>
      <td>$${parseFloat(row["P&L"]).toFixed(2)}</td>
      <td>${pnlPercent}</td>
      <td>$${parseFloat(row["Stop Loss"]).toFixed(2)}</td>
      <td>${cushionPercent}</td>
      <td><button onclick="addToPosition('${row.Ticker}')">Add</button></td>
    `;
    table.appendChild(tr);
  });
}

setInterval(fetchPortfolioData, 300000); // Every 5 min
window.onload = fetchPortfolioData;

function addToPosition(ticker) {
  alert(`Add more to ${ticker}`);
}

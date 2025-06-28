const sheetURL = "https://script.google.com/macros/s/AKfycbwU9OA7CgnxtoeGOTqXmZT71vVnooyiRxbvMLdjjWeV4Yo7h6ZcycsP0aeMkKB8yy58-g/exec";

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

    tr.innerHTML = `
      <td class="ticker">${row.Ticker}</td>
      <td>${row.Shares}</td>
      <td>$${row["Avg Cost"]}</td>
      <td>$${row["Live Price"]}</td>
      <td>${row["P&L"]}</td>
      <td>${row["P&L %"]}</td>
      <td>${row["Stop Loss"]}</td>
      <td>${row["Cushion"]}</td>
      <td><button onclick="addToPosition('${row.Ticker}')">Add</button></td>
    `;
    table.appendChild(tr);
  });
}

setInterval(fetchPortfolioData, 300000); // Every 5 min
window.onload = fetchPortfolioData;

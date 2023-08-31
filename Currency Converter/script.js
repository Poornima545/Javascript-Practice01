function convertCurrency() {
  const usdAmount = parseFloat(document.getElementById("usdAmount").value);
  const exchangeRate = 0.85; // 1 USD to EUR

  const eurAmount = usdAmount * exchangeRate;
  document.getElementById("eurAmount").textContent = eurAmount.toFixed(2);
}

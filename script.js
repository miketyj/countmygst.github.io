function calculate() {
  const amount = parseFloat(document.getElementById("amount").value);
  const gstRate = 0.07; // Change this to the applicable GST rate in your region (e.g., 0.18 for 18% GST).
  const serviceChargeRate = 0.1; // Change this to the applicable service charge rate (e.g., 0.15 for 15% service charge).

  const includeServiceCharge = document.getElementById("includeServiceCharge").checked;

  let totalAmount;
  if (includeServiceCharge) {
    totalAmount = amount + amount * gstRate + amount * serviceChargeRate;
  } else {
    totalAmount = amount + amount * gstRate;
  }

  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `
    <p>Amount: $${amount.toFixed(2)}</p>
    <p>GST (${(gstRate * 100).toFixed(2)}%): $${(amount * gstRate).toFixed(2)}</p>
    ${includeServiceCharge ? `<p>Service Charge (${(serviceChargeRate * 100).toFixed(2)}%): $${(amount * serviceChargeRate).toFixed(2)}</p>` : ''}
    <p>Total: $${totalAmount.toFixed(2)}</p>
  `;
}

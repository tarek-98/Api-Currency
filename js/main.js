fetch(
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=e275834d455c48038cd0661757665aaf"
)
  .then((result) => {
    let myData = result.json();
    return myData;
  })
  .then((currency) => {
    let amount = document.querySelector(".amount");
    let egpAmount = document.querySelector(".egp span");
    let sarAmount = document.querySelector(".sar span");

    amount.addEventListener("input", () => {
      egpAmount.innerHTML = amount.value * currency.rates["EGP"];
      sarAmount.innerHTML = amount.value * currency.rates["SAR"];
    });
  });

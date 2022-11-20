// Variables
const billInput = document.getElementById("billInput");
const buttonsSelectors = document.querySelectorAll(".buttons-selector");
const numberOfPeople = document.getElementById("numberOfPeople");
const customTipAmount = document.getElementById("customValue");
const resetButton = document.getElementById("resetButton");

// Text Content
const tipAmount = document.getElementById("tipAmount");
const totalPerPerson = document.getElementById("totalPerPerson");

// Global Variables
let billInputValue = 0;
// let customTipAmountValue = 0;
let tipAmountValue = 0;
let numberOfPeopleValue = 1;

// Event Listeners
buttonsSelectors.forEach((button) => {
  button.addEventListener("click", (e) => {
    const { textContent, tagName } = e.target;

    if (tagName === "INPUT") return;
    customTipAmount.value = "";
    customTipAmount.placeholder = "Custom";
    tipAmountValue = parseInt(textContent) / 100;
    calculate(billInputValue, tipAmountValue, numberOfPeopleValue);
  });
});

billInput.addEventListener("input", (e) => {
  billInputValue = +e.target.value;
    calculate(billInputValue, tipAmountValue, numberOfPeopleValue);
    
});

customTipAmount.addEventListener("input", (e) => {
  tipAmountValue = +e.target.value / 100;
  calculate(billInputValue, tipAmountValue, numberOfPeopleValue);
});

resetButton.addEventListener("click", () => {
  billInputValue = 0;
  tipAmountValue = 0;
numberOfPeopleValue = 1;
    calculate(billInputValue, tipAmountValue, numberOfPeopleValue);
    billInput.value = '';
    billInput.placeholder = '100'
    numberOfPeople.value = ''
    numberOfPeople.placeholder = '1'
});

// customTipAmount.addEventListener('focusout', (e) => {
//     e.target.blur()
// })
numberOfPeople.addEventListener("input", (e) => {
  numberOfPeopleValue = +e.target.value;
  calculate(billInputValue, tipAmountValue, numberOfPeopleValue);
});

// /////////////////////////////////////////

// Functions

const calculate = (billvalue, tipamount, noPeople) => {
  const tips = (billvalue * tipamount) / noPeople;

  const amountPerPerson = billvalue / noPeople + tips;

  ouputtingValues(tips, amountPerPerson);
};

const ouputtingValues = (tipamount, Total) => {
    if(!isFinite(tipamount) || !isFinite(Total)) return
  tipAmount.textContent = tipamount.toFixed(2);
  totalPerPerson.textContent = Total.toFixed(2);
};

const tipPercentageDiv = document.querySelector("#tipperct");
const tipAmountDiv = document.querySelector("#tipamt");
const totalAmountDiv = document.querySelector("#totalamt");

function calculateTip(percentage, billAmt) {
  billAmt = parseInt(billAmt);
  
  tipPercentageDiv.value = `${percentage}%`;
  
  if(billAmt === null || billAmt === "" || isNaN(billAmt)) {
    tipAmountDiv.value = `Please enter Bill Amount!`;
    totalAmountDiv.value = `Please enter Bill Amount!`;
    return;
  }
  if(billAmt > 0 ) {
    let activeTip = (billAmt / percentage)  ;
    let finalTip = activeTip.toFixed(2);
    let totalAmt = parseFloat(billAmt - activeTip).toFixed(2);
    
    tipAmountDiv.value = `KD${finalTip}`;
    totalAmountDiv.value = `KD${totalAmt}`;
  } else {
    tipAmountDiv.value = `Please enter valid amount!`;
    totalAmountDiv.value = `Please enter valid amount!`;
  }
  
}
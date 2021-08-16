// function doubleIt(num){
//     const result = num * 2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);


function getInputValue(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    
    // clear input field
    depositInput.value = '';

    return depositAmount;
};







document.getElementById('deposit-button').addEventListener('click', function(){
    
    const depositAmount = getInputValue();
    
    // get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotaltext = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotaltext);
    
    depositTotal.innerText = previousDepositTotal + depositAmount;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;

});

document.getElementById('withdraw-button').addEventListener('click',function(){

    // get current withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    

    // witdraw balance update
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;
    
    
    
    // Update blance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = balanceTotalAmount - withdrawAmount;
});
console.log('task 3');

function atmWithdrawal() {
    let myMoney = 10000;
    let takeOutMoney = prompt(`You have ${myMoney} $ on your account, how much would you like to take out`)
    if (isNaN(takeOutMoney) || takeOutMoney <= 0) {
        return "Invalid withdrawal amount";
    }

    else if (takeOutMoney > myMoney) {

        return "Not enough money";
    }
    let moneyLeftOnMyAcc = myMoney - takeOutMoney;
    let feedback = `You withdrew ${takeOutMoney} $ and you have ${moneyLeftOnMyAcc} $ left on your account`
    return feedback;
}
let withdrawalResult = atmWithdrawal();
alert(withdrawalResult);
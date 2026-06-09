// 13.	Create a class Account with account number, customer name, account type and a private balance. Use get to return balance and set to update balance (with validation).


class Account{
    #balance = 0 
    constructor(accNo,name,type,pin){
        this.accNo = accNo 
        this.name = name 
        this.type = type 
        this.pin = pin 

    }
    set setBalance(amount){
        this.#balance = amount
    }
    get getBalance(){
        return `Your Account balance : ${this.#balance}`
    }
}

savingsAccount  = new Account(1965,"Tharnish","Savings" , 1311) 
savingsAccount.setBalance = 10000
console.log(savingsAccount.getBalance)
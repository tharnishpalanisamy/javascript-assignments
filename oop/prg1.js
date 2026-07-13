// 🥇 Program 1 – Bank Management System (Must Do)
// Concepts Covered
// Class
// Constructor
// this
// Encapsulation (#private)
// Getter
// Setter
// Static method
// Validation
// Requirements
// Class: BankAccount

// Properties
// ----------
// accountNumber
// holderName
// #balance

// Methods
// -------
// deposit()
// withdraw()
// transfer()
// getBalance()
// display()

// Static
// ------
// bankName()

class BankAccount{
    #balance = 0 
    constructor(accno , name , balance){
        this.no = accno ; 
        this.name = name ; 
        this.#balance = balance ; 
    }

    static Bank(){
        console.log('IOB BANK , cbe branch');
    }

    deposit(amount){
        if(amount <= 0) {
            console.log('Invalid entry'); 
            return 
        } 
        this.#balance += amount ; 
        console.log('Successfullly deposited' + amount );
    
    }

    withdraw(amount) {
        if(amount <= 0){
            console.log('invalid entry');
            return 
        }
        else if (amount > this.#balance) {
            console.log('insufficicent balance') ; 
            return ;             
        }
        this.#balance -= amount ; 
        console.log('Successfullly withdraw' + amount );
    }
    get getBalance(){
        return this.#balance
    }

    display(){
        console.log(`Name:${this.name} Account Number : ${this.accno}`) ; 
        return ; 
        
    }
}

let bank1 = new BankAccount(1,'Tharnish' , 10000) ; 
bank1.deposit(50000) ; 
bank1.withdraw(50000) ; 
console.log(bank1.getBalance);
  
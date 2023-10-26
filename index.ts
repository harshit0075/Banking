interface Transaction {
    type: string;
    amount: number;
    timestamp: Date;
  }
  
  class CustomAccount {
    private accountNumber: string;
    private accountHolder: string;
    private accountBalance: number;
    private accountTransactions: Transaction[];
  
    constructor(accountNumber: string, accountHolder: string, initialBalance: number = 0) {
      if (initialBalance < 0) {
        throw new Error("Initial balance cannot be negative");
      }
      this.accountNumber = accountNumber.trim();
      this.accountHolder = accountHolder;
      this.accountBalance = initialBalance;
      this.accountTransactions = [];
    }
  
    deposit(amount: number): void {
      if (amount > 0) {
        this.accountBalance += amount;
        this.accountTransactions.push({
          type: "deposit",
          amount,
          timestamp: new Date(),
        });
  
        console.log(`Deposited ₹${amount}. New account balance: ₹${this.accountBalance}`);
      } else {
        console.log(`Please deposit a valid amount`);
      }
    }
  
    withdraw(amount: number): void {
      if (amount > 0) {
        if (amount <= this.accountBalance) {
          this.accountBalance -= amount;
          this.accountTransactions.push({
            type: "withdraw",
            amount,
            timestamp: new Date(),
          });
          console.log(`Withdrawn ₹${amount}. New account balance: ₹${this.accountBalance}`);
        } else {
          console.log(`Insufficient balance`);
        }
      } else {
        console.log("Please provide a valid value");
      }
    }
  
    getBalance(): number {
      console.log(`Account balance for ${this.accountHolder}: ₹${this.accountBalance}`);
      return this.accountBalance;
    }
  
    getTransactionHistory(): Transaction[] {
      return this.accountTransactions;
    }
  }
  
  // Using;
  
  const myCustomAccount = new CustomAccount("11111", 'Harshit', 5000);
  myCustomAccount.deposit(5000);
  myCustomAccount.withdraw(500);
  myCustomAccount.getBalance();
  
  const transactionHistory = myCustomAccount.getTransactionHistory();
  console.log('Transaction History: ')
  console.log(transactionHistory);

  
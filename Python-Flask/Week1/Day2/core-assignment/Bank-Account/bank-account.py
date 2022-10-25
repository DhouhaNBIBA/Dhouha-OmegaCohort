class BankAccount:
    all_accounts = []
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        self.int_rate= int_rate
        self.balance= balance
        BankAccount.all_accounts.append(self)
        # your code here! (remember, instance attributes go here)
        # don't worry about user info here; we'll involve the User class soon
    def make_deposit(self, amount):
        self.balance += amount
        return self

    def make_withdrawl(self,amount):
        if(self.balance - amount) >= 0:
            self.balance -= amount
        else:
            print("Insufficient funds: Charging a $5 fee")
            self.balance -= 5
        return self
    
    def display_account_info(self):
        print(f"Balance:{self.balance}")
        return self
    def yield_interest(self):
        if (self.balance > 0):
            self.balance += (self.balance * self.int_rate)
        return self

    @classmethod
    def print_all_accounts(cls):
        for account in cls.all_accounts:
            account.display_account_info()
    

        
dhouha = BankAccount(0.01,300)
imen = BankAccount(0.34,231)

dhouha.make_deposit(6230) .make_deposit(10) .make_deposit(60).make_withdrawl(1000).yield_interest() .display_account_info()
imen.make_deposit(850).make_withdrawl(20).make_withdrawl(100).make_withdrawl(80).make_withdrawl(320).yield_interest().display_account_info()

BankAccount.print_all_accounts()



<<<<<<< HEAD
class BankAccount:
    accounts = []
    def __init__(self,int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self,amount):
        if(self.balance - amount) >= 0:
            self.balance -= amount
        else:
            print("Insufficient Funds: Charging a $5 fee")
            self.balance -= 5
        return self
    
    def display_account_info(self):
        return f"{self.balance}"

    def yeild_interest(self):
        if self.balance > 0:
            self.balance += (self.balance * self.int_rate)
        return self

    @classmethod
    def print_all_accounts(cls):
        for account in cls.accounts:
            account.display_account_info()

class User():
    def __init__(self, name):
        self.name = name
        self.account = {"user":BankAccount(0.02,40)}

    def display_user_balance(self):
        print(f"User: {self.name}, Checking Balance: {self.account['user'].display_account_info()}")
        return self
Dhouha= User("Dhouha")
Dhouha.account['user'].deposit(300)_info()
Dhouha.display_user_balance()
=======
class BankAccount:
    accounts = []
    def __init__(self,int_rate,balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self,amount):
        if(self.balance - amount) >= 0:
            self.balance -= amount
        else:
            print("Insufficient Funds: Charging a $5 fee")
            self.balance -= 5
        return self
    
    def display_account_info(self):
        return f"{self.balance}"

    def yeild_interest(self):
        if self.balance > 0:
            self.balance += (self.balance * self.int_rate)
        return self

    @classmethod
    def print_all_accounts(cls):
        for account in cls.accounts:
            account.display_account_info()

class User():
    def __init__(self, name):
        self.name = name
        self.account = {"user":BankAccount(0.02,40)}

    def display_user_balance(self):
        print(f"User: {self.name}, Checking Balance: {self.account['user'].display_account_info()}")
        return self
Dhouha= User("Dhouha")
Dhouha.account['user'].deposit(300)_info()
Dhouha.display_user_balance()
>>>>>>> f4726f8a909e3e92e3df6de93d88a637e592e7fd

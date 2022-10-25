class user:		
    def __init__(self,name,email,account_balance = 0):
        self.name = name
        self.email = email
        self.account_balance = account_balance
    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    def make_withdrawl(self,amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print(f"{self.name} have balance of {self.account_balance}")
        return self

name1=user("nassim","nassim@dojo", 20)
dhouha =user("dhouha","dhouha@dojo", 0)
anoir =user("anoir","anoir@dojo", 74)

dhouha.make_deposit(6230) .make_deposit(10) .make_deposit(60) .make_withdrawl(1000) .display_user_balance()
name1.make_deposit(30).make_deposit(10).make_withdrawl(100).make_withdrawl(80).display_user_balance()
anoir.make_deposit(530).make_withdrawl(80).make_withdrawl(100).make_withdrawl(50).display_user_balance()







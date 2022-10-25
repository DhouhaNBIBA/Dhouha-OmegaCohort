class user:		
    def __init__(self,name,email,account_balance = 0):
        self.name = name
        self.email = email
        self.account_balance = account_balance
    def make_deposit(self, amount):
        self.account_balance += amount
    def make_withdrawl(self,amount):
        self.account_balance -= amount
    def display_user_balance(self):
        print(f"{self.name} have balance of {self.account_balance}")

name1=user("nassim","nassim@dojo", 20)
dhouha =user("dhouha","dhouha@dojo", 0)
anoir =user("anoir","anoir@dojo", 74)

dhouha.make_deposit(6230)
dhouha.make_deposit(10)
dhouha.make_deposit(60)
dhouha.make_withdrawl(1000)
dhouha.display_user_balance()

name1.make_deposit(30)
name1.make_deposit(10)
name1.make_withdrawl(100)
name1.make_withdrawl(80)
name1.display_user_balance()

anoir.make_deposit(530)
anoir.make_withdrawl(80)
anoir.make_withdrawl(100)
anoir.make_withdrawl(50)
anoir.display_user_balance()







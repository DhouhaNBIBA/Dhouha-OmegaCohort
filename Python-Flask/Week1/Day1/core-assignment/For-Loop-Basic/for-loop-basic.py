# Basic

for i in range(0,151):
    print(i)

# Multiples of Five

for x in range(5,1001,5):
    print(x*5)

# Counting, the Dojo Way

for y in range(1,101):
    if(y%5==0):
        print('Coding')
    if(y%10==0):
        print('Coding Dojo')
    else:
        print(y)

# 4.Whoa. That Sucker's Huge 

Oodsum=0
for z in range(0,501):
    if (z%2!=0): 
        # Oodsum+=z
        Oodsum=Oodsum+z
print(Oodsum)

# 5.Countdown by Fours

for j in range(2018,-1,-4):
    print(j)

# 6.Flexible Counter 

lowNum=12
highNum=1632
mult=7
for w in range(lowNum,highNum+1):
    if(w % mult == 0):
        print(f"{lowNum}, {highNum}, {mult}")
        break

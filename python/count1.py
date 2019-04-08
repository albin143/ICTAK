s=raw_input("enter a string")
n=0
p=0
k=0
j=0
for i in s:
	if i in"aeiouAEIOU":
		n=n+1
	elif i in "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ":
		p=p+1
	elif i in" ":
		k=k+1
	elif i in"?":
		j=j+1
print("the numbr of vwls",n)
print("the numbr of consoants",p)
print("the numr of words",k+1)
print("the numbr of?",j)
 


a=int(input("enter 1st num"))
b=int(input("enter 2nd num"))
c=int(input("choose a number 1=adition,2=sub,3=mul,4=divi"))
if(c==1):
	print(a+b)
elif(c==2):
 	print(a-b)
elif(c==3):
	print(a*b)
elif(c==4 and b!=0):
	print(a/b)
else:
	print("invalid operator")

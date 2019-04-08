class person:
    def __init__(self,name,age,cgpa):
        self.name=name
        self.age=age
        self.cgpa=cgpa
student=person("ajay",23,7.7)   
print(student.name,student.age,student.cgpa)
name=input("enter the name")
age=input("enter the age")
cgpa=input("enter the cgpa")
student1=person(name,age,cgpa)
print(student1.name,student1.age,student1.cgpa)

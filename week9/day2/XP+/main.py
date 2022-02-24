#EX1
class Currency:
    def __init__(self, name, amount) -> None:
        self.name = name
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.name}"

    def __int__(self):
        return self.amount

    def __repr__(self):
        return f"{self.__class__.__name__} : {self.amount} {self.name}"

    def __add__(self, other):
        try:
            return self.amount + other
        except:
            if other.name == self.name:
                return self.amount + other.amount
            else:
                return f"TypeError: Cannot add between Currency type {self.name} and {other.name}"

    def __iadd__(self, other):
        try:
            self.amount += other
            return self
        except:
            if other.name == self.name:
                self.amount += other.amount
                return self
            else:
                return f"TypeError: Cannot add between Currency type {self.name} and {other.name}"

    def __call__(self):
        return self.amount


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
print(c1 + c3)

#EX2

from Exercise1 import Family


class TheIncredibles(Family):
    def __init__(self, last_name: str):
        self.last_name = last_name
        self.members = [
            {'name': 'Robert', 'age': 40, 'gender': 'Male', 'is_child': False, 'power': 'Superhuman Strength',
             'incredible_name': 'Mr.Incredible'},
            {'name': 'Helen', 'age': 38, 'gender': 'Female', 'is_child': False, 'power': 'Elasticity',
             'incredible_name': 'Elastigirl'},
            {'name': 'Violet', 'age': 14, 'gender': 'Female', 'is_child': True, 'power': 'Invisibility,Force Fields',
             'incredible_name': 'V'},
            {'name': 'Dashiell', 'age': 10, 'gender': 'Male', 'is_child': True, 'power': 'Super speed',
             'incredible_name': 'Dash'}, ]

    def use_power(self):
        for familymember in self.members:
            if familymember['age'] >= 18:
                print(familymember['name'])
            raise Exception(f"{familymember['name']} is not over 18")

    def incredible_presentation(self):
        for familymember in self.members:
            print(f"Incredible name: {familymember['incredible_name']}\nPower: {familymember['power']}\n")


family1 = TheIncredibles('Parr')
print("Family members:")
family1.print_members()
print("\nIncredible family members:")
family1.incredible_presentation()
family1.born(name='Jack', age='1', gender='Male', is_child=True, power='Unknown Power', incredible_name='Jack Jack')
print("Family members:")
family1.print_members()
print("\nIncredible family members:")
family1.incredible_presentation()
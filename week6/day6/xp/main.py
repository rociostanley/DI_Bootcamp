#EX1
from typing import Union

keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]

result = zip(keys, values)
print(list(result))

#EX2
#family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}

#total_cost = 0

#age: Union[int, str]
#for person, age in family.items():
   # if age < 3:
        #total_cost = 0
      #print(f' {person} has to pay {total_cost}')
    #elif 3 <= age <= 12:
    #total_cost += 10
   # print(f' {person} has to pay {total_cost}')
    #else:
    #total_cost += 15
     #print(f' {person} has to pay {total_cost}')
#print(f' Your total is:  {total_cost}$')



#EX3
brand = {'name': 'Zara', 'creation_date': 1975, 'creator_name': "Amancio Ortega Gaona",
         "type_of_clothes": ["men", "women", "children", "home"],
         "international_competitors": ["Gap", "H&M", "Benetton"], "number_stores": 7000, "major_color": {
        "France": "blue",
        "Spain": 'red',
        "US": ['pink', 'green']
    }, 'number_stores': 2}
l1 = list(brand["type_of_clothes"])
print(f"Zara's clients are: {l1}")

brand['country_creation'] = 'Spain'
if "international_competitors" in brand:

    brand["international_competitors"].append("Desigual")

del brand['creation_date']

print(brand['international_competitors'][2])

print(brand['major_color']['US'][0], brand['major_color']['US'][1])

print(len(brand))

for key in brand:
    print(key)

more_on_zara = {
'creation_date' : 1975,
    'number_stores' : 10000
}
brand.update(more_on_zara)
print(brand)
print(brand['number_stores'])

#EX4
users = [ "Mickey", "Minnie", "Donald","Ariel","Pluto"]

disney_users_A = {users[n]: n for n in range(0, len(users))}
print(disney_users_A)

disney_users_B = {n: users[n] for n in range(0, len(users))}
print(disney_users_B)

users.sort()
disney_users_C = {n: users[n] for n in range(0, len(users))}
print(disney_users_C)


disney_users_D = {users[n]: n for n in range(0, len(users)) if (users[n].find('i') != -1) }
print(disney_users_D)

disney_users_E = {users[n]: n for n in range(0, len(users)) if users[n].lower().find('m') == 0 or users[n].lower().find('p') == 0}
print(disney_users_E)


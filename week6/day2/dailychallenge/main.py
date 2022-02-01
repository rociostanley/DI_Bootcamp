user_input = input('Enter a string of 10 characters long: ')
if (len(user_input)) < 10:
    print("string not long enough")
elif (len(user_input)) > 10:
    print('string too long')
else:
    print(user_input[0], user_input[9])

print(user_input[0:1] + "\n")
print(user_input[0:2] + "\n")
print(user_input[0:3] + "\n")
print(user_input[0:4] + "\n")
print(user_input[0:5] + "\n")
print(user_input[0:6] + "\n")
print(user_input[0:7] + "\n")
print(user_input[0:8] + "\n")
print(user_input[0:9] + "\n")
print(user_input[0:10] + "\n")

user_input = user_input.split(' ')

import random

random.shuffle(user_input)

print(user_input)

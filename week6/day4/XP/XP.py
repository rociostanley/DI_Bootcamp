#EX 1
my_fav_numbers = [7, 3, 2]
print(my_fav_numbers)
my_fav_numbers.append(1)
my_fav_numbers.append(77)
print(my_fav_numbers)
my_fav_numbers.remove(77)
print(my_fav_numbers)

friend_fav_numbers = [9, 4, 8]

our_fav_numbers = my_fav_numbers + friend_fav_numbers
print(our_fav_numbers)

#EX2
# no

#EX3
numbers = range(1, 21)
for number in numbers:
    print(number)

#EX4
basket = ["Banana", "Apples", "Oranges", "Blueberries"];
basket.pop(0)
basket.pop(2)
basket.append('Kiwi')
basket.insert(0, 'Apples')
count_apples = basket.count("Apples")
basket.clear()
print(basket)

#EX6

# ask = ''
# my_name = 'rocio'

# while ask != my_name:
#     ask = input('whats your name? ')
# print('We have the same name')

#EX7
numbers = (1,2,3,5)

for idx, num in enumerate(numbers):
  if (idx % 2 ) == 0:
      print(idx, num)

#EX8
# for numbers in range(1500, 2501):
#     if (numbers % 5) == 0 or (numbers % 7) == 0:
#         print(numbers)

#EX9
fav = input('enter your fav fruit or fruits seperated with a single space ')
fav_list = fav.split()
new_fruit = input('enter a new fruit: ')
for fruit in fav_list:

 if new_fruit == fruit:
     print('You chose one of your favorite fruits! Enjoy!')
 else :
     print('You chose a new fruit. I hope you enjoy')
#EX10
 i = 1
# while True:
#     print(i)
#     i = i + 1
#     if(i > 3):
#         break


# while pizza_top != 'quit':
#     pizza_top = input('What would you like on your pizza? (type quit when you are done):')
#     pizza_sofar = [pizza_top]
#     print(pizza_sofar)

pizza_topping = []
while True:
    pizza_top = input('What would you like on your pizza? (type quit when you are done):')
    if pizza_top != 'quit':
        print(f'Ok I will add {pizza_top}')
        pizza_topping.append(pizza_top)
    else:
        break

print(
    f"You chose those toppings on your pizza: {pizza_topping}. The total is 10$ + {2.5 * len(pizza_topping)}$ for each topping")

#EX11








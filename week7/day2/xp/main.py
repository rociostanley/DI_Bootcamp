# EX1
# def display_message():
#     print('I am learning Python functions')

# display_message()

# EX2
# def favorite_book(title):
#     print(f'One of my favorite books is {title}')

# favorite_book('Alice in Wonderland')

# EX3
##print(city + " is in " + country)
# describe_city("Reykjavik")


# EX4

def number_compare():
    while True:
        usr_number = int(input("Please pick a number from 1 - 100: "))
        if usr_number < 1 or usr_number > 100:
            continue
        break
    random_num = random.randint(1, 100)
    if usr_number == random_num:
        print("Good you have guessed the number")
    else:
        print(f"You have guessed wrong, the PC number is {random_num}")


number_compare()


# EX5

def make_shirt(size, text):
    print(f'The size of your shirt is {size} and the message is {text}')


print(f'The size of your shirt is {size} and the message is {text}')

make_shirt('XL', 'Hello World')


def make_shirt(size='large', text='I love Python'):
    print(f'The size of your shirt is {size} and the message is {text}')
    make_shirt()

    def make_shirt(size='medium', text='I love Python'):
        print(
            f'The size of the shirt is {size} and the message is {text}')
        make_shirt()


# EX6
magicians = ['David Copperfield', 'Lance Burton',
             'Mark Wilson', 'Ricky Jay']


def show_magicians(magicians):
    for name in magicians:
        print(name)


def make_great(magicians):
    # New empty list to add names into
    great_mag = []
    # add the great to each name
    while magicians:
        name_of_mag = magicians.pop()
        mag = name_of_mag + ' the Great'
        great_mag.append(mag)

    # after eliminating each magician we add them back with the great word into the first list.
    for mag in great_mag:
        magicians.append(mag)


make_great(magicians)
show_magicians(magicians)

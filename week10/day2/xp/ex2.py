import random
def roll(num):
    random_num = random.randint(1,101)
    if num == random_num:
        print("Success")

roll(50)
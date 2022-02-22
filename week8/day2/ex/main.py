#EX1
class Cat:
    def __init__(self, name, age):
        self.name = name
        self.age = age


cat_tom = Cat('Tom', 5)
cat_max = Cat('Max', 3)
cat_rafi = Cat('Rafi', 10)

def oldest_cat(cat1, cat2, cat3):
    cats_group = {cat1.name: cat1.age,
                  cat2.name: cat2.age, cat3.name: cat3.age}
    new_cat = max(cats_gruop, key=lambda x: cats_gruop[x])
    oldest = cats_group.get(f'{new_cat}')
    result = (f'{new_cat} and he is {oldest}')
    return result


print(
    f'The oldest cat is {oldest_cat(cat_tom, cat_max, cat_rafi)} years old.')

print('\n')


#EX2
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        x = (self.height * 2)
        print(f"{self.name} jumps {x}cm high!")

    def dogs_info(self):
        print(f"Dog's name is {self.name} and he is {self.height}cm tall.")

davids_dog = Dog('Rex', 50)
davids_dog.dogs_info()
davids_dog.bark()
davids_dog.jump()
print('\n')

sarahs_dog = Dog('Teacup', 20)
sarahs_dog.dogs_info()
sarahs_dog.bark()
sarahs_dog.jump()
print('\n')

if davids_dog.height > sarahs_dog.height:
    print(f'Davids dog, {davids_dog.name}, is bigger than Sarahs dog')
else:
    print(f'Sarahs dog, {sarahs_dog.name}, is bigger than Davids dog')

print('\n')

#EX
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        str_commas_seperated = ','.join([str(items) for items in self.lyrics])
        line_break = str_commas_seperated.replace(',', '\n')
        print(line_break)


stairway = Song(["There's a lady who's sure", "all that glitters is gold",
                 "and she's buying a stairway to heaven"])
stairway.sing_me_a_song()

print('\n')

#EX4

class Zoo:
    def __init__(self,zoo_name):
        self.zoo_name = name_name
        self.animals_lst = []
        self.a_z_sorted = {}

    def add_animal (self, new_animal):
     if new_animal not in self.animals_lst:
            self.animals_lst.append(new_animal)

    def get_animals(self):
        for animal in self.animals_lst:
            print(animal)

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals_lst:
            self.animals_lst.remove(animal_sold)
        else:
            print("Sorry no such animal in the zoo!")

    def sort_animals(self):
        for animal in self.animals_lst:
            self.a_z_sorted.setdefault(animal[0].upper(), []).append(animal)

    def get_groups(self):
        for key, value in self.a_z_sorted.items():
            print(key, ':', value)



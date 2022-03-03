class Human:

    def __init__(self, id_number: str, name: str, age: int, priority: bool, blood_type: str):
        self.id_number = id_number
        self.name = name
        self.age = age
        self.blood_type = blood_type
        self.priority = priority

    def __str__(self):
        return f"name: {self.name} age: {self.age} priority: {self.priority}"


class Queue:

    def __init__(self):
        self.waiting_humans = []

    def add_person(self, person: Human):
        if person.age > 60 or person.priority:
            self.waiting_humans.insert(0, person)
        else:
            self.waiting_humans.append(person)

    def find_in_queue(self, person: Human):
        for i in range(len(self.waiting_humans)):
            if self.waiting_humans[i].id_number == person.id_number:
                return i

        return -1

    def swap(self, person1: Human, person2: Human):
        person1_index = self.find_in_queue(person1)
        person2_index = self.find_in_queue(person2)

        self.waiting_humans.pop(person1_index)
        self.waiting_humans.insert(person1_index, person2)

        self.waiting_humans.pop(person2_index)
        self.waiting_humans.insert(person2_index, person1)

    def get_next(self):
        return self.waiting_humans[0]

    def get_next_blood_type(self, blood_type):
        for human in self.waiting_humans:
            if blood_type == human.blood_type:
                return human

        return None

    @staticmethod
    def get_age(person):
        return person.age

    @staticmethod
    def get_priority(person):
        return 1 if person.priority else 0

    def sort_by_age(self):
        self.waiting_humans.sort(key=Queue.get_age, reverse=True)
        self.waiting_humans.sort(key=Queue.get_priority, reverse=True)

    def __str__(self):
        lst = []
        for i in range(len(self.waiting_humans)):
            lst.append(str(self.waiting_humans[i]))

        return "\n".join(lst)


flor = Human(id_number="111", name="Flor", age=60, priority=True, blood_type="A")
clemente = Human(id_number="222", name="Clemente", age=58, priority=False, blood_type="B")
fede = Human(id_number="333", name="Fede", age=28, priority=True, blood_type="AB")
ale = Human(id_number="444", name="Ale", age=26, priority=False, blood_type="AB")

queue = Queue()

queue.add_person(flor)
queue.add_person(clemente)
queue.add_person(ale)
queue.add_person(fede)

# print("FLor", queue.find_in_queue(flor))
# print("Clemente", queue.find_in_queue(clemente))
# print("Fede", queue.find_in_queue(fede))

print("before sorting")
print(queue)

print("after sorting")
queue.sort_by_age()
print(queue)
# queue.swap(person1=jones, person2=rooney)
# print("after swap")
#
# print("Flor", queue.find_in_queue(flor))
# print("Clemente", queue.find_in_queue(clemente))
# print("Fede", queue.find_in_queue(fede))


l = [flor, clemente, fede]
l.sort()
print(l)
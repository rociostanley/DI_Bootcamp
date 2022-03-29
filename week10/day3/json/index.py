import json


def print_child(child):
	print("name: ", child["firstName"])
	print("age: ", child["age"])


with open("file.json", "r+") as file:
	family = json.load(file)

	childrens = family["children"]
	for child in childrens:
		print_child(child)

	for i in range(len(childrens)):
		childrens[i]["favorite_color"] = "white"

	file.seek(0)
	json.dump(family, file, indent=2)
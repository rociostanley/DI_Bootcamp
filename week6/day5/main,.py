rick_dict = {
	"name": "rick",
	"hoppies": ["coding", "running"]
}

# get a value of a specific key
print(rick_dict["name"])
print(rick_dict["hoppies"])
# print(rick_dict["last_name"])

# add / update key value
rick_dict["last_name"] = "Sanchez"
rick_dict["name"] = "bob"
print(rick_dict)

# remove key
del rick_dict["hoppies"]
print(rick_dict)

# update / insert more than one key using one line of code
# rick_dict["name"] = "bob"
# rick_dict["last_name"] = "bob last name"
rick_dict.update({"name": "bob", "last_name": "bob last name1", "age": 53})
print(rick_dict)

# get all of the keys
for value_name in rick_dict.keys():
	print(f"key: {value_name}")

# get all of the values
for value_name in rick_dict.values():
	print(f"value: {value_name}")

print(rick_dict.items())
for key, value in rick_dict.items():
	print(f"{key}: {value}")

students = ["bob", "alice"]

for index, name in enumerate(students):
	print(f"{index}. {name}")

for index, key in enumerate(rick_dict):
	print(f"{index}. {key} {rick_dict[key]}")
#ex1
sample_dict = {
   "class":{
      "student":{
         "name":"Mike",
         "marks":{
            "physics":70,
            "history":80
         }
      }
   }
}
print(sample_dict["class"]["student"]["marks"]["history"])

sample_dict = {
  "name": "Kelly",
  "age":25,
  "salary": 8000,
  "city": "New york"

}
keys_to_remove = ["name", "salary"]

for k in keys_to_remove:
	# sample_dict.pop(k, None)
	del sample_dict[k]

print(sample_dict)

#pop and get
val = sample_dict.pop("name1", "key not exist")
print(sample_dict)
print(val)


# print(sample_dict["name"])
print(sample_dict.get("name1", "this is deafult for not exist key"))

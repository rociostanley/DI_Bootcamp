matrix = [
	["7", "i", "3"],
	["T", "s", "i"],
	["h", "%", "x"],
	["i", " ", "#"],
	["s", "M", " "],
	["$", "a", " "],
	["#", "t", "%"],
	["^", "r", "!"]
]

rows_num = len(matrix)
columns_num = len(matrix[0])

for i in range(columns_num):  # 0, 1, 2
	for j in range(rows_num):  # 0,1, .. 7
		if matrix[j][i].isalpha():
			print(matrix[j][i])

	print('\n')
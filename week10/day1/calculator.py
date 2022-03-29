# once by importing the whole module
# import operators
#
# print(operators.addOperator(1, 2))
# print(operators.divideOperator(10, 5))


# importing specific functions
# from operators import addOperator, divideOperator
#
# print(addOperator(1, 2))
# print(divideOperator(10, 5))

# by using alias
from operators import addOperator as addOpt, divideOperator as divideOpt

print(addOpt(1, 2))
print(divideOpt(10, 5))
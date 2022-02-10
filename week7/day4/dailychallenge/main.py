def simple_calc_div(num1=5, num2=0):
    try:
        return num1 / num2
    except ZeroDivisionError:
        return "integer division by zero"


print(simple_calc_div(10, 2), "\n", simple_calc_div())

Ask the user for a number between 1 and 100

If the number is a multiple of three, print "Fizz"

If the number is a multiple of five, print "Buzz".

If the number is a multiple is a multiples of both three and five, print "FizzBuzz" instead.


userNum = int(input("Enter a number between 1 and 100: "))

if (userNum % 3 == 0) and (userNum % 5 == 0):
    print("FizzBuzz")
elif userNum % 5 == 0:
    print("Buzz")
elif userNum % 3 == 0:
    print("Fizz")
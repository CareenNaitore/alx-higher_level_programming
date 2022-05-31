#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
lastdigits = int(str(number)[-1])
if lastdigits > 5:
    print(f" Last digit of {number} is {lastdigit} and is greater than 5")
elif lastdigits == 0:
    print(f" Last digit of {number} is {lastdigit} and is 0")
else:
    if lastdigits != 0 or lastdigits > 6:
        print(f" Last digit of {number} is {lastdigit} and is less than 6 and not 0")

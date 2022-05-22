def fizzBuzz(n: int):
    returnArr = []
    for numb in range(1, n+1):
        print('numb: ', numb)
        output = ""
        if (numb % 3 == 0):
            output += "Fizz"
        if (numb % 5 == 0):
            output += "Buzz"
        if (output == ""):
            output = str(numb)
        returnArr.append(output)
    return returnArr


print(fizzBuzz(15))

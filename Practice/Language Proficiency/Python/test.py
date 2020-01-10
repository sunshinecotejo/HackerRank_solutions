print("python")


n = 73
if (n % 5 == 0):
    n = n + (5 - n % 5)
    print(n)
else:
    print("not multiple")
    n = n + (5 - n % 5)
    print(n)


n, yen = map(int, input().split())
for one in range(n + 1):
    for five in range(n + 1 - one):
        ten = n - one - five
        if (one + five * 5 + ten * 10)*1000 == yen:
            print(ten, five, one)
            exit(0)
print("-1 -1 -1")
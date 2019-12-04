a,b,x = map(int,input().split())

right = 10 ** 9 + 1
left = 0
while right - left > 1:
    i = (right + left)//2
    if a * i + b * len(str(i)) > x:
        right = i
    else:
        left = i

print(left)

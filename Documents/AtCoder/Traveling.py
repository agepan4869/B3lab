n = int(input())
for i in  range(n):
    t,x,y = map(int,input().split())
    if t < (x + y) or (x + y + t) % 2:
        print("No")
        exit()
print("Yes")
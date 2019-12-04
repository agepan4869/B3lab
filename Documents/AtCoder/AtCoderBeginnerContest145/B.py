n = int(input())
s = str(input())
t = s[:n//2]
u = s[n//2::]
if t == u:
    print("Yes")
else:
    print("No")
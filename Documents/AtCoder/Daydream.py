S = str(input())
a,b,c,d =  'dream','dreamer','erase','eraser'
S = S.replace(d,"").replace(c,"").replace(b,"").replace(a,"")
if bool(S) == True:
    print("NO")
else:
    print("YES")
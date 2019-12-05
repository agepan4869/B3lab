import sys
sys.setrecursionlimit(10**6)
N = int(input())
v = [[] for i in range(N)]
for i in range(N-1):
    a,b = map(int,input().split())
    a,b = a-1,b-1
    v[a].append([b,i])

ans = [None] * (N-1)

def decide_colord(cur,color):
    cnt = 1
    for (to,j)in v[cur]:
        if cnt == color:
            cnt += 1
        ans[j] = cnt
        decide_colord(to,cnt)
        cnt += 1
decide_colord(0,0)
print(max(ans))
[print(a) for a in ans]
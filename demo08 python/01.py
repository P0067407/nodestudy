d1={'name':'jashn','age':20,'gender':'male'}
d2={'name':'jashn','age':20,'gender':'male'}
d3={'name':'jashn','age':20,'gender':'male'}
print(d1['name'])
#混合集合

#字符串

s1 ='hello'
s2 ="hello"
s3 ='''hello'''
s1==s2==s3
print(s1==s2==s3)

print(s1[0:2])

l=[]
for n in range(0,10000):
    l.append(str(n))
l=' '.join(l)
# print(l)
name = [1,2,3]
try:
    print(name[3])

except Exception as e:
    print(e)

square = lambda x: x**2
print(square(3))
[(lambda x:x*x)(x) for x in range(10)]
print([(lambda x:x*x)(x) for x in range(10)])

lista=[(x) for x in range(10)]
print(lista)
new_list=filter(lambda x:x%2 ==0,lista)
print(new_list)
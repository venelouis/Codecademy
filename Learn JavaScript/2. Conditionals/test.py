print('printting the result of: x + y')
# instead of:
x = int(input('input x:'))
y = int(input('input y:'))
z = x + y
print (f'result of x + y is: {z}')
# you can you use:
print(f'result of x + y is: {int(input("input x: ")) + int(input("input y: "))}')
# or:
print((lambda n1, n2: n1 + n2) (int(input('input n1: ')) , int(input('input n2: '))))
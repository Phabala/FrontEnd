val = int(input('홀수의 정수를 입력하시오'))

for i in range(val):
    print((val-i)/2 * ' ' + i*'*' + (val-i)/2 * ' ')

    
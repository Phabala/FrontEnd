// 1에서 얼마까지 더하면 1000을 초과하는가?

let number = 1, sum = 0;
while (true) {
    sum += number;
    if (sum >1000)
        break
    number++;
}
console.log(sum, number)

sum = 0;
let i;
for (i=1; sum<=1000; i++) {
    sum += i;
}
console.log(sum, i-1)
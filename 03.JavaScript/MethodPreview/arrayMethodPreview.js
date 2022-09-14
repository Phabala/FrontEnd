array = [0, 1, 2, 9, 8, 7]

console.log('concat:', array.concat([4, 5, 6]),'array:', array) // [ 0, 1, 2, 9, 8, 7, 4, 5, 6 ]
console.log('join:', array.join(),'array:', array) // 0,1,2,9,8,7
    console.log('pop:', array.pop(),'array:', array) // 7 (Self Destructive)
    console.log('push:', array.push('a'),'array:', array) // 6 <- 이건 length, 'a'를 맨 뒤에 넣는다. (self destructive)
    console.log('reverse:', array.reverse(),'array:', array) // [ 'a', 8, 9, 2, 1, 0 ] (self destructive)
console.log('slice:', array.slice(2, 5),'array:', array) // [ 9, 2, 1 ] (지정한 부분만 return)
    console.log('sort:', array.sort(),'array:', array) // [ 0, 1, 2, 8, 9, 'a' ] (sel destructive)
    console.log('splice:', array.splice(3, 2), 'array:', array) // 인덱스 3부터 2개를 자름.
    console.log('splice:', array.splice(1, 2, 'b', 'c', 'd', 'e'), 'array:', array) // 인덱스 1부터 2개를 자르고, 그곳을 다른 요소로 채워 넣음. (요소는 하나여도 되고, 여러개도 됨)

// ECMA Script5 에서 추가된 메소드: forEach(), map(), filter()

// forEach() 메소드
array = [0, 1, 2, 9, 8, 7]
console.log('\n------forEach() 메소드------'); // 배열의 요소를 하나씩 뽑아 반복을 돌린다. (property 가 뭔지 알아야 활용이 100% 가능할 것 같다.)
array.forEach((item, index) => {
    console.log(`${index}번째 요소는 ${item}입니다.`);
}); // --> 이렇게 forEach 다음에 소괄호를 크게 감싸야 한다.

// map() 메소드, 배열의 모든 요소를 제공해서 새로운 배열을 만든다.
console.log('\n------map() 메소드------');
let outputA = array.map((item, index) => {
    return item*item; // 요소마다 return 한다.
});
console.log(outputA)

// filter() 메소드, 콜백 함수에서 true를 리턴하는 것으로만 새로운 배열을 만들어 리턴한다.
console.log('\n------filter() 메소드------');
let outputB = array.filter((item, index) => {
    // 짝수만 추출
    return item % 2 == 0;
});
console.log(outputB)
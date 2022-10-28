// 구독도 스토어의 내장 함수 중 하나다. subscribe 함수 안에 리스너 함수를 파라미터로 넣어서 호출해 주면, 이 리스너 함수가 액션이 디스패치 되어 상태가 업데이트 될 때마다 호출된다.
const listner = () => {
    console.log('상태가 업데이트 됨');
}
const store = ''; // 임의로 만들어 둔 store
const unsubscribe = store.subscribe(listner);
unsubscribe(); // 추후 구독을 비활성화 할 때 함수를 호출
/* 43.2.2 JSON.stringify */
// From obj to String, 직렬화(Serializing)
const obj = {
    name:'Lee',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis']
};

// 객체를 JSON 포맷의 문자열로 변환한다.
const json = JSON.stringify(obj);
console.log(typeof json, json);

// 객체를 JSON 포맷의 문자열로 변환하면서 들여쓰기 한다.
const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);

const todos = [
    { id: 1, content: 'HTML', completed: false},
    { id: 2, content: 'CSS', completed: true},
    { id: 3, content: 'JavaScript', completed: false}
];
// 배열을 JSON 포맷의 문자열로 변환한다.
const json2 = JSON.stringify(todos, null, 2);
console.log(typeof json2, json2);
/* 43.2.3 JSON.parse */
// From String to obj, 역직렬화(Deserializing)
const obj = {
    name: 'Lee',
    age: 20,
    alive: true,
    hobby: ['traveling', 'tennis']
};

const json = JSON.stringify(obj);
const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);

const todos = [
    { id: 1, content: 'HTML', completed: false},
    { id: 2, content: 'CSS', completed: true},
    { id: 3, content: 'JavaScript', completed: false}
];

const json2 = JSON.stringify(todos);
const parsed2 = JSON.parse(json2);
console.log(typeof parsed2, parsed2);
let varIterable = ['a', 'b', 'c'];
function foreach(func) {
    for(let i = 0; i<varIterable.length; i++) {
        func(varIterable[i]);
    }
}
let varFunc = (i) => console.log(i);

varIterable.forEach(varFunc);
varIterable.forEach(function(i){console.log(i);});

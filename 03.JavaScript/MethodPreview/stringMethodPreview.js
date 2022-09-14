let ex = 'This Is Example Sentence.'

console.log(ex.charAt(3)) // s
console.log(ex.charCodeAt(3)) // 115
console.log(ex.concat('Args')) // This Is Example Sentence.Args
console.log(ex.indexOf('en')) // 17
console.log(ex.lastIndexOf('en')) // 20
console.log(ex.match('en')) // [ 'en', index: 17, input: 'This Is Example Sentence.', groups: undefined ] -> groups가 뭘까.
console.log(ex.replace('e', 'E')) // This Is ExamplE Sentence.
console.log(ex.search('en')) // 17
console.log(ex.slice(5, 10)) // Is Ex
console.log(ex.split(' ', 3)) // [ 'This', 'Is', 'Example' ]
console.log(ex.substr(5, 20)) // Is Example Sentence. (start, count) start 부터 count 만큼 문자열을 잘라서 리턴합니다.
console.log(ex.substring(5, 20)) // Is Example Sent (start, end) start 부터 end까지 문자열을 잘라서 리턴합니다.
console.log(ex.toLowerCase()) // this is example sentence.
console.log(ex.toUpperCase()) // THIS IS EXAMPLE SENTENCE.
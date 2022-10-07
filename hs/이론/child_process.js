const spawn = require('child_process').spawn;
var varPath = ['C:\\Dev\\Web\\FrontEnd\\변혜성쌤\\child_process.py']
var process = spawn('python', ['-v',varPath]); // 직접 프로세스를 만들어서 실행시켜줌. 결과값이 process에 저장됨.

process.stdout.on('data', function(data){
    console.log(data.toString()); // 내부의 콜백함수에서 파이썬에서의 결과물(텐서플로라던가)를 받아올 수 있다.
})

process.stderr.on('data', function(data){
    console.log(data.toString());
})
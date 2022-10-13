const {
    Worker, isMainThread, parentPort, ab
} = require('worker_threads');

signal = '';

if (isMainThread) { // 부모일 때
    const worker = new Worker(__filename);

    worker.on('message', 
        message => {
            console.log('worker -> main :    ', message);
            if (message == 'worker is done') {
                console.log("main's jobs");
            }
        }
    );

    console.log("main is end");

} else { // 워커일 때
    console.log("worker's jobs");

    parentPort.postMessage('worker is done');
    parentPort.close();

    console.log("worker is end");
}
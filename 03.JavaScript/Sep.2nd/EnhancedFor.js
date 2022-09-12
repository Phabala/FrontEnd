const array = [57, 273.1, '아침밥', '점심밥', true, false];

// for-of
for (let item of array) {
    console.log(item, typeof(item));
}

// for-in, 파이썬의 enumerate
for (let i in array) { // 이게 왜 Enumerate 랑 같지? 아래 콘솔 때문에 그렇게 보이는거 아니야?
    console.log(i, array[i]);
}
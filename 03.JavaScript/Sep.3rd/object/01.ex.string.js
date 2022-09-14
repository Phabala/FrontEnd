// 디지털 시계 (00:00~23:59)가 있다.
// 디지털 시계에서 3이라는 숫자가 있는 시간은 하루에 총 몇 초인가?
// 오답.

count = 0;

for (let i=0, hourbool= false, minutebool=false, secondbool=false;i<24;i++) {
    hourbool = false;
    minutebool = false;
    secondbool = false;

    if (i == ((3) || (13))) hourbool = true;

    for (let j=0;j<60;j++){
        minutebool = false;
        secondbool = false;

        if ((30 <= j <= 39) || (j == ((3)||(13)||(23)||(43)||(53)))) minutebool = true;

        for (let k=0;k<60;k++){
            secondbool = false;
            if ((30 <= k <= 39) || (k == (3)||(13)||(23)||(43)||(53))) secondbool = true;
            if ((hourbool) || (minutebool) || (secondbool)) count ++;
        }
    }
}

console.log(count)
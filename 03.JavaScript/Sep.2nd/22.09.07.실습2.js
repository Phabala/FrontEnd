const month = Math.ceil(Math.random() * 12);

switch (parseInt(month/3)) {
    case 1:
        console.log(month+'월', '봄')
        break
    case 2:
        console.log(month+'월', '여름')
        break
    case 3:
        console.log(month+'월', '가을')
        break
    default:
        console.log(month+'월', '겨울')
}
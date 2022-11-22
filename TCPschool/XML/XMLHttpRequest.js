var xmlHttp = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성함.
xmlHttp.onreadystatechange = function() { // onreadystatechange 이벤트 핸들러를 작성함.
    // 서버상에 문서가 존재하고 요청한 데이터의 처리가 완료되어 응답할 준비가 완료되었을 때
    if(this.status == 200 && this.readyState == this.DONE) {
        // 요청한 데이터를 문자열로 반환함.
        document.getElementById("text").innerHTML = xmlHttp.responseText;
    }
};
xmlHttp.open("GET", "/examples/media/xml_httpxmlrequest_data.txt", true);
xmlHttp.send();

// responseText 프로퍼티는 서버에 요청하여 응답으로 받은 데이터를 문자열로 저장한다.
document.getElementById("text").innerHTML = xmlHttp.responseText;

// responseXML 프로퍼티는 서버에 요청하여 응답으로 받은 데이터를 XML DOM 객체로 저장한다.
xmlObj = xmlHttp.responseXML; // 요청한 데이터를 XML DOM 객체로 반환함.
nameList = xmlObj.getElementsByTagName("name"); // XML DOM 객체에서 요소 이름이 "name"인 요소들을 선택함.
result = "";
for (idx = 0; idx < nameList.length; idx++) {
    // id가 "name"인 요소들의 텍스트 노드를 찾아 그 값을 반환함.
    result += nameList[idx].childNodes[0].nodeValue + "<br>";
}
document.getElementById("text").innerHTML = result;
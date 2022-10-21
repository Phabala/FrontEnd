import axios from 'axios';
import {useState} from 'react'

function Ex01() {
    const [showList, setShowList] = useState(); 
    
    async function getMovies() {
        let list = [];

        const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101";
        const result = await axios.get(url); // axios를 사용해서 (비동기로) get 방식으로 통신
        // async, await 을 적지 않는다면 통신에 대한 응답값으로 Promise 타입이 반환되어진다.
        // 그 이유는 화면을 구성하는 컴포넌트들이 요청을 보낼 때 순차적으로 요청을 처리하기 위함.
        // Promise 형태가 아니라 바로 객체 형태로 갖고 오게 된다.
        console.log(result.data); // result 안의 data 가 json 데이터다
        console.log(result.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm)

        for (let i = 0; i<result.data.boxOfficeResult.dailyBoxOfficeList.length; i++) {
            let rank = result.data.boxOfficeResult.dailyBoxOfficeList[i].rank;
            let movieNm = result.data.boxOfficeResult.dailyBoxOfficeList[i].movieNm;
            let movieCd = result.data.boxOfficeResult.dailyBoxOfficeList[i].movieCd;
            list.push(`<tr><td>${rank}</td><td>${movieNm}</td><td>${movieCd}</td></tr>`)
        }

        console.log('list : ' + list);
        setShowList(list);
        console.log('showList: ' + showList);
    }



    return(
        <>
            <h1>영화데이터 확인페이지</h1>
            <button onClick={getMovies}>영화정보 가져오기</button>
            <table border="1">
                <tr>
                    <td>순위</td>
                    <td>제목</td>
                    <td>개봉일</td>
                </tr>
                {showList} {/* list를 갱신하기 위해 useEffect나 useState를 써야될 것 같은데 어떻게 해야될까 */}
                {/* 이제 출력만 잘 바꾸면 된다. */}
            </table>
        </>
    );
}
export default Ex01;
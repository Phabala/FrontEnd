import {useLocation} from "react-router-dom"; // 쿼리는 useSearchParams

function Home() {
    const location = useLocation();
    const user = location.state.user;

    return (
        <>
            <h1>Home</h1>
            <h1>{user.NICK}님 환영합니다</h1>
        </>
    )
}

export default Home;
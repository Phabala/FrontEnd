import './App.css';
import {Routes, Route} from "react-router-dom";
import Join from './component/Join'
import Login from './component/Login'
import Home from './component/Home'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Join/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;

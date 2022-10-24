import './App.css';
import {Routes, Route} from "react-router-dom";
import Join from './component/Join'
import Login from './component/Login'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Join/>}/>
      <Route path='/Login' element={<Login/>}/>
    </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from  "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Board from "./pages/Board";
import BoardCreate from "./pages/BoardCreate";
import BoardDetail from "./pages/BoardDetail";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/board" element={<Board/>}/>
          <Route path="/create" element={<BoardCreate/>}/>
          <Route path="/board/:boardId" element={<BoardDetail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

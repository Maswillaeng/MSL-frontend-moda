import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Board from "./pages/Board";
import BoardCreate from "./pages/BoardCreate";
import BoardDetail from "./pages/BoardDetail";
import UserPage from "./pages/UserPage";
import Search from "./pages/Search";
import Chat from "./pages/Chat";
import "./App.css";
import Layout from "./Layout";
import ModalContainer from "./components/UI/ModalContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ModalContainer />
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/userpage/:userId" element={<UserPage />} />
            <Route path="/board" element={<Board />} />
            <Route path="/create" element={<BoardCreate />} />
            <Route path="/board/:boardId" element={<BoardDetail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/chat" element={<Chat />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

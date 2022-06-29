import "../assets/reset.css";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "../MainPage/MainPage";
import UserContext from "../contexts/UserContext";
import TokenContext from "../contexts/TokenContext";
import { useState } from "react";

export default function App() {
  const [userInfo, setUserInfo] = useState({});
  const [token, setToken] = useState("");

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      <TokenContext.Provider value={{ token, setToken }}>
        <BrowserRouter>
          <Container>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/main" element={<MainPage />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </TokenContext.Provider>
    </UserContext.Provider>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8c11be;
  min-height: 100vh;
`;

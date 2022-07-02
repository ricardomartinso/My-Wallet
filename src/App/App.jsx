import "../assets/reset.css";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "../MainPage";
import UserContext from "../contexts/UserContext";
import TokenContext from "../contexts/TokenContext";
import { useState } from "react";
import CashIn from "../CashRegisters/cashIn";
import CashOut from "../CashRegisters/cashOut";

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
              <Route path="/nova-entrada" element={<CashIn />} />
              <Route path="/nova-saida" element={<CashOut />} />
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

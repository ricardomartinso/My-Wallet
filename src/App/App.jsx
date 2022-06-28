import "../assets/reset.css";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import MainPage from "../MainPage/MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #8c11be;
  min-height: 100vh;
`;

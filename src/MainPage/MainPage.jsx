import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import TokenContext from "../contexts/TokenContext";
import { useContext } from "react";
import exit from "../assets/exit.svg";
export default function MainPage() {
  const { userInfo } = useContext(UserContext);
  return (
    <MainPageStyled>
      <Header>
        <h1>Olá, {userInfo.name}</h1>
        <img src={exit} />
      </Header>
      <Registros>Não há registros de entrada ou saídas!</Registros>
      <BotoesRegistro>
        <BotaoRegistro>
          <p>+</p>
          <div>Nova entrada</div>
        </BotaoRegistro>
        <BotaoRegistro>
          <p>-</p>
          <div>Nova saída</div>
        </BotaoRegistro>
      </BotoesRegistro>
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding-top: 30px;
  h1 {
    font-size: 30px;
    color: white;
  }
`;
const Registros = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  height: 446px;
  margin-top: 30px;

  color: #868686;
  font-size: 20px;
  background-color: white;
  border: none;
  border-radius: 5px;
`;
const BotoesRegistro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  gap: 10px;
  margin-top: 20px;
`;
const BotaoRegistro = styled.button`
  background-color: #a328d6;
  border: 1px solid #8f30b8;
  width: 100%;
  height: 114px;
  position: relative;
  p {
    position: absolute;
    top: 8px;
    left: 12px;
    color: white;
    font-size: 30px;
  }
  div {
    width: 18px;
    color: white;
    font-size: 18px;
    position: absolute;
    bottom: 10px;
    left: 10px;
  }
`;

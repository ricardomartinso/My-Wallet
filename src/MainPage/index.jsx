import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import TokenContext from "../contexts/TokenContext";
import { useContext, useEffect, useState } from "react";
import exit from "../assets/exit.svg";
import { Link } from "react-router-dom";
import axios from "axios";

export default function MainPage() {
  const { token } = useContext(TokenContext);
  const { userInfo } = useContext(UserContext);
  const [hasRegisters, setHasRegister] = useState(false);
  const [cashRegisters, setCashRegisters] = useState([]);

  useEffect(() => {
    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get("http://localhost:5000/cash", auth);

    promise.then((response) => {
      setCashRegisters(response.data);
      setHasRegister(true);
    });
    promise.catch((response) => {
      console.log(response);
    });
  }, []);

  return (
    <MainPageStyled>
      <Header>
        <h1>Olá, {userInfo.name}</h1>
        <img src={exit} />
      </Header>
      <Registros>
        {hasRegisters ? (
          <>
            <CashRegisters>
              {cashRegisters.map((registro) => {
                //cash_in / cash_out
                return (
                  <CashRegister>
                    <TimeDescription>
                      <CashTime>{registro.time}</CashTime>
                      <CashDescription>{registro.description}</CashDescription>
                    </TimeDescription>
                    <Price color={registro.type}>{registro.value}</Price>
                  </CashRegister>
                );
              })}
            </CashRegisters>
            <Balance>
              <p>SALDO</p>
              <Total>2845.6</Total>
            </Balance>
          </>
        ) : (
          <p> Não há registros de entrada ou saídas! </p>
        )}
      </Registros>
      <BotoesRegistro>
        <BotaoRegistro to="/nova-entrada">
          <p>+</p>
          <div>Nova entrada</div>
        </BotaoRegistro>
        <BotaoRegistro to="/nova-saida">
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
  flex-direction: column;

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
const BotaoRegistro = styled(Link)`
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
const CashRegisters = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  color: black;
  width: 100%;
  height: 100%;
  padding: 14px;
  font-family: "Raleway", sans-serif;
`;
const CashRegister = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;
const CashTime = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c6c6c6;
  font-size: 16px;
  margin-right: 10px;
`;
const CashDescription = styled.p`
  color: black;
  font-size: 16px;
`;
const TimeDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Price = styled.div`
  color: ${(props) => (props.color === "cash_in" ? "#03AC00" : "#C70000")};
  font-size: 16px;
`;
const Balance = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: black;
  font-weight: bold;
  font-size: 17px;
  padding: 14px;
  font-family: "Raleway", "sans-serif";
`;
const Total = styled.p`
  color: green;
  font-weight: normal;
`;

import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TokenContext from "../contexts/TokenContext";

export default function CashOut() {
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const { token } = useContext(TokenContext);
  const navigate = useNavigate();

  function cashRegister(event) {
    event.preventDefault();

    const auth = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const cash = {
      value: Number(parseFloat(valor.replace(",", ".")).toFixed(2)),
      description: descricao,
      type: "cash_out",
    };

    const promise = axios.post(
      "https://api-mywalletdriven.herokuapp.com/cash-out",
      cash,
      auth
    );

    promise.then((response) => {
      navigate("/main", { replace: true });
      alert("Nova saída cadastrada!");
    });
    promise.catch((response) => {
      console.log(response);
    });
  }

  return (
    <>
      <NovaSaida>Nova saída</NovaSaida>

      <FormStyled onSubmit={cashRegister}>
        <input
          type="type"
          pattern="^([0-9]+([.,][0-9]*)?|[.,][0-9]+)$"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />

        <Button type="submit">Salvar Entrada</Button>
      </FormStyled>
    </>
  );
}
const NovaSaida = styled.h1`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding-left: 5%;
  margin-top: 20px;
  margin-bottom: 30px;
  color: white;
  font-size: 26px;
  font-weight: bold;
`;
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    width: 90%;
    height: 58px;
    margin-bottom: 13px;
    background-color: white;
    border: none;
    font-size: 20px;
    color: black;
    padding-left: 8px;
    &::placeholder {
      font-size: 20px;
      color: black;
    }
  }
`;
const Button = styled.button`
  color: white;
  font-size: 20px;
  background-color: #a328d6;
  width: 90%;
  height: 46px;
  border: none;
`;

import styled from "styled-components";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <h1>MyWallet</h1>
      <Form action="" method="post">
        <input type="email" name="" id="" placeholder="Email" />
        <input type="password" name="" id="" placeholder="Senha" />
        <button>Entrar</button>
      </Form>
      <LinkStyled to="/register">Primeira vez? Cadastre-se!</LinkStyled>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  h1 {
    font-family: "Saira Stencil One", cursive;
    color: white;
    font-size: 32px;
    margin-bottom: 24px;
  }
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 4%;

  input {
    border: none;
    border-radius: 5px;
    height: 58px;
    margin-bottom: 12px;
    &::placeholder {
      color: black;
      font-size: 20px;
      padding-left: 15px;
    }
  }
  button {
    border: none;
    border-radius: 5px;
    font-size: 20px;
    color: white;
    background-color: #a328d6;
    height: 46px;
  }
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-top: 39px;
`;

import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import TokenContext from "../contexts/TokenContext";
import UserContext from "../contexts/UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken } = useContext(TokenContext);
  const { setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function loginApp(event) {
    event.preventDefault();
    const userLogin = {
      email,
      password,
    };
    setIsLoading(true);
    const promise = axios.post(
      "https://api-mywalletdriven.herokuapp.com/login",
      userLogin
    );
    promise.then((response) => {
      setUserInfo({ ...response.data.user });
      setToken(response.data.token);
      navigate("/main", { replace: true });
    });

    promise.catch(() => {
      setIsLoading(false);
      alert("Usuário ou Senha inválidos");
    });
  }

  return (
    <LoginPageStyled>
      <h1>MyWallet</h1>
      <Form
        loginApp={loginApp}
        setEmail={setEmail}
        email={email}
        password={password}
        setPassword={setPassword}
        isLoading={isLoading}
      />
    </LoginPageStyled>
  );
}
function Form({ loginApp, setEmail, email, password, setPassword, isLoading }) {
  return (
    <>
      <FormStyled onSubmit={loginApp}>
        <Input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
          disabled={isLoading}
        />
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="senha"
          id="senha"
          placeholder="Senha"
          disabled={isLoading}
        />
        {isLoading ? (
          <Button type="submit" disabled={true}>
            <ThreeDots color="#FFFFFF" />
          </Button>
        ) : (
          <Button type="submit">Entrar</Button>
        )}
      </FormStyled>
      <LinkStyled to="/register">Primeira vez? Cadastre-se!</LinkStyled>
    </>
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
const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 100%;
  padding: 0 4%;
`;
const Input = styled.input`
  font-size: 18px;
  border: none;
  border-radius: 5px;
  height: 58px;
  margin-bottom: 12px;
  padding-left: 15px;
  &::placeholder {
    color: black;
    font-size: 20px;
  }
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  color: white;
  background-color: #a328d6;
  height: 46px;
  &:disabled {
    background-color: #a228d637;
  }
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-top: 39px;
`;

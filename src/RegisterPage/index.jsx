import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function register(event) {
    event.preventDefault();
    if (password !== confirmedPassword) {
      alert("Senha e senha confirmada diferem! Por favor, digite novamente.");
      return;
    }
    const userRegister = {
      email,
      name,
      password,
    };
    setIsLoading(true);
    const promise = axios.post("http://localhost:5000/register", userRegister);
    promise.then((response) => {
      navigate("/", { replace: true });
      alert("Cadastro finalizado");
    });
    promise.catch((err) => {
      setIsLoading(false);
      alert("Falha no cadastro, por favor tente novamente!");
    });
  }
  return (
    <RegisterPageStyled>
      <h1>MyWallet</h1>
      <Form
        isLoading={isLoading}
        name={name}
        email={email}
        password={password}
        confirmedPassword={confirmedPassword}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        setConfirmedPassword={setConfirmedPassword}
        register={register}
        disabled={isLoading}
      />
    </RegisterPageStyled>
  );
}
function Form({
  name,
  email,
  password,
  confirmedPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmedPassword,
  register,
  disabled,
  isLoading,
}) {
  return (
    <>
      <FormStyled onSubmit={register}>
        <Input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          disabled={isLoading}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
          required
        />
        <Input
          type="password"
          placeholder="Confirme a sua Senha"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          disabled={isLoading}
          required
        />
        {isLoading ? (
          <Button type="submit" disabled={true}>
            <ThreeDots color="#FFFFFF" />
          </Button>
        ) : (
          <Button type="submit">Cadastrar</Button>
        )}
      </FormStyled>
      <LinkStyled to="/">Já tem uma conta? Faça o login!</LinkStyled>
    </>
  );
}
const RegisterPageStyled = styled.div`
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
  border: none;
  border-radius: 5px;
  height: 58px;
  margin-bottom: 12px;
  &::placeholder {
    color: black;
    font-size: 20px;
    padding-left: 15px;
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
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  margin-top: 39px;
`;

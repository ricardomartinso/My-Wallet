import styled from "styled-components";

export default function MainPage() {
  return (
    <MainPageStyled>
      <Header>
        <h1>Olá, Fulano</h1>
        <span>button</span>
      </Header>
      <Registros>Não há registros de entrada ou saídas!</Registros>
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
  width: 100%;
  padding: 15px;
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

import React, { useState, useEffect } from "react";
import { Container, Card } from "./style";
import { CustomInput } from "../../components/Input";

export const Login = () => {
  const [ToggleCard, setToggleCard] = useState(false);
  const action = ToggleCard != false ? 'Cadastrar' : 'Logar';

  const Logar = () => {
    alert("logou");
  };
  const Cadastrar = () => {
    alert("cadastrou");
  };
  return (
    <Container>
      <Card>
        <h1>{action}</h1>
        <CustomInput type="text" name="Usuário" />
        <CustomInput type="password" name="Senha" />
        <button onClick={action == "Logar" ? Logar : Cadastrar}>{action}</button>
        <p>{action == "Logar" ? "Já tem uma conta?" : "Não tem uma conta?"}</p>
        <p id='action' onClick={()=>{setToggleCard(!ToggleCard)}}>{action == "Logar" ? "Cadastre-se" : "Entrar"}</p>
      </Card>
    </Container>
  );
};

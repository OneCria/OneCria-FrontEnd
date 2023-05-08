import React, { useState, useEffect } from "react";
import { Container, Card } from "./style";
import { CustomInput } from "../../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [ToggleCard, setToggleCard] = useState(false);
  const action = ToggleCard != false ? "Cadastrar" : "Logar";

  const [User, setUser] = useState();
  const [Pass, setPass] = useState();
  const [confirmPass, setconfirmPass] = useState();
  const Cadastrar = async () => {

      const data = {
        name: User,
        password: Pass,
      };
      try {
        await axios.post(`http://localhost:3001/users`, data)
        .then((response)=>{
          window.location.reload();
        })
      } catch (error) {
        alert("Erro ao carregar a página");
      }
  };
  return (
    <Container>
      <Card>
        <h1>{action}</h1>
        <CustomInput
          name="Usuario"
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <CustomInput
          type="password"
          name="Senha"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
        {action != "Logar" ? (
          <CustomInput
            type="password"
            name="Confirmar Senha"
            onChange={(e) => {
              setconfirmPass(e.target.value);
            }}
          />
        ) : (
          ""
        )}
        <button onClick={action == "Logar" ? Logar : Cadastrar}>
          {action}
        </button>
        <p>{action == "Logar" ? "Já tem uma conta?" : "Não tem uma conta?"}</p>
        <p
          id="action"
          onClick={() => {
            setToggleCard(!ToggleCard);
          }}
        >
          {action == "Logar" ? "Cadastre-se" : "Entrar"}
        </p>
      </Card>
    </Container>
  );
};

import React, { useState, useEffect } from "react";
import { Container, Card } from "./style";
import { CustomInput } from "../../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const Login = () => {
  const [ToggleCard, setToggleCard] = useState(false);
  const action = ToggleCard != false ? "Cadastrar" : "Logar";

  const [User, setUser] = useState();
  const [Pass, setPass] = useState();
  const [confirmPass, setconfirmPass] = useState();
  const [Email, setEmail] = useState();

  const Cadastrar = async () => {
    if (User && Pass && confirmPass) {
      try {
        await axios
          .post(`http://localhost:3001/users`, {
            name: User,
            password: Pass,
            email: Email
          })
          .then((response) => {
            Swal.fire({
              title: "Usuário cadastrado com sucesso!",
              icon: "success",
              timer: 1200,
            });
          });
      } catch (error) {
        Swal.fire({
          title: "Usuário ou senha inválido",
          icon: "error",
          timer: 1200,
        });
      }
    } else {
      Swal.fire({
        title: "Preencha todos os campos",
        icon: "error",
        timer: 1200,
      });
    }
  };
  const Logar = () => {};
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
        {action != "Logar" ? (
          <CustomInput
          type="text"
          name="e-mail"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        ):""}
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
              if(e.target.value == Pass){
                setconfirmPass(e.target.value);
              }
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

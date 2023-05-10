import React, { useState, useEffect, useContext } from "react";
import { Container, Card } from "./style";
import { CustomInput } from "../../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import jwt from 'jwt-decode'
import UserContext from "../../contexts/user.context";

export const Login = () => {
  const [ToggleCard, setToggleCard] = useState(false);
  const action = ToggleCard != false ? "Cadastrar" : "Logar";

  const [User, setUser] = useState();
  const [Pass, setPass] = useState();
  const [confirmPass, setconfirmPass] = useState();
  const { UserLogged, setUserLogged } = useContext(UserContext);

  const navigate = useNavigate();
  const Cadastrar = async () => {
    if (User && Pass && confirmPass) {
      try {
        await axios
          .post(`http://localhost:3001/users`, {
            name: User,
            password: Pass
          })
          .then((response) => {
            Swal.fire({
              title: "Usuário cadastrado com sucesso!",
              icon: "success",
              timer: 1200,
            }),
            
              setTimeout(() => {
                location.reload();
              }, 1200);
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
  const Logar = () => {
    if (User && Pass) {
      try {
        axios
          .post(`http://localhost:3001/login`, {
            username: User,
            password: Pass,
          })
          .then((res) => {
            const user = jwt(res.data.access_token)
            console.log(user)
            localStorage.setItem("user", User)
            localStorage.setItem("id", user.sub)
              Swal.fire({
                title: "Logado com sucesso",
                icon: "success",
                timer: 1200,
              });
              setUserLogged({ name: User });
             setTimeout(() => {
              navigate("/");
            }, 1200);
          });
      } catch (error) {
        Swal.fire({
          title: "Usuário ou senha inválido",
          icon: "error",
          timer: 1200,
        });
      }
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
              if (e.target.value == Pass) {
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

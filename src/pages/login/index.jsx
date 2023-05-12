import React, { useState, useEffect, useContext } from "react";
import { Container, Card, BoxLeft } from "./style";
import { CustomInput } from "../../components/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import jwt from "jwt-decode";
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
            password: Pass,
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
  const Logar = async () => {
    if (User && Pass) {
      const res = await axios.post(`http://localhost:3001/login`, {
        username: User,
        password: Pass,
      });

      const user = jwt(res.data.access_token);
      localStorage.setItem("user", User);
      localStorage.setItem("id", user.sub);
      Swal.fire({
        title: "Logado com sucesso",
        icon: "success",
        timer: 1200,
      });
      setUserLogged({ name: User });
      setTimeout(() => {
        navigate("/");
      }, 1200);
    }
  };
  return (
    <Container>
      <Card>
        {/* ESQUERDA */}
        <BoxLeft>
          <div>
            <div>
              <label htmlFor="Usuario">Nome de Usuário</label>
              <input
                name="Usuario"
                placeholder="Nome de Usuário"
                onChange={(e) => {
                  setUser(e.target.value);
                  e.preventDefault();
                }}
              />
            </div>
            <div>
              <label htmlFor="Senha">Senha</label>
              <input
                type="password"
                name="Senha"
                placeholder="Senha"
                onChange={(e) => {
                  setPass(e.target.value);
                  e.preventDefault();
                }}
              />
            </div>
            <button onClick={Logar}> Entrar</button>
          </div>
        </BoxLeft>
        {/* DIREITA */}
        <div>
          <img src="src/media/login.png" alt="" />
        </div>
      </Card>
    </Container>
  );
};

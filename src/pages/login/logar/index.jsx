import React, { useState, useEffect, useContext } from "react";
import { Card, BoxLeft, BoxRight } from "../style";
import UserContext from "../../../contexts/user.context";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode";
import Swal from "sweetalert2";
import axios from "axios";

export const SignIn = ({actions}) => {
  const [User, setUser] = useState();
  const [Pass, setPass] = useState();
  const { UserLogged, setUserLogged } = useContext(UserContext);

  const navigate = useNavigate();
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
          <p>
            Não possui uma conta?
            <button
              id="Signup"
              onClick={() => {
                actions.setToggleCard(true);
              }}
            >
              Cadastrar
            </button>
          </p>
        </div>
      </BoxLeft>
      {/* DIREITA */}
      <BoxRight>
        <img src="src/media/login.png" alt="" />
      </BoxRight>
    </Card>
  );
};

import React, { useState, useEffect, useContext } from "react";
import { Card, BoxLeft, BoxRight } from "../style";
import Swal from "sweetalert2";
import axios from "axios";

export const SignUp = ({ actions }) => {
  const [confirmPass, setConfirmPass] = useState();
  const [Pass, setPass] = useState();
  const [User, setUser] = useState();

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
  return (
    <Card>
      {/* ESQUERDA */}
      <BoxLeft>
        <img src="src/media/login.png" alt="" />
      </BoxLeft>
      {/* DIREITA */}
      <BoxRight>
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
        <div>
          <label htmlFor="Senha">Confirmar senha</label>
          <input
            type="password"
            name="ConfirmSenha"
            placeholder="Senha"
            onChange={(e) => {
              setConfirmPass(e.target.value);
              e.preventDefault();
            }}
          />
        </div>
        <button onClick={Cadastrar}> Cadastrar</button>
        <p>
          Já possui uma conta?
          <button
            id="Signup"
            onClick={() => {
              actions.setToggleCard(false);
            }}
          >
            Logar
          </button>
        </p>
      </BoxRight>
    </Card>
  );
};

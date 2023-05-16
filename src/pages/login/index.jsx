import React, { useState } from "react";
import { Container } from "./style";
import { SignIn } from "./logar";
import { SignUp } from "./cadastrar";

export const Login = () => {
  const [ToggleCard, setToggleCard] = useState(false);
  const action = ToggleCard != false ? "Cadastrar" : "Logar";

  return (
    <Container>
<<<<<<< HEAD
      {action == "Logar" ? (
        <SignIn actions={{ToggleCard, setToggleCard}}/>
      ) : (
        <SignUp actions={{ToggleCard, setToggleCard}}/>
      )}
=======
      <Card>
        {/* ESQUERDA */}
        <BoxLeft>
          <div>
            <div>
              <label htmlFor="Usuario">
                Nome de Usuário
                <input
                name="Usuario"
                placeholder="Ex: Monkey D. Luffy"
                onChange={(e) => {
                  setUser(e.target.value);
                  e.preventDefault();
                }}
              />
                </label>
            </div>
            <div>
              <label htmlFor="Senha">
                Senha
                <input
                type="password"
                name="Senha"
                placeholder="Ex: S3nH4@"
                onChange={(e) => {
                  setPass(e.target.value);
                  e.preventDefault();
                }}
              />
                </label>
            </div>
            <button onClick={Logar}>Entrar</button>
          </div>
        </BoxLeft>
        {/* DIREITA */}
        <div>
          <img src="src/media/login.png" alt="" />
        </div>
      </Card>
>>>>>>> 29b881c6c1e82a92af825daa20a21779b609fccd
    </Container>
  );
};

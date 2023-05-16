import React, { useState } from "react";
import { Container } from "./style";
import { SignIn } from "./logar";
import { SignUp } from "./cadastrar";

export const Login = () => {
  const [ToggleCard, setToggleCard] = useState(false);
  const action = ToggleCard != false ? "Cadastrar" : "Logar";

  return (
    <Container>
      {action == "Logar" ? (
        <SignIn actions={{ToggleCard, setToggleCard}}/>
      ) : (
        <SignUp actions={{ToggleCard, setToggleCard}}/>
      )}
    </Container>
  );
};

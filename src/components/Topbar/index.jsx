import React, { useState, useEffect, useMemo } from "react";
import * as S from "./style";
import Nav from "./Nav";
import { useNavigate, Link } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate;
  const [User, setUser] = useState();

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("UserLogged"));
    try {
      setUser(login);
    } catch (error) {}
  }, []);
  const logo = useMemo(() => {
    const logos = [
      "zoro",
      "nami",
      "usopp",
      "sanji",
      "robin",
      "chopper",
      "franky",
      "brook",
      "luffy",
    ];
    const random = Math.floor(Math.random() * logos.length);
    return (
      <>
        <Link to={`/`}>
          {" "}
          <img src={"src/media/icons/" + logos[random] + ".png"}></img> One Cria
        </Link>
      </>
    );
  }, []);
  return (
    <S.Topo>
      <div>{logo}</div>
      <div>
        <Nav
          dir={[
            { title: "Página inicial", link: "/" },
            { title: "Novo Personagem", link: "character" },
            { title: "Moveset", link: "moveset" },
            User
              ? { title: User, link: "profile" }
              : { title: "Login", link: "login" },
          ]}
        />
      </div>
    </S.Topo>
  );
};

export default Topbar;

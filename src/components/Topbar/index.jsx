import React, { useState, useEffect, useMemo } from "react";
import * as S from "./style";
import Nav from "./Nav";
import { useNavigate, Link } from "react-router-dom";

const Topbar = () => {
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
            { title: "Seus personagens", link: "characters" }
          ]}
        />
      </div>
    </S.Topo>
  );
};

export default Topbar;

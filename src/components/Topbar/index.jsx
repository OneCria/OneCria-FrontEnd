import React, { useState, useEffect, useMemo, useContext } from "react";
import * as S from "./style";
import Nav from "./Nav";
import { useNavigate, Link } from "react-router-dom";
import UserContext from "../../contexts/user.context";

const Topbar = () => {
  const { UserLogged, setUserLogged } = useContext(UserContext);
  const [User, setUser] = useState(UserLogged.name);
  const [ID, setID] = useState(UserLogged.id);
  useEffect(() => {
    setUser(UserLogged.name);
    setID(UserLogged.id);
  }, [UserLogged.name]);
  const navigate = useNavigate();
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
      {User ? (
        <>
          <div>
            <Nav
              dir={[
                { title: "Página Inicial", link: "/" },
                { title: "Novo Personagem", link: "character" },
                { title: "Seus personagens", link: "characters" },
              ]}
            />
          </div>
          <div
            onClick={() => {
              navigate('/')
              setUserLogged("");
              localStorage.removeItem("user");
              localStorage.removeItem("id");
            }}
          >
            Olá, {User}
            <br /> Logout
          </div>
        </>
      ) : (
        <div>
          <Nav
            dir={[
              { title: "Página Inicial", link: "/" },
              { title: "Login", link: "login" },
            ]}
          />
        </div>
      )}
    </S.Topo>
  );
};

export default Topbar;

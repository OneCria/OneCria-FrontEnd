import React, { useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";

const Nav = ({ dir }) => {
  const Links = useMemo(
    () =>
      dir.map((link) => {
        return <li><Link to={`${link.link}`}>{link.title}</Link></li>;
      }),
    [dir]
  );
  return <ul>{Links}</ul>;
};
export default Nav;

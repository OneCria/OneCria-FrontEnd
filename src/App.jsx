import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import "./styles/app.css";
import Topbar from "./components/Topbar";
import UserContext from "./contexts/user.context";
import { useState } from "react";
function App() {
  const user = localStorage.getItem('user')
  const id = localStorage.getItem('id')
  const [UserLogged, setUserLogged ] = useState({ name: user ?? '', id});
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserContext.Provider value={{ UserLogged, setUserLogged }}>
          <Topbar />
          <Outlet />
        </UserContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;

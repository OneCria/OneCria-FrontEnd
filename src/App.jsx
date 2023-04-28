import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import './styles/app.css'
import Topbar from "./components/Topbar";
function App() {

  return (
  <>
  <ThemeProvider theme={theme}>
    <Topbar/>
    <Outlet />
  </ThemeProvider>
    
  </>
  )
}

export default App
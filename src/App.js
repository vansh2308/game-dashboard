import React from "react";
import { useState } from "react";
import "./style.css";
import Nav from "./components/nav";
import LeftMenu from "./components/leftMenu";
import Main from "./components/main";
import RightSidebar from "./components/rightSidebar";
// eslint-disable-next-line

const lightTheme = {
  name: "LIGHT",
  bg: "#FDFDFD",
  sec: "#D9D9D9",
  font: "#5E5E5E"
}


function App() {
  const [theme, setTheme] = useState(lightTheme);



  return (
    <div className="App" style={{backgroundColor: theme.bg}}>

      <div style={{backgroundColor: theme.sec}}></div>

      <Nav theme={theme}></Nav>

      <LeftMenu theme={theme} themechanger={setTheme}></LeftMenu>

      <Main theme={theme}></Main>

      <RightSidebar theme={theme}></RightSidebar>
            
    </div>
  );
}

export default App;

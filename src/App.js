import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ThemeToggleBtn from "./components/ThemeToggleBtn/ThemeToggleBtn";
import Header from "./pages/header";
import GitFarm from "./pages/gitfarm";
import Pet from "./pages/pet";
import Login from "./pages/login";
import Intro from "./pages/intro";
import Footer from "./pages/footer";
import { darkMode, lightMode } from "./styles/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={themeMode === "light" ? lightMode : darkMode}>
      <ThemeToggleBtn toggleTheme={toggleTheme} mode={themeMode} />
      <Main>
        <Header />
        <GitFarm />
        <Pet />
        <Login />
        <Intro />
        <Footer />
      </Main>
    </ThemeProvider>
  );
}

export default App;

const Main = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.color};
`;

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ThemeToggleBtn from "./components/ThemeToggleBtn/ThemeToggleBtn";
import Header from "./pages/header";
import GitFarm from "./pages/gitfarm";
import Pet from "./pages/pet";
import Login from "./pages/login";
import Intro from "./pages/intro";
import { darkMode, lightMode } from "./styles/theme";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={themeMode === "light" ? lightMode : darkMode}>
      <ThemeToggleBtn toggleTheme={toggleTheme} mode={themeMode} />
      <Header />
      <GitFarm />
      <Pet />
      <Login />
      <Intro />
    </ThemeProvider>
  );
}

export default App;

import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./pages/cover";
import GitFarm from "./pages/gitfarm";
import Pet from "./pages/pet";
import Login from "./pages/login";
import { darkMode, lightMode } from "./styles/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  return (
    <ThemeProvider theme={themeMode === "light" ? lightMode : darkMode}>
      <Header />
      <GitFarm />
      <Pet />
      <Login />
    </ThemeProvider>
  );
}

export default App;

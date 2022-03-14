import React from "react";
import { ToggleWrapper } from "./style";
import { MdWbSunny } from "react-icons//md";
import { FaRegMoon } from "react-icons/fa";

export default function ThemeToggleBtn({ toggleTheme, mode }) {
  return (
    <ToggleWrapper onClick={toggleTheme}>
      {mode === "dark" ? <FaRegMoon /> : <MdWbSunny />}
    </ToggleWrapper>
  );
}

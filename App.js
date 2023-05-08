import React from "react";
import useAppFont from "./src/shared/hooks/useAppFont";
import { ThemeProvider } from "./src/shared/context/ThemeContext";
import Welcome from "./src/features/Welcome/Welcome";
import MainContainer from "./src/shared/components/MainContainer";

export default function App() {
  const fonts = useAppFont();
  if (!fonts) {
    return null;
  }

  return (
    <ThemeProvider>
      <MainContainer>
        <Welcome />
      </MainContainer>
    </ThemeProvider>
  );
}

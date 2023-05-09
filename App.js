import React from "react";
import useAppFont from "./src/shared/hooks/useAppFont";
import { ThemeProvider } from "./src/shared/context/ThemeContext";
import Welcome from "./src/features/Welcome/Welcome";
import MainContainer from "./src/shared/components/MainContainer";
import Login from "./src/features/Login/Login";
import ServiceFactory from "./src/services/ServiceFactory";
import { DependecyProvider } from "./src/shared/context/DependecyContext";
import ProductList from "./src/features/Products/ProductList";

export default function App() {
  const fonts = useAppFont();
  if (!fonts) {
    return null;
  }

  const services = ServiceFactory();

  return (
    <DependecyProvider services={services}>
      <ThemeProvider>
        <MainContainer>
          {/* <Welcome /> */}
          {/* <Login /> */}
          <ProductList/>
        </MainContainer>
      </ThemeProvider>
    </DependecyProvider>
  );
}

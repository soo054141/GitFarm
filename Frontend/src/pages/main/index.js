import React from "react";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";
import { Container } from "./style";

export const Main = () => {
  return (
    <Container>
      <Header></Header>
      <Nav></Nav>
    </Container>
  );
};

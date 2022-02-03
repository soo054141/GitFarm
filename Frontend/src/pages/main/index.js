import React from "react";
import styled from "styled-components";
import { Header } from "../../components/Header";
import { Nav } from "../../components/Nav";

const Container = styled.div`
  width: 100vw;
  height: 812px;
  max-width: 390px;
  margin: 0 auto;
`;

export const Main = () => {
  return (
    <Container>
      <Header></Header>
      <Nav></Nav>
    </Container>
  );
};

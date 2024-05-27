import React from "react";
import styled from "styled-components";
import HeaderSection from "../components/HeaderSection";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <HeaderSection />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default AppLayout;

const Main = styled.div`
  /* display: flex; */
`;

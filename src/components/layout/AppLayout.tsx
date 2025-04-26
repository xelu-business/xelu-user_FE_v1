import { Outlet } from "react-router-dom";
import { Header } from "../../packages";
import styled from "@emotion/styled";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

const Main = styled.div`
  margin-top: 55px;
`;

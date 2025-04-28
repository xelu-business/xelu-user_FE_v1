import styled from "@emotion/styled";
import { Post } from "./Post";

export const Allpost = () => {
  return (
    <AllpostContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </AllpostContainer>
  );
};

const AllpostContainer = styled.div`
  margin-top: 100px;
`;

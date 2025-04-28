import styled from "@emotion/styled";

export const Allpost = () => {
  return <AllpostContainer></AllpostContainer>;
};

const AllpostContainer = styled.div`
  margin-top: 10%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  width: 100%;
  padding: 0 3rem;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;

  @media (max-width: 770px) {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
`;

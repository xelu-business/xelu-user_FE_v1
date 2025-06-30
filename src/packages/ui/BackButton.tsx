import styled from "@emotion/styled";
import { LeftArrowIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  const onClickMoveBack = () => navigate(-1);

  return (
    <BackButtonContainer onClick={onClickMoveBack}>
      <LeftArrow src={LeftArrowIcon} />
    </BackButtonContainer>
  );
};

const LeftArrow = styled.img`
  width: 15px;
`;

const BackButtonContainer = styled.button`
  width: 60px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid black;
  transition: border 0.3s ease, background-color 0.3s ease;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #dbdbdb;
  }
`;

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { BackButton, Inputs, ImageUpload } from "../packages";

export const MakeProject = () => {
  const [logoUrl, setLogoUrl] = useState<string>("");
  const [projectName, setProjectName] = useState<string>("");
  const [projectDescription, setProjectDescription] = useState<string>("");
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  useEffect(() => {
    const isValid =
      projectName.trim() !== "" &&
      projectDescription.trim() !== "" &&
      logoUrl.trim() !== "";
    setIsFormValid(isValid);
  }, [projectName, projectDescription, logoUrl]);

  const handleSubmit = () => {
    if (!isFormValid) return;

    console.log("프로젝트 생성", {
      name: projectName,
      description: projectDescription, 
      logoUrl: logoUrl,
    });
  };

  return (
    <MakeProjectContainer>
      <BackButton />
      <TitleContainer>프로젝트 생성</TitleContainer>
      <InputWrapper>
        <LogoUp>로고 등록</LogoUp>
        <ImageUpload />
      </InputWrapper>
      <InputWrapper>
        <Inputs
          value={projectName}
          label="프로젝트명"
          placeholder="프로젝트명을 입력해주세요."
          onChange={(e) => setProjectName(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <Inputs
          value={projectDescription}
          label="프로젝트 소개"
          placeholder="프로젝트 소개를 입력해주세요."
          isTextArea={true}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
      </InputWrapper>
      <SubmitButton onClick={handleSubmit} disabled={!isFormValid}>
        프로젝트 생성하기
      </SubmitButton>
    </MakeProjectContainer>
  );
};

const SubmitButton = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 12px;
  color: white;
  background-color: black;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1b1b1bd4;
  }
`;

const LogoUp = styled.div`
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  margin-top: 70px;
`;

const TitleContainer = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin-top: 25px;
`;

const MakeProjectContainer = styled.div`
  margin: 10% 20%;
  display: flex;
  flex-direction: column;
`;

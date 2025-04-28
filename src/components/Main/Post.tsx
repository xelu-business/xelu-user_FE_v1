import styled from "@emotion/styled";
import { GithubIcon } from "../../assets";

export const Post = () => {
  return (
    <PostContainer>
      <IntroAll>
        <LogoIconContainer>로고 이미지</LogoIconContainer>
        <ProjectInfo>
          <Name>xelu</Name>
          <UserInfo href="https://github.com/minsu0707" target="_blank">
            <GithubIcon />
            <UserName>최민수</UserName>
          </UserInfo>
        </ProjectInfo>
      </IntroAll>
      <Description>
        <IntroProject>
          xelu는 아이디어와 열정을 가진 모든 사람들을 위한 프로젝트 오픈
          스페이스입니다. 🚀 누구나 자신의 프로젝트를 등록할 수 있고, 다른
          사람들의 프로젝트를 자유롭게 둘러보며 영감을 얻을 수 있습니다. 🌎
        </IntroProject>
        <DateContainer>
          <DateAll>2025.5.12</DateAll>
        </DateContainer>
      </Description>
    </PostContainer>
  );
};

const DateAll = styled.div``;

const DateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 15px;
  font-size: 12px;
  color: #8c8c8c;
`;

const IntroProject = styled.div`
  height: 150px;
  line-height: 1.5em;
  max-height: 4.5em;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  white-space: normal;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const UserInfo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  color: black;
  font-size: 14px;
`;

const UserName = styled.div``;

const Name = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const ProjectInfo = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  align-items: center;
  justify-content: space-around;
`;

const IntroAll = styled.div`
  display: flex;
`;

const LogoIconContainer = styled.div`
  border: 1px solid gray;
  width: 100px;
  height: 100px;
`;

const PostContainer = styled.div`
  width: 320px;
  height: 290px;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 0 10px #bfbfbf;
  margin-bottom: 10px;
  overflow: hidden;
`;

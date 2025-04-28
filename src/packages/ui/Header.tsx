import styled from "@emotion/styled";
import { xeluIcon } from "../../assets";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

export const Header = () => {
  const navigate = useNavigate();
  const [iseLogin, setIsLogin] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  // 헤더 스크롤 로직
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navData = [
    { name: "프로젝트 생성", path: "/create-project" },
    { name: "마이페이지", path: "/mypage" },
  ];

  const handleAuthClick = () => {
    setIsLogin(!iseLogin); // 로그인 확인 여부 체크 로직 추가 필요
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavItemClick = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <HeaderContainer isScrolled={scrolled}>
      <LogoField onClick={() => navigate("/")}>
        <LogoImg src={xeluIcon} alt="로고" />
      </LogoField>

      <NavigationWrapper>
        <NavField>
          {navData.map((item) => (
            <NavContent
              key={item.path}
              onClick={() => handleNavItemClick(item.path)}
            >
              {item.name}
            </NavContent>
          ))}
        </NavField>

        <LoginBtn>
          <Button onClick={handleAuthClick}>
            {iseLogin ? "로그아웃" : "로그인"}
          </Button>
        </LoginBtn>
      </NavigationWrapper>

      {/* 모바일 메뉴 토글 버튼 */}
      <MobileMenuToggle onClick={toggleMobileMenu}>
        <MobileMenuIcon>{isMobileMenuOpen ? "✕" : "☰"}</MobileMenuIcon>
      </MobileMenuToggle>

      {/* 모바일 드롭다운 메뉴 */}
      {isMobileMenuOpen && (
        <MobileMenu>
          {navData.map((item) => (
            <MobileNavItem
              key={item.path}
              onClick={() => handleNavItemClick(item.path)}
            >
              {item.name}
            </MobileNavItem>
          ))}
          <MobileNavItem onClick={handleAuthClick}>
            {iseLogin ? "로그아웃" : "로그인"}
          </MobileNavItem>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div<{ isScrolled: boolean }>`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 20px;
  box-sizing: border-box;
  z-index: 1000;
  font-weight: bold;
  transition: all 0.2s ease;
  background-color: ${(props) =>
    props.isScrolled
      ? "rgba(255, 255, 255, 0.85)"
      : "rgba(255, 255, 255, 0.7)"};
  backdrop-filter: ${(props) => (props.isScrolled ? "blur(2px)" : "none")};
  border-bottom: ${(props) =>
    props.isScrolled ? "1px solid #d8d8d8" : "none"};

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const LogoField = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;

const LogoImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavField = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const NavContent = styled.div`
  cursor: pointer;
  margin: 0 10px;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    color: #666;
    transform: translateY(-2px);
  }
`;

const LoginBtn = styled.div`
  width: 120px;

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const MobileMenuToggle = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuIcon = styled.div`
  font-size: 24px;
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 55px;
    left: 0;
    width: 100%;
    background-color: #f4f4f4;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
`;

const MobileNavItem = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    padding: 15px 20px;
    border-bottom: 1px solid #e0e0e0;
    cursor: pointer;

    &:last-child {
      border-bottom: none;
    }

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

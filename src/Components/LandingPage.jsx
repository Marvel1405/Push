import React from "react";
import styled from "@emotion/styled";
import logo from "../images/nogo.png";
import { IoIosSearch } from "react-icons/io";
import { FaMastodon, FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function LandingPage() {
  return (
    <Container>
      <Header>
        <LogoHolder>
          <Logo src={logo} />
          <span>Vite</span>
          <InputHolder>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
              }}
            >
              <IoIosSearch />
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                marginRight: "8px",
                marginLeft: "6px",
              }}
            >
              Search
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "600",
                border: "1px solid gray",
                borderRadius: "3px",
                padding: "3px",
              }}
            >
              Ctrl K
            </span>
          </InputHolder>
        </LogoHolder>
        <NavHolders>
          <Nav1>
            <Nav>Guide</Nav>
            <Nav>Config</Nav>
            <Nav>Plugins</Nav>
            <Nav>Resources</Nav>
            <Nav>Version</Nav>
          </Nav1>
          <Nav2>
            <span>
              <FaMastodon />
            </span>
            <span>
              <FaXTwitter />
            </span>
            <span>
              <FaDiscord />
            </span>
            <span>
              <FaGithub />
            </span>
          </Nav2>
        </NavHolders>
      </Header>
      <HeroPage>
        <LeftHero>
          <LeftHeroContent>
            <LeftHeroContentHeadText>Vite</LeftHeroContentHeadText>
            <LeftHeroContentBodyText>
              Next Generation
              <br />
              Frontend Tooling
            </LeftHeroContentBodyText>
            <LeftHeroContentSubText>
              Get ready for a development environment that can finally catch up
              with you.
            </LeftHeroContentSubText>
            <LeftHeroContentButtonHold>
              <Button1>Get Started</Button1>
              <Button2>Why Vite?</Button2>
              <Button3>View on GitHub</Button3>
              <Button4> Vite Meetup SF</Button4>
            </LeftHeroContentButtonHold>
          </LeftHeroContent>
        </LeftHero>
        <RightHero>
          <RightHeroImage src={logo} />
        </RightHero>
      </HeroPage>
    </Container>
  );
}
export default LandingPage;

const Button4 = styled.button`
  width: 150px;
  height: 90%;
  border-radius: 50px;
  border: none;
  background-color: #8f6efe;
  font-size: 14px;
  font-weight: bold;
  color: whitesmoke;
  cursor: pointer;
`;
const Button3 = styled.button`
  width: 150px;
  height: 90%;
  border-radius: 50px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  background-color: #333942;
  color: whitesmoke;
  cursor: pointer;
  :hover {
    background-color: #414853;
    transition: all 200ms;
  }
`;
const Button2 = styled.button`
  width: 100px;
  height: 90%;
  border-radius: 50px;
  border: none;
  font-size: 14px;
  font-weight: bold;
  background-color: #333942;
  color: whitesmoke;
  cursor: pointer;
  :hover {
    background-color: #414853;
    transition: all 200ms;
  }
`;
const Button1 = styled.button`
  width: 120px;
  height: 90%;
  border-radius: 50px;
  border: none;
  color: whitesmoke;
  font-size: 14px;
  font-weight: bold;
  background-color: #646cff;
  cursor: pointer;
  :hover {
    background-color: #8189f9;
    transition: all 200ms;
  }
`;
const LeftHeroContentButtonHold = styled.div`
  width: 85%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;
const LeftHeroContentSubText = styled.div`
  width: 85%;
  height: 80px;
  font-size: 25px;
  font-weight: 500;
  display: flex;
  color: #98989f;
  align-items: center;
`;
const LeftHeroContentBodyText = styled.div`
  width: 100%;
  height: 150px;
  font-size: 50px;
  font-weight: 750;
  display: flex;
  color: #dfdfd6;
  align-items: center;
`;
const LeftHeroContentHeadText = styled.div`
  width: 100%;
  height: 50px;
  font-size: 55px;
  font-weight: 700;
  color: #bd34fe;
  display: flex;
  align-items: center;
`;
const LeftHeroContent = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
const LeftHero = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RightHeroImage = styled.img`
  width: 60%;
  height: 60%;
  object-fit: cover;
  object-repeat: no-repeat;
  background-position: center;
`;
const RightHero = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeroPage = styled.div`
  width: 85%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-contents: center;
`;
const Nav2 = styled.div`
  width: 140px;
  height: 25px;
  display: flex;
  margin-left: 10px;
  justify-content: space-evenly;
  align-items: center;
  font-size: 23px;
  font-weight: 500px;
  color: rgba(255, 255, 255, 0.8);
  span:hover {
    color: #9499ff;
    cursor: pointer;
    transition: all 350ms;
  }
`;
const Nav = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-around;
  align-items: center;
  :hover {
    color: #9499ff;
    cursor: pointer;
    transition: all 350ms;
  }
`;
const Nav1 = styled.div`
  width: 400px;
  height: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
`;
const InputHolder = styled.div`
  width: 130px;
  height: 40px;
  border-radius: 7px;
  background-color: #161618;
  margin-left: 30px;
  border: none;
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
    transition: all 500ms;
    border: 1px solid #47c9ff;
  }
`;
const Logo = styled.img`
  width: 25px;
  height: 25px;
`;
const NavHolders = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
`;
const LogoHolder = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  align-items: center;
  span {
    font-family: Calibri;
    margin-left: 10px;
    font-weight: 600;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.8);
  }
`;
const Header = styled.div`
  width: 90%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1b1b1f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

import React from 'react';
import styled from 'styled-components';
import LogoImage from '../assets/images/logo.png';


const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgb(8, 156, 201);
  font-family: "Poppins", sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    text-align: center;
  }
`;

const Logo = styled.img`
  height: 25vh;
  width: 25vh;
  @media (max-width: 768px) {
  position: relative;
    left: 13vh;
    align-items:center;
  }
`;

const Searchbar = styled.div`
  display: flex;
  line-height: 28px;
  align-items: center;
  position: relative;
  left: 5%;
  max-width: 100%;
  float: right;
`;

const Input = styled.input`
  width: 100%;
  height: 60px;
  line-height: 28px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border: 2px solid transparent;
  border-radius: 8px;
  outline: none;
  background-color: #f3f3f4;
  color: #0d0c22;
  transition: 0.3s ease;
  font-size:30px;
  margin-left:0.8rem;

  ::placeholder {
    color: #9e9ea7;
  }

  :focus,
  :hover {
    outline: none;
    background-color: #fff;
    box-shadow: 0 0 0 4px rgb(247 127 0 / 10%);
  }
  @media (max-width: 768px) {
    width: 40%;
  }
`;

const Icon = styled.svg`
  position: absolute;
  left: 1rem;
  fill: #9e9ea7;
  width: 2rem;
  height: 2rem;
  margin-right:1rem;
`;

const NavArea = styled.nav`
  display: flex;
  align-items: center;
`;

const Menu = styled.ul`
  position: relative;
  right: 20vh;
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    right: 0vh;
  }
`;

const MenuItem = styled.li`
  float: left;
  position: relative;
`;

const MenuItemLink = styled.a`
  text-decoration: none;
  color: #fff;
  padding: 15px 40px;
  display: block;
  font-weight: 500;
  letter-spacing: 1px;
  font-size:30px;

  :hover {
    background: rgb(8, 156, 201);
    color:black;
    opacity: 1;
    visibility: visible;
    top: 100%;
    width: 100%;
    transition: all 0.5s, background 1s 0.5s linear;
  }
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 2vh;
  justify-content: center;
  position:relative;
  right:2%;
`;

const SocialContainer = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: 0.3s;

  :hover {
    box-shadow: 2px 2px 52px 22px rgba(0, 114, 177, 0.75);
    transition-duration: 0.3s;
  }

  :active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }
`;

const SocialSvg = styled.svg`
  width: 80px;
`;


const HeaderComponent = () => {
  return (
    <Header>
      <Logo src={LogoImage} alt="" />
      <NavArea>
        <Menu>
          <MenuItem>
            <MenuItemLink href="#">HOME</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="#">PRODUTOS</MenuItemLink>
          </MenuItem>
          <MenuItem>
            <MenuItemLink href="#">SERVIÇOS</MenuItemLink>
          </MenuItem>
        </Menu>
      </NavArea>
      <Searchbar>
        <Icon viewBox="0 0 24 24" aria-hidden="true">
          <g>
            <path
              d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z">
            </path>
          </g>
        </Icon>
        <Input type="search" placeholder="Search" />
      </Searchbar>
      <Card>
        <SocialContainer href="#" className="containerOne">
          <SocialSvg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.57386 4.69147C4.74068 5.38295 4.52122 6.55339 4.08231 8.89427L3.33231 12.8943C2.71512 16.186 2.40652 17.8318 3.30624 18.9159C4.20595 20 5.88048 20 9.22954 20H14.7704C18.1195 20 19.794 20 20.6937 18.9159C21.5934 17.8318 21.2849 16.186 20.6677 12.8943L19.9177 8.89427C19.4787 6.55339 19.2593 5.38295 18.4261 4.69147C17.5929 4 16.4021 4 14.0204 4H9.97954C7.59787 4 6.40703 4 5.57386 4.69147ZM9.87822 7.75007C10.1875 8.62497 11.0219 9.25 12.0004 9.25C12.9789 9.25 13.8133 8.62497 14.1225 7.75007C14.2606 7.35953 14.6891 7.15483 15.0796 7.29287C15.4701 7.43091 15.6748 7.8594 15.5368 8.24993C15.0224 9.70541 13.6343 10.75 12.0004 10.75C10.3664 10.75 8.97839 9.70541 8.46396 8.24993C8.32592 7.8594 8.53061 7.43091 8.92115 7.29287C9.31169 7.15483 9.74018 7.35953 9.87822 7.75007Z"
              fill="#1C274C" />
          </SocialSvg>
        </SocialContainer>
        <SocialContainer href="#" className="containerOne">
          <SocialSvg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.23737 2.28845C1.84442 2.15746 1.41968 2.36983 1.28869 2.76279C1.15771 3.15575 1.37008 3.58049 1.76303 3.71147L2.02794 3.79978C2.70435 4.02524 3.15155 4.17551 3.481 4.32877C3.79296 4.47389 3.92784 4.59069 4.01426 4.71059C4.10068 4.83049 4.16883 4.99538 4.20785 5.33722C4.24907 5.69823 4.2502 6.17 4.2502 6.883L4.2502 9.55484C4.25018 10.9224 4.25017 12.0247 4.36673 12.8917C4.48774 13.7918 4.74664 14.5497 5.34855 15.1516C5.95047 15.7535 6.70834 16.0124 7.60845 16.1334C8.47542 16.25 9.57773 16.25 10.9453 16.25H18.0002C18.4144 16.25 18.7502 15.9142 18.7502 15.5C18.7502 15.0857 18.4144 14.75 18.0002 14.75H11.0002C9.56479 14.75 8.56367 14.7484 7.80832 14.6468C7.07455 14.5482 6.68598 14.3677 6.40921 14.091C6.17403 13.8558 6.00839 13.5398 5.9034 13H16.0222C16.9817 13 17.4614 13 17.8371 12.7522C18.2128 12.5045 18.4017 12.0636 18.7797 11.1817L19.2082 10.1817C20.0177 8.2929 20.4225 7.34849 19.9779 6.67422C19.5333 5.99996 18.5058 5.99996 16.4508 5.99996H5.74526C5.73936 5.69227 5.72644 5.41467 5.69817 5.16708C5.64282 4.68226 5.52222 4.2374 5.23112 3.83352C4.94002 3.42965 4.55613 3.17456 4.1137 2.96873C3.69746 2.7751 3.16814 2.59868 2.54176 2.38991L2.23737 2.28845Z"
              fill="#1C274C" />
            <path
              d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
              fill="#1C274C" />
            <path
              d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
              fill="#1C274C" />
          </SocialSvg>
        </SocialContainer>
        <SocialContainer href="#" className="containerOne">
          <SocialSvg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 11.094 21.8795 10.2162 21.6537 9.38161C21.5684 9.06633 21.1987 8.94083 20.9028 9.0791C20.3248 9.34916 19.68 9.5 19 9.5C16.5147 9.5 14.5 7.48528 14.5 5C14.5 4.31996 14.6508 3.67516 14.9209 3.09722C15.0592 2.80131 14.9337 2.4316 14.6184 2.3463C13.7838 2.12048 12.906 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
              fill="#1C274C" />
            <circle cx="19" cy="5" r="3" fill="#1C274C" />
          </SocialSvg>
        </SocialContainer>
        <SocialContainer href="#" className="containerOne">
          <SocialSvg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9ZM12 20.5C13.784 20.5 15.4397 19.9504 16.8069 19.0112C17.4108 18.5964 17.6688 17.8062 17.3178 17.1632C16.59 15.8303 15.0902 15 11.9999 15C8.90969 15 7.40997 15.8302 6.68214 17.1632C6.33105 17.8062 6.5891 18.5963 7.19296 19.0111C8.56018 19.9503 10.2159 20.5 12 20.5Z"
              fill="#1C274C" />
          </SocialSvg>
        </SocialContainer>
      </Card>
    </Header>
  );
};

export default HeaderComponent;
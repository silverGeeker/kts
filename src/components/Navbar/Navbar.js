import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav= styled.nav `
 Background: #ff5500;
 height: 80px;
 display: flex;
 justify-content: space-between;
 padding: 0.5rem calc((100vw - 1000px) /2);
 z-index: 10;
 max-width: 80%;
 margin-left: 10%;
 margin-right: 10%;
 margin-top: -30px;

`;

export const NavLink = styled(Link)`
color : #ffffff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    color rgba(255,255,255,.5);
}
`;
export const Bars = styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;
export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
      display: none;
  }
`;
export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #25D366;
  padding: 10px 22px;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;


  @:hover {
    transition: all 0.2s ease-in-out;
    brackground: #fff;
    color: #010606;
  }
`;

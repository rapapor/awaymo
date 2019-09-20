import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import logo from './../../assets/awaymoFullWhite.svg'

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f18990;
  position: relative;
  @media screen and (min-width: 768px){
    border-bottom: 1px solid #fff;
  }
`

const CloseTagContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right:0px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer
  :hover {
    font-size: 18px;
  }
`
function Header() {
  return (
    <HeaderWrapper>
      <img src={logo} className="" alt="logo" />
      <CloseTagContainer>
        <FontAwesomeIcon icon={faTimes} pull="right"/>
      </CloseTagContainer>
    </HeaderWrapper>
  );
}

export default Header;
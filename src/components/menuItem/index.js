import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuItemWrapper = styled.div`
  padding: 5px;
  border-bottom: ${props => props.lastItem ? "none" : "solid 1px #f18990"};
  @media screen and (min-width: 768px){
    border-bottom: none;
    padding: 0px;
  }
`

const AwesomeIconWrapper = styled.span`
  padding-left: 5px;
  svg{
    transform: ${props => props.rotate ? "rotate(320deg)" : ""}
  }
  @media screen and (min-width: 768px){
    padding-left: 0px;
  }
`

const SingleMenuItem = styled.p`
  font-weight: 600;
  font-size: 17px;
  transition: transform 1s;
  cursor: pointer;
  :hover {
    transform: skewX(-20deg);
  }
  @media screen and (min-width: 768px){
    margin: 5px 0px;
    font-size: 24px;
  }
`

function MenuItem(props) {
  return (
    <MenuItemWrapper lastItem={props.lastItem}>
      <SingleMenuItem>
        <AwesomeIconWrapper rotate={props.rotate}>
          {props.icon && <FontAwesomeIcon icon={props.icon} pull="left"/>}
        </AwesomeIconWrapper>
        {props.label}
      </SingleMenuItem>
    </MenuItemWrapper>
  );
}

export default MenuItem;
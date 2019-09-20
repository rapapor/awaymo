import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  margin: -10px;
  padding: 10px;
  background: #ee5f63;
  p{
    padding: 10px;
    text-align: center;
    border-top: solid 1px #f18990;
    font-weight: 600;
    font-size: 18px;
    padding-bottom: 20px;
    @media screen and (min-width: 768px){
      font-weight: lighter;
      font-size: 15px;
      padding-bottom: 2px;
      margin: 0px
    }
  }
`

const HideonMobile = styled.p`
    display: block;
    padding-top: 2px!important;
    border-top: none !important;
    @media screen and (max-width: 768px){
      display: none;
    }
  `

function FooterContainer(props) {
  return (
   <FooterWrapper>
     <p>We're here to help</p>
     <HideonMobile>+44(0)20 8050 3459</HideonMobile>
     <HideonMobile>support@awaymo.com</HideonMobile>
   </FooterWrapper>
  );
}

export default FooterContainer;
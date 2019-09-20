import React from 'react';
import styled from 'styled-components';

import avatar from './../../assets/avatar.png'

const Avatarbackground = styled.div`
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  @media screen and (min-width: 768px){
    width: 45px;
    height: 45px;
  }
`
const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px){
    width: 35px;
    height: 35px;
    border: 1px solid #ee5f63;
  }
  img {
    width: 45px;
    height: 45px;
    @media screen and (min-width: 768px){
      width: 20px;
      height: 20px;
  }
  }
`

const ProfileInfoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 30px;
  @media screen and (min-width: 768px){
    flex-direction: row;
    justify-content: start;
    padding-bottom: 5px;
    width: 290px;
    padding-top: 0px;
    border-bottom: solid 1px #f18990;
  }
}
`
  const ProfileInfoDetail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    p{
      font-weight: 600;
      margin: 0px;
      line-height: 1.5rem;
      @media screen and (min-width: 768px){
      display: flex;
      align-self: flex-start;
      padding-left: 5px;
    }
  }
`
  const HideOnDesktop = styled.span`
    @media screen and (min-width: 768px){
      display: none;
    }
  `
  const FundsInfo = styled.div`
  text-align: center
  @media screen and (min-width: 768px){
      display: flex;
      flex-direction: row-reverse;
      p{
        padding: 0px 5px;
      }
    }
  `

function ProfileInfo() {
  return (
    <ProfileInfoWrapper>
      <Avatarbackground>
        <AvatarWrapper>
          <img src={avatar} className="" alt="avatar" />
        </AvatarWrapper>
      </Avatarbackground>
      <ProfileInfoDetail>
        <p>Dominik</p>
        <FundsInfo>
          <p>Available <HideOnDesktop>Balance</HideOnDesktop></p>
          <p>&#163;1,500.00</p>
        </FundsInfo>
      </ProfileInfoDetail>
    </ProfileInfoWrapper>
  );
}

export default ProfileInfo;
import React from 'react';
import MenuItem from './../menuItem';
import styled from 'styled-components';
import ProfileInfo from './../profileInfo';

const DesktopMenuHeader = styled.section`
  padding-top:10px;
  display: flex;
  align-items: center;
`

const DesktopAsideLeftMenu = styled.aside`
  width: 30%;
  font-size: 24px;
  font-weight: 600;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li{
      margin: 5px 0px;
      cursor: pointer;
      transition: transform 1s;
      :hover {
        transform: skewX(-20deg);
      }
    }
  }
`
  const MenuContent = styled.div`
    padding-top: 20px;
    display: flex;
  `

function DesktopMenu(props) {
  return (
    <React.Fragment>
      <DesktopMenuHeader>
        <DesktopAsideLeftMenu>
          <ul>
            <li>Home</li>
            <li>Flights</li>
          </ul>
        </DesktopAsideLeftMenu>
        <ProfileInfo />
      </DesktopMenuHeader>
      <MenuContent>
        <DesktopAsideLeftMenu>
          <MenuItem label={'About'}/>
          <MenuItem label={'FAQ'}/>
          <MenuItem label={'Support'}/>
          <MenuItem label={'Contact Us'}/>
        </DesktopAsideLeftMenu>
        <div>
          <MenuItem label={'Profile'}/>
          <MenuItem label={'My Bookings'}/>
          <MenuItem label={'My Payments'}/>
          <MenuItem label={'Log Out'}/>
          <MenuItem label={'Resume Application'}/>
        </div>
      </MenuContent>
    </React.Fragment>
  );
}

export default DesktopMenu;
import React from 'react';
import MenuItem from './../menuItem';
import ProfileInfo from './../profileInfo';
import {
  faUserCircle, faPlane, faCreditCard, faLifeRing,
  faPhoneAlt, faSignOutAlt, faQuestionCircle, faInfoCircle
} from '@fortawesome/free-solid-svg-icons'

function MobileMenuList(props) {
  return (
    <React.Fragment>
      <ProfileInfo />
      <MenuItem icon={faUserCircle} label={'Profile'}/>
      <MenuItem icon={faPlane} rotate={'true'} label={'My Bookings'}/>
      <MenuItem icon={faCreditCard} label={'My Payments'}/>
      <MenuItem icon={faLifeRing} label={'Support'}/>
      <MenuItem icon={faPhoneAlt} label={'Contact Us'}/>
      <MenuItem icon={faSignOutAlt} label={'Log Out'}/>
      <MenuItem icon={faQuestionCircle} label={'About'}/>
      <MenuItem icon={faInfoCircle} lastItem label={'FAQ'}/>
    </React.Fragment>
  );
}

export default MobileMenuList;
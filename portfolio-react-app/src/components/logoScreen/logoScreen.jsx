import React from 'react'
import './logoScreen.css'
import winxpLogo from '../../assets/winxp.png'
const LogoScreen = () => {
  return (
    <>
      <div className="screen">
        <div className="logo">
          <img src={winxpLogo} alt="Windows XP" />
        </div>
        <div className="loading">
          <div className="bar">
            <div className="indicatorContainer">
              <div className="indicator"></div>
              <div className="indicator"></div>
              <div className="indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoScreen
import React from 'react';
import Icon from './icon/Icon';
import myComputerIcon from '../../assets/mycomputer.png';
import recycleBinIcon from '../../assets/recyclebin.png';

function openWindow(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = 'flex';
  }
}

const IconList = () => {
  return (
    <>
      <Icon
        onClick={() => openWindow('myComputer')}
        image={myComputerIcon}
        name="Mi PC"
      />
      <Icon
        onClick={() => openWindow('recycleBin')}
        image={recycleBinIcon}
        name="Papelera"
      />
    </>
  );
};

export default IconList;
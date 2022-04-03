import React, { useState, useEffect } from 'react';

import { Card } from 'ui-neumorphism';

function ModalCard(props) {
  const [colorHsl, setColorHsl] = useState(`hsl(${props.color}, 100%, 50%)`);

  useEffect(() => setColorHsl(`hsl(${props.color}, 100%, 50%)`), [props.color]);

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflow = props.visible ? 'hidden' : 'initial';
  }, [props.visible]);

  return (
    <div className='Modal-card' style={props.visible ? {opacity: 1} : {opacity: 0, visibility: 'hidden'}} >
      {props.children}
    </div>
  );
}

export default ModalCard;
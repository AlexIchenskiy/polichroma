import React, { useState, useEffect } from 'react';

import { Card } from 'ui-neumorphism';

function ModalCard(props) {
  const [colorHsl, setColorHsl] = useState(`hsl(${props.color}, 100%, 50%)`);

  useEffect(() => setColorHsl(`hsl(${props.color}, 100%, 50%)`), [props.color]);

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflow = props.visible ? 'hidden' : 'initial';
  }, [props.visible]);

  return (
    <Card className={props.visible ? 'Modal-nav Modal-nav-opened' : 'Modal-nav Modal-nav-closed'} flat >
      {props.children}
    </Card>
  );
}

export default ModalCard;
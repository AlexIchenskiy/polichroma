import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card } from 'ui-neumorphism';

function MobileModal(props) {
  const [colorHsl, setColorHsl] = useState(`hsl(${props.color}, 100%, 50%)`);

  useEffect(() => setColorHsl(`hsl(${props.color}, 100%, 50%)`), [props.color]);

  useEffect(() => {
    document.getElementsByTagName('html')[0].style.overflow = props.visible ? 'hidden' : 'initial';
  }, [props.visible]);

  return (
    <Card className={props.visible ? 'Modal-nav Modal-nav-opened' : 'Modal-nav Modal-nav-closed'} flat >
      <Link to='/' className='Link-nostyle Link-outer' onClick={() => props.setVisible(false)}><Button text>Home</Button></Link>
      <Link to="/generator" className='Link-nostyle Link-outer' onClick={() => props.setVisible(false)}><Button text>Generate</Button></Link>
      <Button text><p style={{color: colorHsl}}>Explore</p></Button>
      <Button text>Sign in</Button>
      <Button><p style={{color: colorHsl}}>Sign up</p></Button>
      <Button onClick={() => props.setVisible(false)}>Close</Button>
    </Card>
  );
}

export default MobileModal;
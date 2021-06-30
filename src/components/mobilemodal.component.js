import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, Dialog } from 'ui-neumorphism';

function MobileModal(props) {
  const [colorHsl, setColorHsl] = useState(`hsl(${props.color}, 100%, 50%)`);

  useEffect(() => setColorHsl(`hsl(${props.color}, 100%, 50%)`), [props.color]);

  return (
    <Dialog onClose={() => props.setVisible(false)} visible={props.visible}>
      <Card  className='Modal-nav'>
        <Link to='/' className='Link-nostyle Link-outer' onClick={() => props.setVisible(false)}><Button text>Home</Button></Link>
        <Link to="/polichroma/generator" className='Link-nostyle Link-outer' onClick={() => props.setVisible(false)}><Button text>Generate</Button></Link>
        <Button text>Sign in</Button>
        <Button><p style={{color: colorHsl}}>Sign up</p></Button>
        <Button onClick={() => props.setVisible(false)}>Close</Button>
      </Card>
    </Dialog>
  );
}

export default MobileModal;
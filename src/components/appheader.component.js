import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, Divider } from 'ui-neumorphism';

import MobileModal from './mobilemodal.component';

function AppHeader(props) {
  const [visible, setVisible] = useState(false);
  const [colorHsl, setColorHsl] = useState(`hsl(${props.color}, 100%, 50%)`);

  useEffect(() => setColorHsl(`hsl(${props.color}, 100%, 50%)`), [props.color]);

  return (
    <Card style={{ borderRadius: '8px 8px 0 0'}}>
      <header className="App-header">
        <Link to="" className="Link-nostyle"><div><h1 className="Logo">poli</h1><h1 className="Logo" style={{color: colorHsl}}>chroma</h1></div></Link>
        <nav className="Nav-header">
          <ul>
            <li><Link to="/polichroma/generator" className="Link-nostyle"><Button text>Generate</Button></Link></li>
            <li><Divider style={{width:'4px', height:'100%'}} dense /></li>
            <li><Button text>Sign in</Button></li>
            <li><Button><p style={{color: colorHsl}}>Sign up</p></Button></li>
          </ul>
        </nav>
        <Button className="Burger-menu" onClick={() => setVisible(true)}>
            <span style={{color: colorHsl}}>&#9776;</span>
        </Button>
      </header>
      <MobileModal color={props.color} setVisible = {(e) => setVisible(e)} visible = {visible}/>
    </Card>
  );
}

export default AppHeader;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Button, Card, Divider } from 'ui-neumorphism';

import MobileModal from './mobilemodal.component';

function AppHeader(props) {
  const [visible, setVisible] = useState(false);
  const [colorHsl, setColorHsl] = useState(`hsl(${props.color}, 100%, 50%)`);

  useEffect(() => setColorHsl(`hsl(${props.color}, 100%, 50%)`), [props.color]);

  return (
    <Card style={{borderRadius: 0}}>
      <header className="App-header">
        <Link to="" className="Link-nostyle Link-logo"><div><h1 className="Logo">poli</h1><h1 className="Logo" style={{color: colorHsl}}>chroma</h1></div></Link>
        <nav className="Nav-header">
          <ul>
            <li><Link to="/generator" className="Link-nostyle"><Button text>Generate</Button></Link></li>
            <li><Divider style={{width:'4px', height:'100%'}} dense /></li>
            <li><Button text>Sign in</Button></li>
            <li><Button><p style={{color: colorHsl}}>Sign up</p></Button></li>
          </ul>
        </nav>
        <div className="Burger-menu" onClick={() => setVisible(!visible)}>
            <div style={{backgroundColor: colorHsl}} 
                 className={visible ? 'active' : 'inactive'} ></div>
            <div style={{backgroundColor: colorHsl}}
                 className={visible ? 'active' : 'inactive'} ></div>
            <div style={{backgroundColor: colorHsl}}
                 className={visible ? 'active' : 'inactive'} ></div>
        </div>
      </header>
      <MobileModal color={props.color} setVisible = {(e) => setVisible(e)} visible = {visible}/>
    </Card>
  );
}

export default AppHeader;
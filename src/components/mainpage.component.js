import React from 'react';

import { Card } from 'ui-neumorphism';

import AppHeader from './appheader.component';
import AppBody from './appbody.component';

import 'ui-neumorphism/dist/index.css';

import '../App.css';

function MainPage(props) {
	return (
		<Card className="App" elevation={2}>
	    	<AppHeader color={props.color} />
	    	<AppBody color={props.color} />
	  	</Card>
	);
}

export default MainPage;
import React from 'react';

import {  Card } from 'ui-neumorphism';

function GeneratorToolbar() {
	return (
		<Card className='Generator-toolbar' style={{borderRadius: '0'}}>
			<h2 className='Generator-toolbar-subtitle'>Press spacebar to quickly generate a new palette!</h2>
			<div className='Generator-toolbar-tools'>
			</div>
		</Card>
	);
}

export default GeneratorToolbar;
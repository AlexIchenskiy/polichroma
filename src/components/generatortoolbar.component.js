import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Card } from 'ui-neumorphism';

function GeneratorToolbar() {
	return (
		<Card className='Generator-toolbar' style={{borderRadius: '0'}}>
			<h2 className='Generator-toolbar-subtitle'>Press spacebar to quickly generate a new palette!</h2>
			<Link to="/polichroma/generator" className='Link-nostyle Link-toolbar-generate'>
				<Button className='Generate-toolbar-generate'>
					<p style={{fontSize: 24 + 'px', fontWeight: 500}}>Generate!</p>
				</Button>
			</Link>
			<div className='Generator-toolbar-tools'>
			</div>
		</Card>
	);
}

export default GeneratorToolbar;
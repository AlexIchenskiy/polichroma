import React, { useEffect, useState } from 'react';

import { Card } from 'ui-neumorphism';

import isMobile from 'react-device-detect';

function GeneratorToolbar() {
	const [width, setWidth]       = useState(window.innerWidth);
	const [isMobileWidth, setIsMobileWidth] = useState(width < 768);

	function handleWindowSizeChange() {
		setWidth(window.innerWidth);
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		}
	}, []);

	useEffect(() => {
		setIsMobileWidth(width < 768);
	}, [width]);

	return (
		<Card className='Generator-toolbar' style={{borderRadius: '0'}} inset >
			<h2 className='Generator-toolbar-subtitle'>
				{isMobile || isMobileWidth ? "Swipe up to quickly generate a new palette!" :
							"Press spacebar to quickly generate a new palette!"}
			</h2>
			<div className='Generator-toolbar-tools'>
			</div>
		</Card>
	);
}

export default GeneratorToolbar;
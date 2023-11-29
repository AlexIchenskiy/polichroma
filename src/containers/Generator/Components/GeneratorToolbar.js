import React, { useEffect, useState } from 'react';

import { isMobile } from 'react-device-detect';
import GeneratorToolbarMethod from './GeneratorToolbarMethod';

function GeneratorToolbar(props) {
	const [width, setWidth] = useState(window.innerWidth);
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
		<div className='Generator-toolbar' style={{ borderRadius: '0' }} >
			<h2 className='Generator-toolbar-subtitle'>
				{isMobile || isMobileWidth ? "Swipe up!" :
					"Press spacebar to quickly generate a new palette!"}
			</h2>
			<div className='Generator-toolbar-tools'>
				<GeneratorToolbarMethod color={props.color} setGenMethod={(e) => props.setGenMethod(e)} />
			</div>
		</div>
	);
}

export default GeneratorToolbar;
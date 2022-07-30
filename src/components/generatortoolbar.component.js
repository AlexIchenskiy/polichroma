import React, { useEffect, useState } from 'react';

import { FiShare2, FiLink } from 'react-icons/fi';

import { Button, Card, Divider } from 'ui-neumorphism';

import isMobile from 'react-device-detect';
import GeneratorToolbarMethod from './generatortoolbarmethod.component';
import ModalCard from './modalcard.component';

function GeneratorToolbar(props) {
	const [width, setWidth]                 = useState(window.innerWidth);
	const [isMobileWidth, setIsMobileWidth] = useState(width < 768);
	const [exportOpened, setExportOpened]   = useState(0);

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

	function copyToClipboard(text) {
        navigator.clipboard.writeText(text);
    }

	return (
		<Card className='Generator-toolbar' style={{borderRadius: '0'}} flat bordered >
			<h2 className='Generator-toolbar-subtitle'>
				{isMobile || isMobileWidth ? "Swipe up!" :
							"Press spacebar to quickly generate a new palette!"}
			</h2>
			<div className='Generator-toolbar-tools'>
				<Button className='Generator-toolbar-export' onClick={() => setExportOpened(1)}>
					<FiShare2 size = {isMobileWidth ? '18px' : '24px'} />
					{isMobile || isMobileWidth ? '' : <h4>Export</h4>}
				</Button>
				<Divider style={{width:'4px', height:'100%'}} dense />
				<GeneratorToolbarMethod color={props.color} setGenMethod={(e) => props.setGenMethod(e)} />
			</div>
			<ModalCard visible={exportOpened} >
				<Card className='Generator-toolbar-export-modal-inner' flat bordered>
					<Button 
						className='Generator-toolbar-export-modal-inner-link' 
						flat={false} bordered={false}
						onClick={() => {
							setExportOpened(0);
							let copyText = window.location.href + '/';
							for (let i = 0; i < props.colors.length; i++) {
								if (i !== 0) {
									copyText += '-';
								}
								copyText += props.colors[i];
							}
							copyToClipboard(copyText);
						}}
					>
						<div><FiLink size = {isMobileWidth ? '18px' : '24px'} /></div>
						<div><h4>Copy link</h4></div>
					</Button>
					<div className='Generator-toolbar-export-modal-close-outer' onClick={() => setExportOpened(0)}>
					</div>
				</Card>
			</ModalCard>
		</Card>
	);
}

export default GeneratorToolbar;
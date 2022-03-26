import React from 'react';

import { FiCopy } from 'react-icons/fi';

function GeneratorToolset(props) {
    let styles = {
        color: props.textColor,
    };

    function copyText() {
        navigator.clipboard.writeText(props.color);
    }

	return (
		<div className = 'Generator-palette-toolset'>
            <div className = 'Generator-palette-toolset-tools'>
                <div className = 'Generator-palette-toolset-icon' onClick={() => {copyText()}}>
                    <FiCopy size = {'32px'} color = {props.textColor}></FiCopy>
                </div>
            </div>
            <div className = 'Generator-palette-toolset-colorname'>
                <h1 style = {styles} >
                    {props.color}
                </h1>
            </div>
        </div>
	);
}

export default GeneratorToolset;
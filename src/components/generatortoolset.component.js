import React from 'react';

function GeneratorToolset(props) {
    let styles = {
        color: props.textColor,
    };

	return (
		<div className = 'Generator-palette-toolset'>
            <div className = 'Generator-palette-toolset-tools'>

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
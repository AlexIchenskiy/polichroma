import React from 'react';

function GeneratorToolset(props) {
    let styles = {
        color: props.textColor,
    };

	return (
		<div className = 'Generator-palette-toolset'>
            <div>

            </div>
            <h1 style = {styles} >
                {props.color}
            </h1>
        </div>
	);
}

export default GeneratorToolset;
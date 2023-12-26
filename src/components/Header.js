import React from 'react';
import MaterialUISwitch from './switch';

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header head'>
			
			<search/>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='switch'>
				<MaterialUISwitch/>
			</button>
		</div>
	);
};

export default Header;

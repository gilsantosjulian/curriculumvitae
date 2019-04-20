import React from 'react';

const Sidebar = ({ children }) => (
	<div className='sidebar'>
		<div className='Sidebar-container'>
			{children}
		</div>
	</div>
);

export default Sidebar;
import React from 'react';
import './MainLayout.css';

function MainLayout(props) {
	return (
		<Layout>
			{/* SideBar */}
			<Layout>
				{/* header */}
				{/* content */}
				{props.children}
			</Layout>
		</Layout>
	);
}

export default MainLayout;

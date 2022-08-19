import React from 'react';
import { Layout } from 'antd';
import './AuthLayout.css';

function AuthLayout(props) {
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

export default AuthLayout;

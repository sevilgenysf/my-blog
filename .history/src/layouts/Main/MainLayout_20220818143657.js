import React from 'react';
import './MainLayout.css';
import { Layout } from 'antd';
import Sidebar from '../../components/Sidebar/Sidebar';

function MainLayout(props) {
	return (
		<Layout>
			<Sidebar />
			<Layout style={{ left: '200px' }}>
				{/* header */}
				{/* content */}
				{props.children}
			</Layout>
		</Layout>
	);
}

export default MainLayout;

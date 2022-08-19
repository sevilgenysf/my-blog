import React from 'react';
import './MainLayout.css';
import { Layout } from 'antd';
import Sidebar from '../../components/Sidebar/Sidebar';
import AppHeder from '../../components/AppHeader/AppHeder';

function MainLayout(props) {
	return (
		<Layout>
			<Sidebar />
			<Layout style={{ marginLeft: '2000px' }}>
				<AppHeder />
				{/* content */}
				{props.children}
			</Layout>
		</Layout>
	);
}

export default MainLayout;

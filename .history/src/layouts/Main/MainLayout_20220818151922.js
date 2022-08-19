import React from 'react';
import './MainLayout.css';
import { Layout } from 'antd';
import Sidebar from '../../components/Sidebar/Sidebar';
import AppHeder from '../../components/AppHeader/AppHeder';
import AppContent from '../../components/AppContent/AppContent';

function MainLayout(props) {
	return (
		<Layout>
			<Sidebar />
			<Layout style={{ marginLeft: '200px' }}>
				<AppHeder />
				<AppContent></AppContent>
				{props.children}
			</Layout>
		</Layout>
	);
}

export default MainLayout;

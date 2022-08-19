import React from 'react';
import { Layout, Menu } from 'antd';
import './AppHeader.css';

function AppHeder() {
	const menu = () => {
		<Menu theme="dark">
			<Menu.Item></Menu.Item>
		</Menu>;
	};
	return <Layout.Header className="app-header"></Layout.Header>;
}

export default AppHeder;

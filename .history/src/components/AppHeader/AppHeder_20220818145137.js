import React from 'react';
import { Layout, Menu, Dropdown } from 'antd';
import './AppHeader.css';

function AppHeder() {
	const menu = () => {
		<Menu theme="dark">
			<Menu.Item></Menu.Item>
		</Menu>;
	};
	return <Layout.Header className="app-header">
		<Dropdown overlay={menu} placement=""
	</Layout.Header>;
}

export default AppHeder;

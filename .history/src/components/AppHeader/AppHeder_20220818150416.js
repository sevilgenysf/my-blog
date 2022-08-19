import React from 'react';
import { Layout, Menu, Dropdown, Avatar } from 'antd';
import './AppHeader.css';

function AppHeder() {
	const menu = () => {
		return (
			<Menu theme="dark">
				<Menu.Item key="exit">Çıkış Yap</Menu.Item>
			</Menu>
		);
	};
	return (
		<Layout.Header className="app-header">
			<Dropdown overlay={menu} placement="bottomLeft">
				<Avatar style={{ background: '#87d068' }}>Y</Avatar>
			</Dropdown>
		</Layout.Header>
	);
}

export default AppHeder;

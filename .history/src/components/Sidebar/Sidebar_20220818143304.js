import React from 'react';
import { Menu, Layout } from 'antd';
import './Sidebar.css';

function Sidebar() {
	return (
		<Layout.Sider className="sidebar">
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
				<Menu.Item key="/"></Menu.Item>
				<Menu.Item key="/post/create-post"></Menu.Item>
			</Menu>
		</Layout.Sider>
	);
}

export default Sidebar;

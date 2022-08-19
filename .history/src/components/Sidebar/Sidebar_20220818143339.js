import React from 'react';
import { Menu, Layout } from 'antd';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<Layout.Sider className="sidebar">
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
				<Menu.Item key="/">
					<Link to="/">Ana Sayfa</Link>
				</Menu.Item>
				<Menu.Item key="/post/create-post"></Menu.Item>
			</Menu>
		</Layout.Sider>
	);
}

export default Sidebar;

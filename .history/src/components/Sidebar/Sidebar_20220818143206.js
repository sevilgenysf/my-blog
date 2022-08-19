import React from 'react';
import { Menu, Layout } from 'antd';
import './Sidebar.css';

function Sidebar() {
	return <Layout.Sider className="sidebar">
		<Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}
	</Layout.Sider>;
}

export default Sidebar;

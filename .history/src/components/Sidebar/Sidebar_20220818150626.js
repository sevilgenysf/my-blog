import React from 'react';
import { Menu, Layout } from 'antd';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<Layout.Sider className="sidebar" style={{ height: ' 100vh !important' }}>
			<Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
				<Menu.Item key="/">{/* <Link to="/">Ana Sayfa</Link> */}</Menu.Item>
				<Menu.Item key="/post/create-post">
					{/* <Link to="/post/create-post">Post Oluştur</Link> */}
					post Oluştur
				</Menu.Item>
			</Menu>
		</Layout.Sider>
	);
}

export default Sidebar;

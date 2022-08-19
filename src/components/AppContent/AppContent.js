import React from 'react';
import './AppContent.css';
import { Layout } from 'antd';

function AppContent(props) {
	return (
		<Layout.Content className="app-content">
			<div className="app-content-wrapper">{props.children}</div>
		</Layout.Content>
	);
}

export default AppContent;

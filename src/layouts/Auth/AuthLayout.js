import React from 'react';
import { Layout } from 'antd';
import './AuthLayout.css';

function AuthLayout(props) {
	return <Layout className="auth-layout">{props.children}</Layout>;
}

export default AuthLayout;

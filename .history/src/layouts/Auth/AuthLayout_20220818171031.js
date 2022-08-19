import React from 'react';
import { Layout } from 'antd';
import './AuthLayout.css';

function AuthLayout(props) {
	return <Layout>{props.children}</Layout>;
}

export default AuthLayout;

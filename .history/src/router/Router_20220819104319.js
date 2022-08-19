import Home from '../views/Home/Home';
import Post from '../views/Post/Post';
import PostCreate from '../views/Post/PostCreate/PostCreate';
import Auth from '../views/Auth/Auth';
import SignIn from '../views/Auth/SignIn/SignIn';
import SignUp from '../views/Auth/SignUp/SignUp';
import { Routes, Route } from 'react-router-dom';

export const AppRoutes = [
	{
		component: <Home />,
		path: '/',
		protect: true
	},
	{
		component: <Post />,
		path: '/post',
		protect: true,
		children: [
			{
				component: <PostCreate />,
				path: '/',
				protect: true
			}
		]
	},
	{
		component: <Auth />,
		path: '/auth',
		protect: true,
		children: [
			{
				component: <SignIn />,
				path: 'sign-in',
				protect: false
			},
			{
				component: <SignUp />,
				path: 'sign-up',
				protect: false
			}
		]
	}
];


const AppRouter = () => {
	return(

	)
}

export default AppRouter;
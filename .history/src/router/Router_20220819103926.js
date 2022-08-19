import Home from '../views/Home/Home';
import Post from '../views/Post/Post';
import PostCreate from '../views/Post/PostCreate/PostCreate';
import Auth from '../views/Auth/Auth';

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
				component: <PostCreate />,
				path: '/',
				protect: true
			},
			{
				component: <PostCreate />,
				path: '/',
				protect: true
			}
		]
	}
];

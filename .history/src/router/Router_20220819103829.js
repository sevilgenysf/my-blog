import Home from '../views/Home/Home';
import Post from '../views/Post/Post';
import PostCreate from '../views/Post/PostCreate/PostCreate';

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
	}
];

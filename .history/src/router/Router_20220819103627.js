import Home from '../views/Home/Home';
import Post from '../views/Post/Post';

export const AppRoutes = [
	{
		component: <Home />,
		path: '/',
		protect: true
	},
	{
		component: <Post />,
		path: '/',
		protect: true
	}
];

import React from "react";
import Home from "./Pages/Home/Home.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.scss";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Anime from "./Pages/Anime/Anime.jsx";

const Layout = () => {
	return (
		<div className='app'>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/anime",
				element: <Anime />,
			},
		],
	},
]);

const App = () => {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;

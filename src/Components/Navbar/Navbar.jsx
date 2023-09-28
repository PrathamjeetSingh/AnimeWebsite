import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='left'>
					<div className='item'>
						<Link
							className='link'
							to='/'
						>
							Home
						</Link>
					</div>
					<div className='item'>
						<Link
							className='link'
							to='/anime'
						>
							Anime
						</Link>
					</div>
					<div className='item'>
						<Link
							className='link'
							to='manga'
						>
							Manga
						</Link>
					</div>
				</div>
				<div className='center'>
					<h1>FindAnime</h1>
				</div>
				<div className='right'>
					<div className='item'>
						<Link
							className='link'
							to='manga'
						>
							Search Anime
						</Link>
					</div>
					<div className='item'>
						<Link
							className='link'
							to='manga'
						>
							Search Manga
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

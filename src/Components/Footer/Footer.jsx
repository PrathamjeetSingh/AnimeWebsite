import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className='footer'>
			<div className='top'>
				<div className='icon'>
					<img
						src='./Assets/footer/1.png'
						alt=''
					/>
				</div>
				<hr />
				<div className='icon'>
					<img
						src='./Assets/footer/2.png'
						alt=''
					/>
				</div>
				<hr />

				<div className='icon'>
					<img
						src='./Assets/footer/3.png'
						alt=''
					/>
				</div>
				<hr />

				<div className='icon'>
					<img
						src='./Assets/footer/4.png'
						alt=''
					/>
				</div>
				<hr />

				<div className='icon'>
					<img
						src='./Assets/footer/5.png'
						alt=''
					/>
				</div>
			</div>

			<div className='bottom'>
				<div className='item'>
					<Link>Anime</Link>
				</div>
				<div className='item'>
					<Link>Manga</Link>
				</div>
				<div className='item'>
					<Link>
						<h1>FindAnime</h1>
					</Link>
				</div>
				<div className='item'>
					<Link>Recommend Anime</Link>
				</div>
				<div className='item'>
					<Link>Recommend Manga</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;

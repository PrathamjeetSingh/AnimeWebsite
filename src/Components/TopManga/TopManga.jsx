import React, { useEffect, useState } from "react";
import "./TopManga.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "https://api.jikan.moe/v4/top/manga";

const TopManga = () => {
	const [animeData, setAnimeData] = useState();

	const getData = async () => {
		await axios
			.request(url)
			.then((response) => setAnimeData(response.data.data))
			.catch((error) => {
				console.log(error);
			});
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className='TopManga'>
			<div className='top'>
				<h2>Top Manga</h2>
				<button>More</button>
			</div>
			<div className='bottom'>
				{/* {console.log(animeData)} */}
				<div className='items'>
					{animeData?.map((data) => {
						return (
							<div
								className='card'
								key={data.mal_id}
							>
								<Link
									to={data.url}
									target='_blank'
								>
									<div className='top-card'>
										<img
											src={data.images.jpg.large_image_url}
											alt=''
										/>
									</div>
								</Link>
								<div className='bottom-card'>
									<div className='name'>
										<p>{data.title}</p>
									</div>
									<div className='score'>
										<p>{data.score} ⭐</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default TopManga;

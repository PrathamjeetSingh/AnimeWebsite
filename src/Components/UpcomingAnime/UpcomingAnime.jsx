import React, { useEffect, useState } from "react";
import "./UpcomingAnime.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "https://api.jikan.moe/v4/seasons/upcoming";

const UpcomingAnime = () => {
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
		<div className='UpcomingAnime'>
			<div className='top'>
				<h2>Upcoming Anime </h2>
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

export default UpcomingAnime;

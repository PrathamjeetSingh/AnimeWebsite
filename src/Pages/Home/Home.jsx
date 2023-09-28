import React from "react";
import "./Home.scss";
import Slider from "../../Components/Slider/Slider";
import Ongoing from "../../Components/Ongoing/Ongoing.jsx";
import UpcomingAnime from "../../Components/UpcomingAnime/UpcomingAnime";
import TopManga from "../../Components/TopManga/TopManga";

const Home = () => {
	return (
		<div className='home'>
			<Slider />
			<Ongoing />
			<UpcomingAnime />
			<TopManga />
		</div>
	);
};

export default Home;

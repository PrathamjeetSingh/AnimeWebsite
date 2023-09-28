import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.scss";

const Slider = () => {
	const data = [
		"./Assets/Slider/1.jpg",
		"./Assets/Slider/2.jpg",
		"./Assets/Slider/3.png",
		"./Assets/Slider/4.jpg",
		"./Assets/Slider/5.jpg",
	];

	return (
		<div className='slider'>
			<Carousel
				autoPlay='true'
				infiniteLoop='true'
				transitionTime='1500ms'
				dynamicHeight={true}
				showThumbs={false}
				showStatus={false}
				className='carousel'
			>
				<div className='container'>
					<img
						src={data[0]}
						alt=''
					/>
				</div>
				<div className='container'>
					<img
						src={data[1]}
						alt=''
					/>
				</div>
				<div className='container'>
					<img
						src={data[2]}
						alt=''
					/>
				</div>
				<div className='container'>
					<img
						src={data[3]}
						alt=''
					/>
				</div>
				<div className='container'>
					<img
						src={data[4]}
						alt=''
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default Slider;

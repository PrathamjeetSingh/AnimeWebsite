import React from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { IconButton } from "@mui/material";
import "./AnimeSearch.scss";

const AnimeSearch = () => {
	return (
		<div className='AnimeSearch'>
			<input
				type='search'
				name=''
				id=''
				className='search'
			/>

			<IconButton
				aria-label='delete'
				type='submit'
				color='primary'
			>
				<SearchTwoToneIcon className='icon-btn' />
			</IconButton>
		</div>
	);
};

export default AnimeSearch;

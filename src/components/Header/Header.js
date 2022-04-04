import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
	return (
		<div>
			<ul>
			<li><CustomLink to="/">Home</CustomLink></li>
				<li><CustomLink to="/reviews">Reviews</CustomLink></li>
				<li><CustomLink to="/dashboard">DashBoard</CustomLink></li>
				<li><CustomLink to="/blogs">Blogs</CustomLink></li>
				<li><CustomLink to="/about">About</CustomLink></li>
			</ul>
		</div>
	);
};

export default Header;
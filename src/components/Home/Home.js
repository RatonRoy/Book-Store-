import React from 'react';
import { Link } from 'react-router-dom';
// import bookStore from '../Img/bookStore.jpg';
import booksmainpic from './imgaes/booksmainpic.jpg'
import './Home.css';
import Reviews from '../Reviews/Reviews';
const Home = () => {
	return (
		<div className="container-all">
			<div className="main-container">
				<div className='home-container'>
					<div className='home-information'>
						<h1 className='home-title'>
							Reading is Part of Your Success
						</h1>
						<p className="book-text">
							Education never ends, neither after school nor after getting the job of your dreams. Our life is a continuous learning process, although some of us may not be conscious of this.

							I have always looked up to successful people as I wanted to be one of them, so I analyzed their lifestyles thoroughly. It was no surprise to discover that they always make time to read, study and learn far beyond their grade school. That’s why they became great thinkers, innovators and leaders.


						</p>
						<Link to='/' className='home-btn'> Explore More</Link>
					</div>
					{/* img container  */}
					<div className="img-container">
						<img src={booksmainpic} alt=" Book store picture" />
					</div>
				</div>
			</div>
			<Reviews> </Reviews>
		</div>
	);
};

export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './Reviews.css';

const Reviews = () => {
	return (
		<div className='review-container'>
			<h1 className='title-review'> Reviews </h1>
			<div className=" review-wrap">
				
				<div className="single-review">
					<h3 className="name"> Md Rahim Ali</h3>
					<p className="review-text">
						I already order many book in the previous time. They give the books on time. 
					</p>
				</div>
				<div className="single-review">
					<h3 className="name"> Md Rubel Ali</h3>
					<p className="review-text">
						Reading book is my habit. When I want to read book, firstly I think about this online book store. All time I found the quality books there. 
					</p>
				</div>
				<div className="single-review">
					<h3 className="name"> Monika  Roy </h3>
					<p className="review-text">
						I highly recommend this book store. They are vary responsible about their services. 
					</p>
				</div>
			</div>
			<div className="btn-wrapper">
			<Link to = '/reviews' className='btn-review'> See Alls </Link>
			</div>
		</div>
	);
};

export default Reviews;
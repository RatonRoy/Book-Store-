import React from 'react';
import './Blogs.css';

const Blogs = () => {
	return (
		<div className='question-container'>
			<h1 className='title'> Know More </h1>
			<div className="single-question">
				<h2 className="question">
					What is semantic tag ?
				</h2> 
				<p className="answer">
					Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the tag is immediately recognized by the browser as some type of coding language. 
					Another important thing is that if the another coder read my code he or she can easily guess the inside content.
				</p>
			</div> 
			<div className="single-question">
				<h2 className="question">
				Difference between inline and inline-block elements in html ?
				</h2> 
				<h3 className="answer-title">Inline</h3>
				<p className="answer">
				The element doesn’t start on a new line and only occupy just the width it requires. You can’t set the width or height.
				</p>
				<h3 className="answer-title-1">Inline Block</h3>
				<p className="answer">
				It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values. 
				</p>
			</div> 
			
		</div>
	);
};

export default Blogs;
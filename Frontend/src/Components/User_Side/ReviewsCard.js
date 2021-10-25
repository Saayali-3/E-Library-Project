import React from 'react'
import './Testimonial.css';

function ReviewsCard({user, what_they_say}) {

    return (
        // The product card
        <div className="testimonial">
            <div className="testimonial__info">
                <p className="testimonial__author">
                    <strong>{what_they_say}</strong>
                </p>
                <small>~</small>
                <h2>{user}</h2>
            </div>
        </div>
    )
}

export default ReviewsCard
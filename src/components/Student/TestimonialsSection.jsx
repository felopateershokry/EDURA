import React from 'react';
import { dummyTestimonial, assets } from '../../assets/assets';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
    return (
        <div className="testimonials-section">
            <h2>Testimonials</h2>
            <p>This is the Testimonials Section.</p>

            <div className="testimonials-grid">
                {dummyTestimonial.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                    <div className="header">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="avatar"
                        />
                        <div>
                            <h3>{testimonial.name}</h3>
                            <p className="role">{testimonial.role}</p>
                        </div>
                    </div>

                    <div className="body">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                                <img
                                    key={i}
                                    src={
                                    i < Math.floor(testimonial.rating)
                                        ? assets.star
                                        : assets.star_blank
                                        }
                                    alt="star"
                                />
                            ))}
                        </div>
                        <p>{testimonial.feedback}</p>
                    </div>

                    <div className="footer">
                        <a href="#">Read more</a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;

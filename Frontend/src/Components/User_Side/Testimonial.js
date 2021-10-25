import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
// import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";
import './Testimonial.css';

import { Reviews_Testimonials } from "./Reviews";
import ReviewsCard from "./ReviewsCard";

const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ width: "97%"}}
    >
        <div className="testimonialH__container">
                <div>
                  <div className="Write_Review">
                    <h1>Your reviews matter a lot to us...</h1>
                    <textarea style={{marginLeft: "10px", width: "95%", height: "100px"}}/>
                    <h1 className="testimonialH__genre__text">Testimonial</h1>
                  </div>
                    <div className="testimonialH__row">
                      {
                        Reviews_Testimonials.reviews_list.map(review => (
                        <ReviewsCard 
                          user={review.user} what_they_say={review.review}
                          className="Review__Card"
                        />
                        ))
                      }
                    </div>
                    {/* {
                    Reviews_Testimonials.reviews_list.map((row) => (
                        <div>
                            <div
                                id={row[0].toLowerCase()}
                                className="testimonialH__row"
                            >
                                {
                                row[1].map((card) => (
                                    <Product
                                    id={card.id}
                                    title={card.title}
                                    author={card.author}
                                    description={card.description}
                                    cover_images={card.cover_images}
                                    images={card.images}
                                    rating={card.rating}
                                    />
                                ))
                                }
                            </div>
                        </div>
                    ))
                    } */}
                </div>
            </div>

    </div>
  );
};

export default Testimonial;

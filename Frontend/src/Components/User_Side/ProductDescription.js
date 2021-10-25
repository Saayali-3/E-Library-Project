import React, { Component, useEffect, useState, CSSProperties } from 'react'
import './ProductDescription.css';
import { useTheme } from "@material-ui/core/styles";
import { useLocation, useParams } from 'react-router';
import FloatingButton from './FloatingButton';


function ProductDescription() {

  
  // Details
  
  // Getting details props:
  
  const {handle} = useParams();
  const location = useLocation();
  const product = location.state.products[0];
    
    const images_3d = product.cover_images.cover_images;
    const show_images = product.src.images;
    // const rating = 5;
    // const rating = product.rating.rating;
    // const title = "The Book";
    const author = product.author.author;
    const title = product.title.title;
    // const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur ds placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!"
    const description = product.description.description;
    
    // End of getting
    
    // Book 3D
  
    // var background1 = {"--background1": `url(https://media.istockphoto.com/photos/background-fabric-texture-made-from-the-cover-of-an-old-book-picture-id1218599930?k=20&m=1218599930&s=612x612&w=0&h=20fMkXoDD9Ih1qk_NLmlPc12toxkyiefnP5hN3xdLDs=)`}
    var background1 = {"--background1": `url(${images_3d[1]})`}
    // var background2 = {"--background2": `url(https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-back-cover-poster-template-64e079c575fc3260669bd54c7190faff_screen.jpg?ts=1561420714)`}
    var background2 = {"--background2": `url(${images_3d[2]})`}
    
    const CollectionSize = show_images.length;
    const theme = useTheme();
    const [index, setActiveStep] = React.useState(0);
    
    var visibility = {"--visibility": `hidden`}
    
    const goToNextPicture = () => {
      setActiveStep((prevActiveStep) => ( prevActiveStep !== CollectionSize - 1 ? (prevActiveStep + 1): prevActiveStep ));
    };
    
  const goToPrevPicture = () => {
    setActiveStep((prevActiveStep) => ( prevActiveStep !== 0 ? (prevActiveStep - 1) : prevActiveStep ));
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="product_description">

      {/* Floating button */}
      <FloatingButton />

      {/* Book 3D */}

      <section className="product_description__section">
        <div title="Hover for book spine and Click and hold for back cover" className="product_description__book"
        style={{...background1, ...background2}}
        >
          {/* <img src="https://cdna.artstation.com/p/assets/images/images/026/730/960/large/ismael-gil-fantasy-book-cover3.jpg?1589558905" /> */}
          <img src={images_3d[0]} />
        </div>
      </section>

      {/* Details */}

      <section className="product_details__section">

        <div className="product_description__details">
          {/*  */}
          <div className = "product_description__details__card-wrapper">

              {/* card left */}
              <div className = "product_description__details__product-imgs">

                <div className = "product_description__details__img-display">

                  <div className = "product_description__details__img-showcase">
                    
                    <img className="product_details__img" src = {show_images[index]}/>
                    
                  </div>

                </div>

                <div className = "product_description__details__img-select">
                  <button className = "product_description__details__image_show__btn"
                  onClick={goToPrevPicture}
                  disabled = {index === 0 ? true : false}
                  >
                    {"<"}
                  </button>
                  <button className = "product_description__details__image_show__btn"
                  onClick={goToNextPicture}
                  disabled = {index === CollectionSize - 1 ? true : false}
                  >
                    {">"}
                  </button>

                </div>

              </div>
              {/* <!-- card right --> */}
              <div className = "product_description__details__product-content">

                <h2 className = "product_description__details__product-title">{title}</h2>
                <h2 className = "product_description__details__product-author">
                  <small>~</small>
                  {author}
                </h2>
                {/* <div className = "product_description__details__product-rating">
                  <span>Rating : </span>
                  <div className = "product_description__details__product-rating_stars">
                      {Array(rating).fill().map(() => (
                              <p>⭐</p>
                          )
                      )}
                  </div>
                </div> */}

                <div className = "product_description__details__product-detail">
                  <h2>about this item: </h2>
                  <p>{description}</p>
                </div>

                <button type = "button" className = "product_description__details__btn">Download</button>

              </div>

          </div>

        </div>

      </section>
    </div>
  )
}

export default ProductDescription
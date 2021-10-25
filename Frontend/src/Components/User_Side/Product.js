import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import './Product.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ProductDescription from './ProductDescription';

function Product({id, title, author, description, cover_images, images}) {
    // , rating

    return (
        // The product card
        <div className="product">
            <div className="product__info">
                <h2>{title}</h2>
                <p className="product__author">
                    <small>~</small>
                    {console.log(author)}
                    <strong>{author}</strong>
                </p>
                {/* <div className="product__rating">
                    {Array(rating).fill().map(() => (
                            <p>⭐</p>
                        )
                    )}
                </div> */}
            </div>

            <img src={cover_images[0]}/>
            <Link className="product__button" to={{
                pathname:'/product_description',
                state: {
                    products: [
                        {
                        "_id": {id},
                        "title": {title},
                        "author": {author},
                        "cover_images": {cover_images},
                        "src": {images},
                        "description": {description},
                        // "rating": {rating}
                        }
                    ],
                    index: 0
                }
                }}>
                Check this out
            </Link>
        </div>
    )
}

export default Product
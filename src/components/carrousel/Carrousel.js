import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Carrousel = (props) => {
    const { items } = props;
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {
                    items.map((item, index) => {
                        const { imgName, title, description, path } = item;
                        return (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <Link to={path}>
                                    <h1>{title}</h1>
                                    <h3> {description} </h3>
                                    <img src= {imgName} className="d-block w-100" alt="..." />
                                </Link>
                                <h5>{description}</h5>
                                
                            </div>
                        );
                    })
                }
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}
Carrousel.defaultProps = {
    items: []
}
export default Carrousel;
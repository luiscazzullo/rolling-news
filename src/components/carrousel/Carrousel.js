import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Carrousel = (props) => {
    const { allowDescription, items } = props;
    return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {
                    items.map((item, index) => {
                        const { image, title, copete, description, path } = item;
                        return (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <Link className="text-decoration-none text-body" to={path}>
                                    <h1>{title}</h1>
                                    <p>{copete}</p>
                                    <img src= {image} className="d-block imgCarrousel" alt="..." />
                                    {allowDescription ? <p class="small">{description}</p> : null}
                                </Link>
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
    items: [],
    allowDescription: false,
}
export default Carrousel;
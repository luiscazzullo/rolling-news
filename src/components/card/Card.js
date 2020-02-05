import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Card = ({ title, subTitle, someText, cardLink, date, img }) => {
    return (
            <div className="card mb-2 CardNews">
                <div className="card-body">
                    <Link className="card-link" to={cardLink}>
                        <h5 className="card-title">{ title }</h5>
                    </Link>
                    <img src={img} className="card-img-top imgCard img-fluid"/>
                    <p>{ subTitle }</p>
                    <p className="card-text">{ someText }</p>
                    <div className="d-flex justify-content-between">
                        <div>
                        <p className="card-text text-right"><small>{date}</small></p>
                        </div>
                    </div>                                      
                </div>
            </div>
    );
}

export default Card;
import React, { Component } from 'react';
import PropTypes from "prop-types";

const AsideContent = ({id,title,img}) => {
    const titles = React.createElement('h3', {className:'card-title mt-0', key: `title_1_${id}` }, title);
    const imgs = React.createElement('img', {src: img, className: 'card-img-top' , key: `img_1_${id}`});
    const cardBody= React.createElement('div', {className:'card-body', key: `body_1_${id}`},[titles,imgs]);
    const cardId = React.createElement('h2',{className: 'card', key: `id_1_${id}`}, id);
    const cardContainer = React.createElement('div', {className: 'row', key: `container_1_${id}`},[cardId,cardBody]);

    return(
        <div>{cardContainer}</div>         
    );
};

const Aside = ({items}) => {
    return items.map(article => {
        const { id, title, img } = article;
        return (
            <AsideContent
                key={id} 
                title={title}
                img={img}
            />
        );
    });
}

Aside.defaultProps = {
    id : '',
    title : '',
    img : ''
};

Aside.propTypes = {
    id : PropTypes.string,
    title : PropTypes.string,
    img : PropTypes.string
};


export default Aside;
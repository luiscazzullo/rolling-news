import React from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

const AsideContent = ({id,title,img,path}) => {
    const titles = React.createElement('h5', {className:'card-title mt-0', key: `title_1_${id}` }, title);
    const imgs = React.createElement('img', {src: img, className: 'card-img-top' , key: `img_1_${id}`});
    const cardBody= React.createElement('div', {className:'card-body mb-1 p-0 ', key: `body_1_${id}`},[titles,imgs]);
    const cardId = React.createElement('h4',{className: 'imgAside', key: `id_1_${id}`}, id);
    const cardContainer = React.createElement('div', {className: '', key: `container_1_${id}`},[cardId,cardBody]);
    
    return(
        <div>
            <Link className='text-decoration-none text-body'to={path}>
            {cardContainer}
            </Link>
            
        </div>         
    );
};

const Aside = ({items}) => {
    return items.map(article => {
        const { id, title, image, path } = article;
        return (
            <AsideContent
                key={id} 
                title={title}
                img={image}
                path={path}
            />
           
        );
    });
}

Aside.defaultProps = {
    id: '',
    title: '',
    image:'',
    path: ''
};

Aside.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    image: PropTypes.string,
    path: PropTypes.string,
};


export default Aside;
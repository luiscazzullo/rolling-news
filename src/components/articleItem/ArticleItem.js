import React, { Component, createElement } from 'react';
import Button from '../../components/button/Button';

const ArticleItem = (props) => {

    const {id, title, body, onEdit } = props;    
    const ItemTitle = createElement('strong', {className: 'd-block text-gray-dark',  key:`ItemTitle-${id}`}, title);
    const ItemBody= createElement('p', {className: 'media-body pb-3 mb-0 small',  key:`ItemBody-${id}`}, body);
    const Item= createElement('div', {className: 'col-12 col-sm-8'}, [ItemTitle, ItemBody]);
    const btnEditId=`btnEditId-${id}`;
    const btnDeletetId=`btnDeleteId-${id}`;
    
    return(
        <div className="row text-muted pt-3 border-bottom border-gray">
            {Item}
            <div className='col-6 col-sm-2 text-right'>                
                <Button 
                    id = {btnEditId}
                    text="Editar"
                    type="button"
                    color="primary" 
                    onClick = {onEdit}/>    
            </div>
            <div className='col-6 col-sm-2'>    
                <Button 
                    id = {btnDeletetId}
                    text="Eliminar"
                    type="button"
                    color="danger" 
                    onClick = {() => {
                        if (confirm('Realmente deseas eliminar este articulo?')) {

                        }
                    }}/>
            </div>
        </div>
        );
    
}

export default ArticleItem;
import React from 'react';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, faMailBulk, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook , faInstagram , faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Icon = props => {
const {id, name , color , size , onClick} = props;
let icon;


switch(name) {
    case 'facebook':
        icon = faFacebook;
        break;
    case 'twitter':
        icon = faTwitter;
        break;
     case 'instagram':
       icon = faInstagram;
        break;
    case 'whatsapp':
        icon =faWhatsapp;
        break;
    case 'email':
        icon= faEnvelope;
        break
            }
 
return(
    <span style={{display: 'inline-block', margin: '4px'}}>
        <FontAwesomeIcon icon={icon} size={size} color={color} />
    </span>
    );
    
};
export default Icon;


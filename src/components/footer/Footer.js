import React from 'react';
import Icon from '../icon/Icon';
const Footer = () => {
    return (
        <div>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 d-xl-block d-md-block d-sm-none d-xs-none d-none">
                        <p><strong className="d-block">Dirección</strong>
                        General Paz N° 576, S.M. de Tucumán.
                        Tucumán. Argentina.
                        </p>
                        <p><strong className="d-block">Ciudad:</strong>San Miguel de Tucumán</p>
                        <p><strong className="d-block">Provincia:</strong>Provincia de Tucumán</p>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <h6 className="text-center"><strong>Redes Sociales</strong></h6>
                            <div className=" d-md-block d-sm-flex justify-content-between">
                                <div className="d-xl-inline-block d-md-block d-sm-inline-block d-xs-inline-block">
                                    <a href="https://www.facebook.com" target="_blank"><Icon name="facebook" size="2x" color="#3b5998" /></a>
                                    <p className="d-inline">Siguenos en facebook</p>
                                </div>
                                <div className="d-xl-inline-block d-md-block d-sm-inline-block d-xs-inline-block">
                                    <a href="https://www.twitter.com" target="_blank"><Icon name="twitter" size="2x" color="#00acee"/></a>
                                    <p className="d-inline">Siguenos en twitter</p>
                                </div>
                                <div className="d-xl-inline-block d-md-block d-sm-inline-block d-xs-inline-block">
                                    <a href="https://www.instagram.com" target="_blank"><Icon name="instagram" size="2x" color="#e95058"/></a>
                                    <p className="d-inline">Siguenos en instagram</p>
                                </div>
                            </div>
                    </div>
                    <div className="col-md-4 d-xl-block d-md-block d-sm-none d-xs-none d-none">
                        <h6><strong>Contacto</strong></h6>
                        <div>
                            <a href="https://www.whatsapp.com" target="_blank"><Icon name="whatsapp" size="2x" color="green"/></a>
                            <p className="ml-3 d-inline">0381 578-3030</p>
                        </div>
                        <div>
                        <a href="rollingnews@gmail.com" target="_blank"><Icon name="email" size="2x" color="#3b5998"/></a>
                        <p className="ml-3 d-inline">rollingnews@gmail.com</p>
                        </div>
                    </div>
                    
                </div>
        </div>
    
    </div>
    
    );
}

export default Footer;
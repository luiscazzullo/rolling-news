import React, { Component } from 'react';
//style
import './spinner.css';

const Spinner = () => {
    return (
        <div className= "spinnerbox">
                 <div className="d-flex justify-content-center">
                     <div className="spinner-border" role="status">
                          <span className="sr-only">Loading...</span>
                     </div>
                 </div>   
         </div>           
    )
}

export default Spinner;


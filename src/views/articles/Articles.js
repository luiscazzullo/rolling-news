import React, { Component } from 'react';
import Aside from "../../components/aside/Aside";

class Articles extends Component {
    render() {
        return (
            <div>
                <h1>Articles</h1>
                <Aside id={id} title={title} img={img} />
            </div>  
        );
    }
}

export default Articles;
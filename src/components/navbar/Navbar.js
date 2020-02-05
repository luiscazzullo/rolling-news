import React from 'react';
import { Link } from 'react-router-dom';
import Date from '../date/Date';

class Navbar extends React.Component {
    render () {
        const { items } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {items.map(item => {
                            return (
                                <li key={item.id} className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to={item.path}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <span className="navbar-text">
                        <Date />
                    </span>
                </div>
            </nav>                       

        );
    }
};

export default Navbar;
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isLogged, closeSession } from '../../utils/services';
import Button from '../button/Button';
import Logo from '../../images/rolling.png';
import Icon from '../icon/Icon';
import Navbar from '../navbar/Navbar';

import './header.css';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.Logged = this.Logged.bind(this);
    this.ViewAdmin = this.ViewAdmin.bind(this);
  }

  Logged(isLoggedIn, userName) {
    if (isLoggedIn) {
      return (
        <div>
          <h6>{userName}</h6>
          <Button 
            id="2"
            text="LogOut"
            type="button"
            size="md"
            color="danger"
            onClick={() => {
              closeSession();
              this.props.history.push('/');
            }}
          />
        </div>
      );
    } else {
      return (
        <>
          <div className="text-right">
            <Button
              id="1"
              text="LogIn"
              type="submit"
              size="md"
              color="success"
              onClick={() => {
                this.props.history.push('/login');
              }}
            />
          </div>
          <div>
            <a href="https://www.facebook.com" target="_blank">
              <Icon
                name="facebook" 
                size="2x" 
                color="#3b5998"
              />
            </a>
            <a href="https://www.twitter.com" target="_blank">
              <Icon
                name="twitter"
                size="2x"
                color="#00acee"
              />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <Icon
                name="instagram"
                size="2x"
                color="#e95058"
              />
            </a>
          </div>
        </>
      );
    }
  }

  ViewAdmin(admin){
    let renderViewAdmin;      
    if(!admin){
        renderViewAdmin = 
          <div>
            <div className="d-flex justify-content-between">
                <div className="logo-container">
                  <Link to="/">
                    <img className ="imglogo" src={Logo} /> Rolling News
                  </Link>
                </div>
              <div>
                {this.Logged(false)}
              </div>
            </div>
            <div>
              <Navbar
                items={[ 
                  {
                    id: 0,
                    title: 'Inicio', 
                    path: '/'
                  }, 
                  {
                    id: 1,
                    title: 'Policiales', 
                    path: '/policiales'
                  },
                  {
                    id: 2,
                    title: 'Deportes', 
                    path: '/deportes'
                  },
                  {
                    id: 3,
                    title: 'Actualidad', 
                    path: '/actualidad'
                  }
              ]}
              />
            </div>
          </div>;
    } else {
      renderViewAdmin = 
      <div>      
        <div className="d-flex justify-content-between">
        <div className="logo-container">
          <Link to="/">
            <img className ="imglogo" src={Logo} /> Rolling News
          </Link>
        </div>
          {this.Logged(true, admin)}
        </div>
      </div>;
    }
    return(renderViewAdmin);
  }

  render () {
    return (
      <header className ="bg-dark p-2" style={{marginBottom: '30px'}}>
        {this.ViewAdmin(isLogged())}       
      </header>
    );
  }
}

export default withRouter(Header);

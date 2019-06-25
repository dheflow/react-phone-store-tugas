import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './img/store.png';
import { ButtonContainer } from './Button';
import styled from 'styled-components';

export default class Navbar extends Component{
  render(){
    return(
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" style={imgStyle}/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fas fa-cart-plus"/>
           <span> My cart </span>
          </ButtonContainer>
        </Link>
      </NavWrapper>
    )
  } 
}

const imgStyle = {
  width: 40,
  height: 50
}

const NavWrapper = styled.nav`
  background: #8685EF;
  .nav-link{
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    //1rem = 16px
    text-transform: capitalize !important;
  }
`;


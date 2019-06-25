import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';
import { Link } from 'react-router-dom';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { id, company, img, info, price, title, inCart} = value.detailProduct;
          return (
            <div className="container py-5">
              {/*title*/}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*end title*/}
              {/*product info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="product" />
                </div>
                {/*product text*/}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2> Model : {title} </h2>
                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                  made by: <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-purple">
                  <strong>
                    price <span>$</span> {price}
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product:
                </p>
                <p className="text-muted lead">{info}</p>
                {/*button*/}
                <div>
                  <Link to="/">
                    <ButtonContainer>
                      back to products
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart?true:false}
                    onClick={() =>{ 
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  border-radius: 0.3rem;
  font-size: 20px;
  background: ${props => props.cart ? "var(--mainWhite)" : "var(--lightpurple)"};
  border: 0.1rem solid white;
  border-color: ${props => props.cart ? "var(--mainYellow)": "var(--lightpurple)"};
  color: ${props => props.cart ? "var(--mainYellow)": "var(--mainWhite)"};
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  padding: 5px 10px 5px 10px;
  &:hover{
    background: ${props => props.cart ? "var(--mainYellow)" : "var(--mainWhite)"};
    color: ${props => props.cart ? "var(--mainWhite)" : "var(--lightpurple)"};
  }
  &:focus{
    outline:none;
  }
`;

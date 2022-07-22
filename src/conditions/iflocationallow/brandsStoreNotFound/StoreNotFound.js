import React from 'react';

import styled from '@emotion/styled';


import Header from '../../../components/Header';
import SpotlightXBrand from '../../../components/SpotlightXBrand';
import StoreNotFoundCard from '../../../components/StoreNotFoundCard';
import Usp from '../../../components/Usp';
import Footer from '../../../components/Footer';


const StoreNotFound = ({data}) => {


  return (
    <div style={{backgroundColor: '#171717'}}>
        <Header/>
          <StyleDivElement>
            <SpotlightXBrand/>
            <hr className='hr1'/>
            <StoreNotFoundCard/>
            <Usp/>
            <Footer/> 
          </StyleDivElement>  
    </div>
  )
};





const StyleDivElement = styled('div')` 
  .hr1{
    width: 218px;
    height: 0px;
    margin: 2px 0 0 25%;

    @media (max-width: 400px){
      margin: 2px 0 0 20%;
    }
    background: rgba(217, 217, 217, 0.6);
    opacity: 0.2;
    border: 1px solid #ADADAD;
  } 
`;

export default StoreNotFound;
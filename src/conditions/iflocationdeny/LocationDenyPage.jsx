import React from 'react';
import Header from '../../components/Header';
import SpotlightXBrand from '../../components/SpotlightXBrand';
import LocationDenyCard from '../../components/LocationDenyCard';
import Usp from '../../components/Usp';
import Footer from '../../components/Footer';
import styled from '@emotion/styled';

const LocationDenyPage = () => {


  return (
    <div style={{backgroundColor: '#171717'}}>
        <Header/>
          <StyleDivElement>
            <SpotlightXBrand/>
            <hr/>
            <LocationDenyCard/>
            <Usp/>
            <Footer/>
            
          </StyleDivElement>
    </div>
  )
};

const StyleDivElement = styled('div')`
  hr{
    width: 218px;
    height: 0px;
    margin: 2px 0 0 20%;
    background: rgba(217, 217, 217, 0.6);
    opacity: 0.2;
    border: 1px solid #ADADAD;
  }
`;

export default LocationDenyPage;
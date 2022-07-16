import React from 'react';
//import {useNavigate} from "react-router-dom";
//import { distance } from '../Data Constants/Data';
import { styled} from '@mui/material';


//importing components
import Header from '../components/Header';
import SpotlightXBrand from '../components/SpotlightXBrand';
import ButtonCard from '../components/ButtonCard';
import Usp from '../components/Usp';
import Footer from '../components/Footer';

const RageCoffee = () => {
  return (
    <div style={{backgroundColor: '#171717'}}>
        <Header/>
        <StyleDivElement>
          <SpotlightXBrand/>
          <hr/>
          <ButtonCard/>
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
    margin-bottom: 20px;
    margin-top: 5px;
  }  
`;

export default RageCoffee;
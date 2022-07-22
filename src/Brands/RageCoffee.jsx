import React,{useState,useEffect} from 'react';
//import {useNavigate} from "react-router-dom";
//import { distance } from '../Data Constants/Data';
import { styled} from '@mui/material';


//importing components
import Header from '../components/Header';
import SpotlightXBrand from '../components/SpotlightXBrand';
import ButtonCard from '../components/ButtonCard';
import Usp from '../components/Usp';
import Footer from '../components/Footer';

import axios from 'axios';
const brandDetailURL = 'https://api.omniflo.in/getbranddata?brandname=Spice'

const RageCoffee = () => {

    const [data,setData] = useState('');

    useEffect(() => {
      axios.get(`${brandDetailURL}`).then(res => {
        setData(res.data)
      }).catch(err =>{
        console.log(err)
      })
    },[])
    console.log(window.location.pathname)
  return (
    <div style={{backgroundColor: '#171717'}}>
        <Header/>
        <StyleDivElement>
          <SpotlightXBrand data={data}/>
          <hr/>
          <ButtonCard />
          <Usp data={data}/>
          <Footer/>  
        </StyleDivElement>
       
    </div>
  )
};

const StyleDivElement = styled('div')`
  
  hr{
    width: 218px;
    height: 0px;
    margin: 2px 0 0 25%;

    @media (max-width: 400px){
      margin: 2px 0 0 20%;
    }
    background: rgba(217, 217, 217, 0.6);
    opacity: 0.2;
    border: 1px solid #ADADAD;
    margin-bottom: 20px;
    margin-top: 5px;
    text-align: center;
  }  
`;

export default RageCoffee;
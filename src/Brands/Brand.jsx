import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { styled} from '@mui/material';
import axios from 'axios';

//importing components
import Header from '../components/Header';
import SpotlightXBrand from '../components/SpotlightXBrand';
import ButtonCard from '../components/ButtonCard';
import Usp from '../components/Usp';
import Footer from '../components/Footer';



const Brand = (props) => {

  const brand = useParams();
  const brandDetailURL = `https://api.omniflo.in/getbranddata?brandname=${brand.brandName}`

  useEffect(() => {
    axios.get(`${brandDetailURL}`).then(resp => {
    props.brandName(resp.data)
  })
  },[brandDetailURL,props])
  
  return (
    <div style={{backgroundColor: '#171717'}}>
        <Header/>
        <StyleDivElement>
          <SpotlightXBrand data={props.data}/>
          <hr/>
          <ButtonCard data={props.data}/>
          <Usp data={props.data}/>
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

export default Brand;
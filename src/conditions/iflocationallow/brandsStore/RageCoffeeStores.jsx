import React,{useState, useEffect} from 'react';
import { styled} from '@mui/material';
import LoadingScreen from '../../../loader/LoadingScreen';
import Header from '../../../components/Header';
import SpotlightXBrand from '../../../components/SpotlightXBrand';
import StoreFoundCard from '../../../components/StoreFoundCard';
import Usp from '../../../components/Usp';
import Footer from '../../../components/Footer';


const RageCoffeeStores = ({data}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },6000)
  }, [])

  return (
    <>
      <div style={{backgroundColor: '#171717'}}>
          <Header/>
            <StyleDivElement>
              <SpotlightXBrand/>
              <hr/>
              {
                loading ?  
                  <LoadingScreen/>
                : 
                  <StoreFoundCard/>
              }
              <Usp/>
              <Footer/>
            </StyleDivElement> 
      </div>
    </>
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
  }
`;

export default RageCoffeeStores;
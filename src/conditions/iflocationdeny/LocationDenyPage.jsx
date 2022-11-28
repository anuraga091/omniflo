import React,{useEffect, useState} from 'react';
import Header from '../../components/Header';
import SpotlightXBrand from '../../components/SpotlightXBrand';
import LocationDenyCard from '../../components/LocationDenyCard';
import ManualLocation from '../../components/ManualLocation';
import Usp from '../../components/Usp';
import Footer from '../../components/Footer';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LocationDenyPage = (props) => {
  // console.log('props in location deny page is : ',props)
  const brand = useParams();
  // const [sign, setSign] = useState(false)
  const [newLocation, setnewLocation] = useState('')
  // let sign = false;

  const brandDetailURL = `https://api.omniflo.in/getbranddata?brandname=${brand.brandName}`
  
  useEffect(() => {
    axios.get(`${brandDetailURL}`,{
      headers: {
        'Content-Type': 'text/html',
      },
    }).then(resp => {      
      props.brandName(resp.data)          
    })
  },[])
  // eslint-disable-line react-hooks/exhaustive-deps
 
  const getPlace = (place) => {
    console.log('place received in Deny Page is : ',place);
    // location = place; //Manual Location received
    setnewLocation(place);
    // setSign(true)
    console.log('entered getplace for sign')
  }

  return (
    //rendering location deny page 
    <div style={{backgroundColor: '#171717'}}>
          <Header/>
          <StyleDivElement>
            <SpotlightXBrand data={props.data}/>
            <hr/>
            {/* <LocationDenyCard onSubmit={getPlace}/> */}
            { !newLocation ? 
            <LocationDenyCard onSubmit={getPlace}/>
            :
            <ManualLocation location = {newLocation} data={props.data}/>              
            }
            {/* <ManualLocation /> */}
            <Usp data={props.data}/>
            <Footer/>
            
          </StyleDivElement>
    </div>
  )
};

const StyleDivElement = styled('div')`
  hr{
    width: 50%;
    height: 0px;
    margin: auto;
    background: rgba(217, 217, 217, 0.6);
    opacity: 0.2;
    border: 1px solid #ADADAD;
  }
`;

export default LocationDenyPage;
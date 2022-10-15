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

  const brand = useParams();
  const [coordsInfo, setCoordsInfo] = useState(true);

  //collectiveProps to send props.data, Lat and Long to ManualLocation as an object
  let [collectiveProps, setCollectiveProps] = useState({
      Lat : '',
      Long : '',    
      data : ''
  })

  const brandDetailURL = `https://api.omniflo.in/getbranddata?brandname=${brand.brandName}`
  
  useEffect(() => {
    //using get request to consume the data from api
    axios.get(`${brandDetailURL}`,{
      headers: {
        'Content-Type': 'text/html',
      },
    }).then(resp => {
      
      props.brandName(resp.data)
      // console.log('resp.data is : ',resp.data)
      // console.log('props in bdp is : ',props.data);
      
     
    })
  },[])// eslint-disable-line react-hooks/exhaustive-deps
  //giving the values of lat and long to lat and long
  //
  // let CoordsFunction = (Coords) => {
  //   setCollectiveProps(
  //     {        
  //       Lat : Coords[0],
  //       Long : Coords[1],
  //       data : props.data
  //     }
  //   )   
  //   // console.log('page lat and long are : '+ Lat + Long);
  // }
  // setTimeout(CoordsFunction(),1000);
  // console.log(Lat)
  // console.log(Long)
  let CoordsFunction = (Coords) => {
    console.log('Coords are : ',Coords);
    // const NewCollectiveProps = {...Coords}
    // CollectiveProps to send data as props to ManualLocation
    setCollectiveProps(
      {   
        ...Coords,
        data: props.data
      }
      )   
      console.log('collective props are : ',collectiveProps);
    // setCoordsInfo(true)
    // console.log('page lat and long are : '+ Lat + Long);
    console.log('coords fn executed');
  }
  CoordsFunction();
  // if(Lat && Long)
  return (
    //rendering location deny page 
    <div style={{backgroundColor: '#171717'}}>
          <Header/>
          <StyleDivElement>
            <SpotlightXBrand data={props.data}/>
            <hr/>
            { coordsInfo ? 
            <LocationDenyCard CoordsFunction={CoordsFunction} data={props.data}/>
            :
            <ManualLocation collectiveProps={collectiveProps} />              
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
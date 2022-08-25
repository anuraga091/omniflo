import React,{useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import { styled, Button } from '@mui/material';
import * as geolib from 'geolib';

const ButtonCard = ({data}) => {

    const navigate = useNavigate();

    const [Location, setLocation] = useState({
        loaded: false,
        coordinates: {lat : '', lng: ''}
    });

    useEffect(() => {
        //If we do not get geolocation in navigator
        if(!("geolocation" in navigator)){
            onError({
                code: 0,
                message: "Geolocation not supported or denied",
                
            });
        }  
    },[Location])// eslint-disable-line react-hooks/exhaustive-deps

    const onSuccess = Location => {
      // if we get geolocation in navigator
        setLocation({
            loaded: true,
            coordinates: {
                lat: Location.coords.latitude,
                lng: Location.coords.longitude
            }
        })

        //initializing store distance in a empty list
        const storeDistance = []
        if (data && data.stores){
          // for all the stores present in json
          for (let i = 0; i < data.stores.length; i++) {
            
            const element = data.stores[i];
            
            //calculating distance of stores from your location 
            const locationDistance =geolib.getPreciseDistance({
              latitude: Location.coords.latitude,
              longitude: Location.coords.longitude
            }, {
                latitude: element.lat,
                longitude: element.long,
            })

            //updating all the store distance in the list and converting it in km
            storeDistance.push(Math.round(locationDistance/1000))
          }      
    }
      // redirecting to Stores page if nearest store is 50km from user location  
        if(Math.min(...storeDistance) <= 50){
            navigate("Stores")
        }
      // redirecting to Stores not found page if nearest store is more than 50km from user location
        else{
          navigate("Store Not Found")
        }   
    }
    // if user denies permission to access their location
    const onError = (error) => {
         setLocation({
            loaded: true,
            error,
        })
      console.log(error)
      //if user denies permission to access their location redirect to Location denied page
      navigate("Location denied")
      
    }
  
  // asking for location of a user and it's condition 
  const ShowLocationPopUp = () => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError); 
  }

  return (
    //rendering button card component
    <StyleDiv>
      <div className='card'>
          <p>Visit the nearest store for <br/> <i> exclusive deals </i> </p>
          <Button onClick={ShowLocationPopUp}><img src="./images/map_pin.svg" alt="icon"/>  Find a Store Near Me </Button>
          <p className='ask'>We ask for location permission to locate stores near you. Click “Allow” once you see a popup.</p>
      </div>
    </StyleDiv>
  )
}

const StyleDiv = styled('div')`
   .card{
    margin:  20px;
    padding: 20px 0;
    box-sizing: border-box;
    background: linear-gradient(180deg, rgba(58, 58, 58, 0.7) 5.22%, rgba(72, 72, 72, 0.4) 94.94%);
    backdrop-filter: blur(12px);
    border-radius: 5px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.2);
    p{
      text-align: center;
      margin: 10px 0px 5px 0px;
      i{
        font-weight: 700;
        color: #F38137;
      }
    }

    .ask{
      font-weight: 400;
      font-size: 11px;
      text-align: center;
      color: #ADADAD;
      margin:  10px 30px;
    }

    button{ 
      background: linear-gradient(-45deg, #FFA63D, #3F0BDB, #FF0C67,#338AFF);
      background-size: 600%;
      border-radius: 20px;
      margin: 10px 20px 20px 20px;
      font-weight: 600;
      font-size: 16px;
      text-transform: none;
      color: #fff;
      font-family: 'Poppins', sans-serif; 
      text-decoration: none;
      padding: 10px 0;
      position: relative;
      animation: anime 16s linear infinite;
      img{
        width: 24px;
        height: 24px;
        margin-right: 5px;
      }
    }
  }


@keyframes anime {
   0%{
     background-position: 0% 50%
     }
   50%{
     background-position: 100% 50%
     }
   100%{
     background-position: 0% 50%
     }
} 
`;

export default ButtonCard




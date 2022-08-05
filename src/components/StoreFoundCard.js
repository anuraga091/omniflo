import React from 'react';
import { styled, Button } from '@mui/material';
import * as geolib from 'geolib';


const StoreFoundCard = ({data}) => {
  
  navigator.geolocation.getCurrentPosition(
    (Location) => {
        
        const dist = {storeDistance: ''}
        
        if (data && data.stores){
          for (let i = 0; i < data.stores.length; i++) {
            
            const element = data.stores[i];
            const locationDistance =geolib.getDistance({
              latitude: Location.coords.latitude,
              longitude: Location.coords.longitude
            }, {
                latitude: element.lat,
                longitude: element.long,
            })
            const distance = Math.round(locationDistance/1000)
            dist.storeDistance = distance
            Object.assign(element, dist)
            
          }
          var byDistance = data.stores.slice(0);
          byDistance.sort(function(a,b) {
            return a.storeDistance - b.storeDistance;
          });
          data.stores = byDistance
          
    }
    }
  );

  console.log(data)
  

  return (
    <StyleDivElement>
      {data && data.stores ?
       data.stores.map( (d , index) => (
        <div className='card' key={index} >
            <p className='distance'>{d.storeDistance}km Away</p>
            <p className='name' >{d.storeName}</p>
            <p className='location'>Koramangala</p>
            <Button><img src="../images/location.svg" alt="icon"/> <a href={`geo:${d.lat},${d.long};`}>Take me there</a> </Button>
        </div>
      ))
      :
      ''
    }
        
    </StyleDivElement>
  )
}

const StyleDivElement = styled('div')`
.card{
    margin:  20px;
    padding: 20px 0;
    box-sizing: border-box;
    background: linear-gradient(180deg, rgba(58, 58, 58, 0.7) 5.22%, rgba(72, 72, 72, 0.4) 94.94%);
    backdrop-filter: blur(12px);
    border-radius: 5px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.2);
    

    .distance{
        margin: 0;
        padding: 20px 0;
        font-weight: 600;
        font-size: 32px;
        line-height: 24px;
        background: linear-gradient(90deg, #B89FFF 0%, #FF9BC1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
       text-align: center;
    }
    .name{
        margin: 5px 0 0 0;
        font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        text-align: center;
        text-transform: uppercase;
    }
    .location{
        margin: 5px 0 0 0;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        text-align: center;

    }
    button{
      background: linear-gradient(-45deg, #FFA63D, #3F0BDB, #FF0C67,#338AFF);
      background-size: 600%;
      border-radius: 20px;
      margin: 10px 20px 20px 20px;
      
      animation: anime 16s linear infinite;

      img{
        width: 24px;
        height: 24px;
        margin-right: 5px;
    }

    a{
      text-decoration: none;
      font-weight: 600;
      font-size: 16px;
      color: #fff;
      font-family: 'Poppins', sans-serif; 
      text-decoration: none;
      padding: 10px 0;
      position: relative;
      text-transform: uppercase;
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
}
`;
export default StoreFoundCard
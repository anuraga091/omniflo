import React,{useEffect, useState} from 'react';
import { styled, Button } from '@mui/material';
import * as geolib from 'geolib';
import axios from 'axios';
const ManualLocation = ({location , data} ) => {
  let currLat
  let currLong
  console.log(location);

  const [brandData, setBrandData] = useState(null);

  //N-> declaring variables to get curr lat and curr long
  // useEffect( function ButtonFunc(){
  //   axios.get(`https://api.geoapify.com/v1/geocode/search?text=${location}&format=json&apiKey=10ff75a41458452486c224643ce04ee3`).then(res => {

    
  //   currLat = res.data.results[0].lat;
  //   currLong= res.data.results[0].lon;
  //   console.log('lat in manual location is : ',currLat)
  //   console.log('long in manual location is : ',currLong)
  //   })
  //   },[]
  // )
 
  
  //initializing new data as object 
  var newData = {};



  
  //initializing findDistance function
  var findDistance = new Promise(function(resolve, reject) {
        axios.get(`https://api.geoapify.com/v1/geocode/search?text=${location}&format=json&apiKey=10ff75a41458452486c224643ce04ee3`).then(res => {

        console.log('location is : ', location)
        currLat = res.data.results[0].lat;
        currLong= res.data.results[0].lon;
        console.log('lat in manual location is : ',currLat, 'type of data is : ',typeof currLat)
        console.log('long in manual location is : ',currLong)
        // })
    

        //Manual Location 

        //intializing dist as object and first input as key-value pair of storeDistance with empty string
        const dist = {storeDistance: ''}
          // console.log(data);
        if (data && data.stores){
          console.log('entered if statement, ie data and data.stores available')

            //for all the stores in json of data
            for (let i = 0; i < data.stores.length; i++) {
              // console.log(`entered ${i}th store`)
              
              const element = data.stores[i];
              // console.log(element)
              // console.log(currLat);
              //calculating distance using lat and long
              const locationDistance = geolib.getPreciseDistance({
                latitude: currLat,
                longitude: currLong,
              }, {
                  latitude: element.lat,
                  longitude: element.long,
                })
              const distance = Math.round(locationDistance/1000)
              // console.log('distance is : ',distance)
  
              //updating in dist object
              dist.storeDistance = distance

              //adding distance into data.stores
              Object.assign(element, dist)
              
            }

          
            //sorting with distance
            var byDistance = data.stores.slice(0);
            byDistance.sort(function(a,b) {
              return a.storeDistance - b.storeDistance;
            });

            //updating data.stores with sorted data.stores
            data.stores = byDistance   

            resolve(data)
            // console.log('data is : ', data)
            // console.log('1')
         
        }
    
    }) 
  })
        // console.log(brandData.stores)
        // console.log(data.stores)
        //assigning value of new data = data
        // newData = data
        // console.log('data is : '+ data); //its not receiving any data 
        findDistance.then(function(value){
            newData = data
            //updating the state of brand data with new data as input
            setBrandData(newData)
            console.log('2')
            // console.log(newData);
        })




    function openGoogleByMethod(){
        window.open(`https://www.google.com/maps/dir/${currLat},${currLong}/${brandData.stores[0].lat},${brandData.stores[0].long}`)
    }
  return (
    //rendering store found card component
    <StyleDivElement>
      {brandData && brandData.stores ?
       
        <div className='card'  >
            <p className='distance'>{brandData.stores[0].storeDistance}km Away</p>
            <p className='name' >{brandData.stores[0].storeName}</p>
            <p className='location'>Bengaluru</p>
            <Button onClick={openGoogleByMethod}> <img src="../images/location.svg" alt="icon"/> <span>Take me there</span> </Button>   
            {/* <Button><img src="../images/location.svg" alt="icon"/> <a href={`geo:${brandData.stores[0].lat},${brandData.stores[0].long},z=20?q=${encodeURI(brandData.stores[0].storeName)}`}>Take me there</a> </Button>    */}
        </div>
     
      :
        <div className='card'>
          <p>Just a second</p>
        </div>
    } 
    {/* <div className='card'  >
            <p className='distance'>{brandData.stores[0].storeDistance}km Away</p>
            <p className='name' >{brandData.stores[0].storeName}</p>
            <p className='location'>Bengaluru</p>
            <Button onClick={openGoogleByMethod}> <img src="../images/location.svg" alt="icon"/> <span>Take me there</span> </Button>
    </div> */}
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
      border-radius: 10px;
      margin: 10px 20px 25px 20px;
      width: 50%;
      left: 20%;
      
      animation: anime 16s linear infinite;
      img{
        width: 24px;
        height: 24px;
        margin-right: 5px;
      }
      span,a{
        text-decoration: none;
        font-weight: 600;
        font-size: 16px;
        color: #fff;
        font-family: 'Poppins', sans-serif; 
      font-family: 'Poppins', sans-serif; 
        font-family: 'Poppins', sans-serif; 
        text-decoration: none;
        padding: 8px 0;
        position: relative;
        text-transform: capitalize;
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
export default ManualLocation;
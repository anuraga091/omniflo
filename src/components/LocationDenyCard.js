// how to remove current url in reactjs?
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link, useParams} from 'react-router-dom';
// import StoreFoundCard from './StoreFoundCard';
import axios from 'axios';
// import {useSearchParams} from 'react-router-dom';




const LocationDenyCard = (props) => {  
  let brand = useParams();
  // navigate(`${data.brand.brandName}/Stores`)
  // let NBrand = useParams();
  // const brand = useParams();
  // const brandDetailURL = `https://api.omniflo.in/getbranddata?brandname=${brand.brandName}`

  

                    // let place1;
                     // const [place, setPlace] = useState('');
  // const [Coordinates, setCoordinates] = useState({
    //   lat:'',
    //   long:''
    // });
    // let Coordinates = {
    //   lat : '',
    //   long : ''
    // }
    // let city = 'Kota';
    
                // function takeInput(e){
                //   place1 = (e.target.value);
                // }
    
    // setPlace(place1)
    
    function ButtonFunc(){
      axios.get(`https://api.geoapify.com/v1/geocode/search?text=kota&format=json&apiKey=10ff75a41458452486c224643ce04ee3`).then(res => {
      let newLat, newLong;
      let Coordinates = {
        lat : '',
        long : ''
      }
      newLat = res.data.results[0].lat
      newLong = res.data.results[0].lon
      console.log(newLat)
      console.log(newLong)
      // Coordinates(lat = newLat,long = newLong);
      Coordinates.lat = newLat;
      Coordinates.long = newLong;
      props.CoordsFunction(Coordinates)
  })
  }
  
  // Coordinates.lat = newLat;
  // Coordinates.long = newLong;
  

  // let Coords = [lat,long];
  // function CoordsFunction(){
    // props.CoordsFunction(Coordinates)
  // }


  // const onInputChange = (e) => {
  //   setInput(...input)
  // }
  // console.log(brand.brandName);

  

  return (
    <StyleDivElement>
        {/* <div className='card'>
            <p className='one'>Well, that’s one way to go about it!</p>
            <hr/>
            <p className='two'>Unfortunately, we can’t show stores near you if you deny location permission.</p>
            <hr/>
            <p className='three'>Everyone deserves a second chance. 
              <a href="https://support.google.com/chrome/answer/142065">This is how </a> you can enable location permission 
              again to find stores nearest to you.
            </p>
        </div> */}
        <div className='card'>
          <p>Visit the nearest store for <br/> <i> exclusive deals </i> </p>
          <input className='input' placeholder='Enter your location' type="text"/>
          {/* <input className='input' placeholder='Enter your location' type="text" value={place} onChange={takeInput}/> */}
          {/* <Link to={`/${brand.brandName}/Stores`}><button>Button</button></Link> */}
          <input type='submit' value='submit' onClick={ButtonFunc}/>
          {/* <button onSubmit={()=>ButtonFunc()}>Submit</button> */}
          {/* <ManualLocation Coords={Coords}/> */}
          
        </div>
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
    
    p{
      text-align: center;
      margin: 0;
      margin-top: 10px;
      font-size: 20px;
      margin-bottom: 19px;
      padding: 0;
      i{
        font-weight: 700;
        color: #F38137;
        font-size: 18px;
        margin-top: 10px;
      }
    }
    .input{
      border-radius: 12px;
      width: 75%;
      display: block;
      text-align: center;
      padding: 9px;
      margin: auto;
      font-weight: 600;
      font-size: 18px;
      text-transform: none;
      color: black;
      font-family: 'Poppins', sans-serif;
      background-color: #fff;
      border-width: 0; 
      outline: none;
    }
    
    
    ${'' /* p{
      margin: 20px 30px;
    } */}

   .one{
    font-weight: 600;
    font-size: 32px;
    line-height: 36px;
    /* or 112% */

    text-align: center;

    background: linear-gradient(90deg, #B89FFF 0%, #FF9BC1 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    

   }
   .two{
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: #FFFFFF;
   }
   .three{
    font-style: italic;
    font-weight: 400;
    font-size: 11px;
    text-align: center;
    color: #ADADAD;
    a{
      color: #ADADAD;
    }
   }
    button{
      background: linear-gradient(90deg, #3F0BDB 0%, #FF0C67 100%);
      border-radius: 5px;
      margin: 10px 20px 20px 20px;
      font-weight: 600;
      font-size: 16px;
      text-transform: none;
      color: #fff;
      font-family: 'Poppins', sans-serif;

      img{
        width: 24px;
        height: 24px;
        margin-right: 5px;
      }
    }
  }

`;
export default LocationDenyCard

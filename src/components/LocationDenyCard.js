// how to remove current url in reactjs?
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useParams} from 'react-router-dom';
// import StoreFoundCard from './StoreFoundCard';
// import axios from 'axios';
// import {useSearchParams} from 'react-router-dom';




const LocationDenyCard = (props) => {  
  let brand = useParams();
  const [place, setPlace] = useState('');
  // let [coordinates, setCoordinates] = useState({Lat : '', Long : ''})
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
    
  //   function ButtonFunc(){
  //     axios.get(`https://api.geoapify.com/v1/geocode/search?text=kota&format=json&apiKey=10ff75a41458452486c224643ce04ee3`).then(res => {
  //     let newLat, newLong;
  //     let Coordinates = {
  //       lat : '',
  //       long : ''
  //     }
  //     newLat = res.data.results[0].lat
  //     newLong = res.data.results[0].lon
  //     // let Coordinates = [newLat, newLong]
  //     // let Coordinates = {Lat : '', Long : ''}
  //     Coordinates = {lat : newLat, long : newLong}
  //     console.log(Coordinates.lat)
  //     console.log(Coordinates.long)
  //     // console.log(newLat)
  //     // console.log(newLong)
  //     // Coordinates(lat = newLat,long = newLong);
  //     // Coordinates[0] = newLat;
  //     // Coordinates[1] = newLong;
  //     props.CoordsFunction(Coordinates)
  // })
  // }
  
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

  const handleChange = (e) => {
    setPlace(e.target.value)
    console.log(place)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(place);
  }

  return (
    <StyleDivElement>
      <div className='card'>
        <form className='form' onSubmit={handleSubmit} >
          <input className='input' type='text' value={place} onChange={handleChange} placeholder='Enter your location'/>
          <button className='button' type='submit'><span>Submit</span></button>
        </form>                     
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


    .form{
      display: flex;
      flex-direction: column;
      width: 90%;
      margin: auto;
      justify-content: center;
      align-items: center;


      .input{
        width: 65%;
        font-weight: 600;
        font-size: 1.1rem;
        margin: 1rem;
        padding: 0.7rem;
        border-width: 0; 
        outline: none;
        border-radius: 10px;
        text-align: center;
      }
      
      button{
        background: linear-gradient(-45deg, /*#FCB69F,*/#c90076,#662D8C,/*#ED1E79,*/#FCB69F,#c90076,#ED1E79/*,#FCB69F*/);  
      background-size: 600%;
      border-radius: 10px;
      ${'' /* margin: 10px 20px 25px 10px; */}
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      width: 65%;
      border-width: 0;
      padding: 0.7rem;
      border: none;
      
      animation: anime 16s linear infinite;
      span{
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        color: #fff;
        font-family: 'Poppins', sans-serif; 
        text-decoration: none;
        padding: 8px 0;
        position: relative;
        text-transform: capitalize;
      }
    }
    button:hover{
      transform: scale(1.1);
    }
    }    
  
    @keyframes anime{
      0%{
        background-position: 0% 50%;
      }
      50%{
        background-position: 100% 50%;
      }
      100%{
        background-position: 0% 50%;
      }
    } 
  }
    `;
export default LocationDenyCard;

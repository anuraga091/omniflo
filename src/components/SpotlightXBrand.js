import React from 'react';
import { imageData } from '../Data Constants/Data';
import { styled } from '@mui/material';

const SpotlightXBrand = () => {
  return (
    <>
        {imageData.map(data => (
        <StyleDivElement>
            <div className='img'>
              <img src="/images/spotlight logo.jpg" alt="Spotlight Logo"/> 
              <span> X </span>
              <img src={data.url} alt={data.alt}/>
            </div>
            <h6>
              <b>{data.name}</b>
              <span> is now on </span>
              <b> Spotlight </b>
            </h6>
        </StyleDivElement>

    ))}
    </>
  )
}

const StyleDivElement = styled('div')`
  
  .img{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
    }

  img{
    width: 112px;
    height: 112px;
    
    border-radius: 50%;
  }
  span{
    margin-top: 50px;
  }
  h6{
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    margin: 10px;
  }
`;
export default SpotlightXBrand
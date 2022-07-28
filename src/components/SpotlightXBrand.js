import React  from 'react';
import { styled } from '@mui/material';
import { useParams } from 'react-router-dom';



const SpotlightXBrand = ({data}) => {
  const brand = useParams();
  return (
    <>
        
        <StyleDivElement>
            <div className='img'>
              <img src={data.brandLogo} alt="Spotlight Logo"/> 
              <span> X </span>
              <img src={data.brandLogo} alt='/'/>
            </div>
            <h6>
              <b>{brand.brandName}</b>
              <span> is now on </span>
              <b> Spotlight </b>
            </h6>
        </StyleDivElement>

    
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
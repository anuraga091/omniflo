import React  from 'react';
import { styled } from '@mui/material';
import { useParams } from 'react-router-dom';



const SpotlightXBrand = ({data}) => {
  //getting brand name from the URL
  const brand = useParams();
  return (
    //rendering spotlightXbrand component
    <>
        <StyleDivElement>
            <div className='img'>
              <img className='image1' src="/images/spotlight logo.jpg" alt="Spotlight Logo"/> 
              <span> X </span>
              <img className='image2' src={data.brandLogo} alt='/'/>
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

  .image1{
    width: 112px;
    height: 112px;
    border-radius: 50%;
  }
  .image2{
    width: 150px;
    height: 100%;
    margin-top: 30px;
    border-radius: 0px;
  }
  span{
    margin-top: 45px;
  }
  h6{
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    margin: 10px;
  }
`;
export default SpotlightXBrand
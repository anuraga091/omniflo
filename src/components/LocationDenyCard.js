import React from 'react';
import styled from '@emotion/styled';



const LocationDenyCard = () => {
  //rendering location deny card component
  return (
    <StyleDivElement>
        <div className='card'>
            <p className='one'>Well, that’s one way to go about it!</p>
            <hr/>
            <p className='two'>Unfortunately, we can’t show stores near you if you deny location permission.</p>
            <hr/>
            <p className='three'>Everyone deserves a second chance. 
              <a href="https://support.google.com/chrome/answer/142065">This is how </a> you can enable location permission 
              again to find stores nearest to you.
            </p>
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
      margin: 20px 30px;
    }

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

import React from 'react';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';


const LocationDenyCard = () => {
  return (
    <StyleDivElement>
        <div className='card'>
            <p>Visit the nearest store for <br/> <i> exclusive deals </i> </p>
            <StyleTextFiled id="outlined-basic" label="Enter Your Location" variant="outlined" size="small" />
        </div>
    </StyleDivElement>
  )
}

const StyleTextFiled = styled(TextField)`
    border-radius: 5px;
    margin: 10px 20px 20px 20px;
    font-weight: 600;
    font-size: 16px;
    text-transform: none;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    background-color: #fff;
    
`;

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
    margin: 10px 0px 5px 0px;
    i{
      font-weight: 700;
      color: #F38137;
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

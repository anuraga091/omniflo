import React from 'react'
import { TextField, Button} from '@mui/material';
import styled from '@emotion/styled';
import { distance } from '../Data Constants/Data';


const StoreNotFoundCard = ({data}) => {
  return (
    <StyleDivElement>
        <div className='card'>
            <p className='store'>THE NEAREST STORE IS</p>
            <p className='distance'>{distance}km Away</p>
            <hr className='hr2'/>
            <p className='text1'>How Far Will You Go for Love? </p>
            <p className='text2'>Instead, let us Notify you when we launch near you. </p>
            <StyleTextFiled id="outlined-basic" label="Full name" variant="outlined" size="small" />
            <StyleTextFiled id="outlined-basic" label="Phone number" variant="outlined" size="small" />
            <StyleTextFiled id="outlined-basic" label="Location" variant="outlined" size="small" />
            <Button><img src="../images/discount.svg" alt="icon"/> Get 25% off on Launch </Button>
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
    
    }
    
    .distance{
        font-weight: 600;
        font-size: 32px;
        line-height: 24px;
        text-transform: capitalize;
        background: linear-gradient(90deg, #B89FFF 0%, #FF9BC1 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        padding: 10px;
        margin-bottom: 0;
    }
    .text1{
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        margin-bottom: 0;
    }
    .text2{
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        padding: 0 40px;
        margin-top: 5px;
    }
    .store{
        font-weight: 400;
        font-size: 11px;
        line-height: 16px;
        margin: 0;
    }
    .hr2{
    width: 218px;
    height: 0px;
    margin: 10px auto;
    background: rgba(217, 217, 217, 0.6);
    opacity: 0.2;
    border: 1px solid #ADADAD;

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

export default StoreNotFoundCard
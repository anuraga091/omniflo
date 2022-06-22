import React from 'react'
import { styled } from '@mui/material';
const Home = () => {
  return (
    <StyleDiv style={{backgroundColor: '#171717' , height: '100%'}}>
      <p className='header'>Spotlight</p>
      <p className='body'>Your Favourite Brands Near You</p>
      <p className='anchor'><a href="/rageCoffee">Rage Coffee</a></p>
    </StyleDiv>
  )
}


const StyleDiv = styled('div')`
  
  .header{
    padding: 10px 20px;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    background-color: black;
    width: auto;
    background-color: rgba(0, 0, 0, 1);
  }

.body{
  text-align: center;
  margin-top: 50%;
  padding: 10px 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 40px;
  text-transform: capitalize;
  background: linear-gradient(90deg, #B89FFF 0%, #FF9BC1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text; 
}

.anchor{
  text-align: center;
  a{
    text-decoration: none;
    color: #fff;
    
  }
}
`;

export default Home
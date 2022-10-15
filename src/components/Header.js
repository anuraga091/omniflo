import React from 'react';
import { styled } from '@mui/material';

const Header = () => {
  return (
    //rendering header component
    <StylePElement><a href="/">Spotlight</a></StylePElement>
   
  )
}

const StylePElement = styled('p')`
  padding: 10px 20px;
  margin-top: 0;
  
  line-height: 24px;
  background-color: black;
  width: auto;

  a{
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    font-size: 18px;
  }
`;

export default Header
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import React,{useState, useEffect} from 'react';
import { styled } from '@mui/material';



const LoadingScreen = () => {

  const [icon, setIcon] = useState(<RadioButtonUncheckedIcon/>);

  

  useEffect(() => {
    setIcon(<RadioButtonUncheckedIcon/>)
    setTimeout(() => {
      setIcon(<CheckCircleIcon/>)
    },500)
  }, [])

  

  return (
    <StyleDiv>
      <p id='one'>{icon} Connecting to server</p>
      {/* <p className='two'>{icon} Grabbing objects</p>
      <p className='three'>{icon} Redndering page</p>
      <p className='four'>{icon} Resolving IP</p>
      <p className='five'>{icon} Pondering emptiness</p>
      <p className='six'>{icon} Considering alternatives</p>
      <p className='seven'>{icon} Shuffling bits</p>
      <p className='eight'>{icon} Waiting for response</p>
      <p className='nine'>{icon} Waiting for response </p>
      <p className='ten'>{icon} Generating pages</p>
      <p className='eleven'>{icon} Simulating workflow</p>
      <p className='twelve'>{icon} Empowering humanity</p> */}
      
    </StyleDiv>
    
  )
}

const StyleDiv = styled('div')`
  text-align: center;
  margin-top: 50vh;


@keyframes anim-lineUp {
  0% {
    opacity: 1;
    transform: translateY(80%);
  }
  20% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
    transform: translateY(0%);
  }
  100% {
    opacity: 0;
    transform: translateY(0%);
  }
}
  #one{
    animation: 1s anim-lineUp ease-out infinite;
  }
  
  

`;

export default LoadingScreen

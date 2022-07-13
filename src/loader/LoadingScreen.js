import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import React,{useState} from 'react';
import { styled } from '@mui/material';



const LoadingScreen = () => {

  const [icon, setIcon] = useState(<RadioButtonUncheckedIcon/>);
  const [text] = useState(['Connecting to server','Grabbing objects','Redndering page','Resolving IP'])

  const doLoad = () => {
      setTimeout(() => {
        setIcon(<CheckCircleIcon/>)
        },500)
  }

  // useEffect(() => {
  //   setIcon(<RadioButtonUncheckedIcon/>)
  //   
  // }, [])

  

  return (
    <StyleDiv className='scroller'>
      <span onLoad={doLoad()}>
        {icon} {text[0]}
        <br/> {icon} {text[1]}
        <br/> {icon} {text[2]}
        <br/> {icon} {text[3]}
      </span>
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
  margin-top: 40vh;
  height: 100px;
  position: relative;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  margin-left: 30%;
  line-height: 30px;


  span{
    text-align: center;
    position: absolute;
    top: 0;
    animation: slide 4s infinite;
  }



@keyframes slide {
  0% {
    top: 5rem;
  }
  25% {
    top: 2.5em;
  }
  50% {
    top: 0em;
  }
  75% {
    top: -2.5em;
  }
  100%{
    top: -5em;
  }
}
  
  
  

`;

export default LoadingScreen

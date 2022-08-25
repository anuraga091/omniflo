import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import React,{useState} from 'react';
import { styled } from '@mui/material';



const LoadingScreen = () => {

  const [icon, setIcon] = useState(<RadioButtonUncheckedIcon/>);
  const [text] = useState(['Fetching your location','Doing math','Locating nearby stores','Swiping tiktok','Verifying inventory','Finalizing stuff','Tadaa!'])

  const doLoad = () => {
      setTimeout(() => {
        setIcon(<CheckCircleIcon/>)
        },500)
  }

  // useEffect(() => {
  //   setIcon(<RadioButtonUncheckedIcon/>)
    
  // }, [setIcon])

  

  return (
    <StyleDiv >
      <div className='card'>
        <div className='scroller'>
          <span onLoad={doLoad()}>
            {icon} {text[0]}
            <br/> {icon} {text[1]}
            <br/> {icon} {text[2]}
            <br/> {icon} {text[3]}
          </span>
        </div>
      </div>
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
  
 

.card{
    height: 100px;
    position: relative;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 30px;
    margin:  20px;
    padding: 20px 0;
    box-sizing: border-box;
    background: linear-gradient(180deg, rgba(58, 58, 58, 0.7) 5.22%, rgba(72, 72, 72, 0.4) 94.94%);
    backdrop-filter: blur(12px);
    border-radius: 5px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.2);
}
  span{
    text-align: center;
    align-items: center;
    position: relative;
    line-height: 30px;
    margin-bottom: 5px;
    animation: slide 4s infinite;
    
  }
  svg{
    text-align: center;
    align-items: center;
    margin-bottom: 5px;
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

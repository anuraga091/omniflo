// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';

// import './LoadingScreen.css';

import React,{useState} from 'react';
import { styled } from '@mui/material';

//<span class="material-icons-round" style="background-color: rgb(255, 255, 255); border-style: hidden;">check_circle_outline</span>

//<span class="material-icons-round" style="border-style: hidden; border-radius: 50%; border-width: 15px; padding: 0px; font-size: 109px; color: rgb(0, 0, 255);"> check_circle </span>



const LoadingScreen = () => {

  const [icon, setIcon] = useState(<CheckCircleOutlineIcon/>);
  const [text] = useState(['Fetching your location','Doing math','Locating nearby stores','Swiping tiktok','Verifying inventory','Finalizing stuff','Tadaa!'])

  const [ opac , setOpac] = useState(0.4);
  const [icon1, setIcon1] = useState(<CheckCircleOutlineIcon/>)
  const [icon2, setIcon2] = useState(<CheckCircleOutlineIcon/>)
  const [icon3, setIcon3] = useState(<CheckCircleOutlineIcon/>)
  const [icon4, setIcon4] = useState(<CheckCircleOutlineIcon/>)
  const [icon5, setIcon5] = useState(<CheckCircleOutlineIcon/>)
  const [icon6, setIcon6] = useState(<CheckCircleOutlineIcon/>)

  // text.style.opacity = opac;

  const doLoad = () => {
      setTimeout(() => {
        // icon.classList.Add("svg");
        setIcon(<CheckCircleIcon/>)
        },700)
        // setTimeout(()=>{
        //   setOpac(1);
        // },400)
        // setTimeout(()=>{
        //   setOpac(0.4);
        // })
  }
  const doLoad1 = () => {
      setTimeout(() => {
        setIcon1(<CheckCircleIcon/>)
        // icon1.classList.Add("svg");
        },1200)
  }
  const doLoad2 = () => {
      setTimeout(() => {
        setIcon2(<CheckCircleIcon/>)
        // icon2.classList.Add("svg");
      },1700)

  }
  const doLoad3 = () => {
      setTimeout(() => {
        setIcon3(<CheckCircleIcon/>)
        // icon3.classList.add("svg");
        },2200)
  }
  const doLoad4 = () => {
      setTimeout(() => {
        setIcon4(<CheckCircleIcon/>)
        // icon4.classList.Add("svg");
        },2500)
  }
  const doLoad5 = () => {
      setTimeout(() => {
        setIcon5(<CheckCircleIcon/>)
        // icon5.classList.Add("svg");
        },3300)
  }
  const doLoad6 = () => {
      setTimeout(() => {
        setIcon6(<CheckCircleIcon/>)
        // icon6.classList.Add("svg");
        },3800)
  }

  // document.getElementsByClassName('svg1').classList.add('svg')
  
    
  // }
  // if(height)
    // console.log('icon height: ',icon1.getBoundingClientRect().height)
  // useEffect(() => {
  //   setIcon(<RadioButtonUncheckedIcon/>)
    
  // }, [setIcon])

  

  return (
    <StyleDiv > 
    <div className='container'>
      <div className='card'>
        <div className='scroller'>
          {/* <div onLoad={doLoad()}> */}
          <div className='span'>
            {/* <span>{icon} {text[0]}</span> <br/>
            <span>{icon} {text[1]}</span> <br/>
            <span>{icon} {text[2]}</span> <br/>
            <span>{icon} {text[3]}</span> <br/>
            <span>{icon} {text[4]}</span> <br/>
            <span>{icon} {text[5]}</span> <br/>
            <span>{icon} {text[6]}</span> <br/> */}
            <span onLoad={doLoad()}>{icon} {text[0]}</span>
            <br/> <span onLoad={doLoad1()}>{icon1} {text[1]}</span>
            <br/> <span onLoad={doLoad2()}>{icon2} {text[2]}</span> 
            <br/> <span onLoad={doLoad3()}>{icon3} {text[3]}</span> 
            <br/> <span onLoad={doLoad4()}>{icon4} {text[4]}</span> 
            <br/> <span onLoad={doLoad5()}>{icon5} {text[5]}</span> 
            <br/> <span onLoad={doLoad6()}>{icon6} {text[6]}</span> 
          </div>
        </div>
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
      
      {/* <div className='container'>
      <h1 class="title">Loading</h1>
<div class="rainbow-marker-loader"></div>
    </div> */}
    
      
    </StyleDiv>
    
  )
}

const StyleDiv = styled('div')`

    ${'' /* background: linear-gradient(180deg, rgba(58, 58, 58, 0.7) 5.22%, rgba(72, 72, 72, 0.4) 94.94%); */}
.container{
    height: 220px;
    width: 92%;
    position: relative;
    overflow: hidden;
    display: block;
    margin: auto;
    ${'' /* padding: 20px auto; */}
    ${'' /* background-color: rgba(58, 58, 58); */}
    backdrop-filter: blur(12px); 
    border-radius: 5px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.2);
}

${'' /* icon1{
  width:50px;
  height:50px;
} */}

  .card{
    height: 190px;
    position: relative;
    ${'' /* position: absolute; */}
    overflow: hidden;
    ${'' /* display: flex; */}
    ${'' /* justify-content: center;
    align-items: center; */}
    text-align: center;
    line-height: 35px;
    ${'' /* margin:  20px; */}
    padding: 20px 10px;
    box-sizing: border-box;
    background-color: rgba(58, 58, 58);
    ${'' /* background: linear-gradient(180deg, rgba(58, 58, 58, 0.7) 5.22%, rgba(72, 72, 72, 0.4) 94.94%); */}
    ${'' /* backdrop-filter: blur(12px);  */}
    ${'' /* border-radius: 5px; */}
    ${'' /* border-width: 1px; */}
    border-color: rgba(58,58,58,0.2);
  }
${'' /* .card{
    height: 200px;
    position: relative;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    text-align: center;
    line-height: 30px;
    margin:  20px;
    padding: 20px 20px;
    box-sizing: border-box;
    background: linear-gradient(180deg, rgba(58, 58, 58, 0.7) 5.22%, rgba(72, 72, 72, 0.4) 94.94%);
    backdrop-filter: blur(12px); 
    border-radius: 5px;
    border-width: 1px;
    border-color: rgba(255, 255, 255, 0.2);
} */}
${'' /* .scroller{
  padding: 50px;
} */}
  
  span{
    ${'' /* width: 20px; */}
    ${'' /* height: 10px; */}
    ${'' /* width: 10px; */}
  }
  .span{
    ${'' /* height: 200px; */}
    ${'' /* width: 80%;
    max-height: 20%;  */}
    ${'' /* height: 20px; */}
    text-align: center;
    align-items: center;
    position: relative;
    line-height: 35px;
    margin-bottom: 5px;
    margin-top: 15px;
    padding: 10px 0;
    ${'' /* opacity:0.4; */}
    animation: slide 5s infinite;
    
  }
  ${'' /* svg{
    text-align: center;
    align-items: center;
    margin-bottom: 5px;
    padding: 10px 0;
  } */}
  svg{
    ${'' /* align-items: center; */}
    ${'' /* opacity: 0.4;     */}
    height: 15px;
    width: 15px;
    opacity: 1;
  }

  @keyframes slide {
    0%{
      top: 10em;
    }
    25%{
      top: 4em;
    }
    50%{
      top: -1em;
    }
    75%{
      top: -7em;
    }
    100%{
      top: -10em;
    }
  }


${'' /* @keyframes slide {
  0% {
    top: 8rem;
  }
  20% {
    top: 4rem;
  }
  40% {
    top: 0rem;
  }
  60% {
    top: -5rem;
  }
  80% {
    top: -9rem;
  }
  100%{
    top: -12rem;
  }
} */}


  

`;

export default LoadingScreen

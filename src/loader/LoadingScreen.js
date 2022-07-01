import React from 'react';
import styled from '@emotion/styled';

const LoadingScreen = () => {
  return (
    <StyleDiv id="background-wrap">
        <div class="bubble x1"></div>
    </StyleDiv>
  )
}


const StyleDiv = styled('div')`

  padding: 0;
  margin: 0;
  outline: 0;
  border: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(45deg, #6fc7b5 0%, #13bdce 20%, #0094d9 40%, #5a3694 60%, #ee4d74 80%, #f58c58 100%);
  background-size: 600%;
  background-position: 0% 100%;
  -webkit-animation: gradient 7s ease-in-out infinite;
          animation: gradient 7s ease-in-out infinite;
  position: absolute;
  left: 0;


#background-wrap {
    bottom: 0;
	left: 0;
	position: relative;
	right: 0;
	top: 0;
	z-index: -1;
}



@-webkit-keyframes loading-dot {
   0%{
    transform: rotate(0deg);
    
  }
  
  100%{
    transform:  rotate(360deg);
    
  }
}
@keyframes loading-dot {
   0%{
    transform: rotate(0deg);
    
  }
  
  100%{
    transform:  rotate(360deg);
    
  }
}

.x1 {
    -webkit-animation: loading-dot 3.5s ease-in-out infinite;
    animation: loading-dot 3.5s ease-in-out infinite;
	top: 40vh;
    left: 40%;
	

}

/* .x2 {
    -webkit-animation: animateBubble 2.0s linear infinite, sideWays 4s ease-in-out infinite alternate;
	-moz-animation: animateBubble 2.0s linear infinite, sideWays 4s ease-in-out infinite alternate;
	animation: animateBubble 2.0s linear infinite, sideWays 4s ease-in-out infinite alternate;
	
	left: 5%;
	top: 80%;
	
	-webkit-transform: scale(0.4);
	-moz-transform: scale(0.4);
	transform: scale(0.4);
}

.x3 {
    -webkit-animation: animateBubble 2.8s linear infinite, sideWays 2s ease-in-out infinite alternate;
	-moz-animation: animateBubble 2.8s linear infinite, sideWays 2s ease-in-out infinite alternate;
	animation: animateBubble 2.8s linear infinite, sideWays 2s ease-in-out infinite alternate;
	
	left: 10%;
	top: 40%;
	
	-webkit-transform: scale(0.7);
	-moz-transform: scale(0.7);
	transform: scale(0.7);
}

.x4 {
    -webkit-animation: animateBubble 2.2s linear infinite, sideWays 3s ease-in-out infinite alternate;
	-moz-animation: animateBubble 2.2s linear infinite, sideWays 3s ease-in-out infinite alternate;
	animation: animateBubble 2.2s linear infinite, sideWays 3s ease-in-out infinite alternate;
	
	left: 20%;
	top: 0;
	
	-webkit-transform: scale(0.3);
	-moz-transform: scale(0.3);
	transform: scale(0.3);
} */



/* OBJECTS */

.bubble {
    -webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	
    -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	-moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2), inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
	
    height: 100px;
	position: absolute;
	width: 100px;
}

.bubble:after {
    background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 70%); /* FF3.6+ */
    background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,0.5)), color-stop(70%,rgba(255,255,255,0))); /* Chrome,Safari4+ */
    background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Chrome10+,Safari5.1+ */
    background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* Opera 12+ */
    background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* IE10+ */
    background: radial-gradient(ellipse at center,  rgba(255,255,255,0.5) 0%,rgba(255,255,255,0) 70%); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	
    -webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	-moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
	
	content: "";
    height: 18px;
	left: -10px;
	position: absolute;
	width: 18px;
}
`;

export default LoadingScreen

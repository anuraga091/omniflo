import React from 'react';
import styled from '@emotion/styled';

const LoadingScreen = () => {
  return (
    <StyleDiv className='loading'>
        <div className='logo'></div>
        <div className='dots animate'>
            <div className='dot '></div>
            <div className='dot '></div>
            <div className='dot '></div>
            <div className='dot '></div>
            <div className='dot '></div>
        </div>
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

.loading {
  width: 100%;
  height: 100%;

    
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0) rotate(0deg);
    
    .logo {
    background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png");
    background-repeat: no-repeat;
    background-position: center;
    width: 180px;
    height: 100%;
    }



    .dots, .animate{
        .dot {
        -webkit-animation: loading-block 3.5s ease-in-out infinite;
        animation: loading-block 3.5s ease-in-out infinite;

        :after {
        -webkit-animation: loading-dot 3.5s ease-in-out infinite;
          animation: loading-dot 3.5s ease-in-out infinite;
        }
        }
    }

    .dots{
        .dot {
        width: 300px;
        height: 300px;

        :after {
            content: "";
            display: inline-block;
            width: 60px;
            height: 60px;
            background-color: #fff;
            border-radius: 50%;
            position: absolute;
            transform: scale(0.17);
        }

        :nth-of-type(1) {
            top: 120px;
            left: -209px;
            -webkit-animation-delay: 0s;
                    animation-delay: 0s;

            :after {
                transform-origin: top right;
                top: 0;
                right: 0;
                -webkit-animation-delay: 0s;
                        animation-delay: 0s;
            }
        }

        :nth-of-type(2) {
            top: -161px;
            left: -194px;
            -webkit-animation-delay: 0.25s;
                    animation-delay: 0.25s;

            :after {
                transform-origin: bottom right;
                bottom: 0;
                right: 0;
                -webkit-animation-delay: 0.25s;
                        animation-delay: 0.25s;
            }
        }

        :nth-of-type(3) {
            top: -161px;
            left: -101px;
            -webkit-animation-delay: 0.5s;
                    animation-delay: 0.5s;

            :after {
                transform-origin: bottom right;
                bottom: 0;
                right: 0;
                -webkit-animation-delay: 0.5s;
                        animation-delay: 0.5s;
            }
        }

        :nth-of-type(4) {
            top: 116px;
            left: 200px;
            -webkit-animation-delay: 0.75s;
                    animation-delay: 0.75s;

            :after {
                transform-origin: top left;
                top: 0;
                left: 0;
                -webkit-animation-delay: 0.75s;
                        animation-delay: 0.75s;
            }
        }

        :nth-of-type(5) {
            top: -161px;
            left: 214px;
            -webkit-animation-delay: 1s;
                    animation-delay: 1s;

            :after {
                transform-origin: bottom left;
                bottom: 0;
                left: 0;
                -webkit-animation-delay: 1s;
                        animation-delay: 1s;
            }
        }
        }
    }
}


@-webkit-keyframes loading-block {
  71.4285714286%, 100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
}

@keyframes loading-block {
  71.4285714286%, 100% {
    transform: translate3d(-50%, -50%, 0) rotate(360deg);
  }
}
@-webkit-keyframes loading-dot {
  0%, 71.4285714286%, 100% {
    transform: scale(0.17);
  }
  35.7142857143% {
    transform: scale(1);
  }
}
@keyframes loading-dot {
  0%, 71.4285714286%, 100% {
    transform: scale(0.17);
  }
  35.7142857143% {
    transform: scale(1);
  }
}
@-webkit-keyframes gradient {
  50% {
    background-position: 100% 0%;
  }
}
@keyframes gradient {
  50% {
    background-position: 100% 0%;
  }
}
`;

export default LoadingScreen

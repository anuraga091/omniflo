import React from 'react';
import { styled } from '@mui/material';
import { useParams } from 'react-router-dom';

const Usp = ({data}) => {
  const brand = useParams();
  return (
    <StyleDivElement>
        
        <div className="story">
            <div className='heading'>
            <img className='image1' src={data.brandLogo} alt={data.alt}/>
            <div>
                <h4>STORY OF</h4> 
                <p>{brand.brandName}</p>
            </div>
            </div>

            <div className='body'>
            <img className='image2' src={data.uspLogo} alt="Virat Kohli"/>
            <p>{data.story}</p>
            </div>
            <div className="logos">
                
                  {
                    data && data.icons ?
                    <div className="icon">
                      <img className='logo' src={data.icons[0]} alt=""/>
                      <img className='logo' src={data.icons[1]} alt=""/>
                      <img  className='logo' src={data.icons[2]} alt=""/>
                    </div>
                    :
                    ''
                  }
                
                
                <div className="icon-text">
                <p className='logo-text'>No Gut Health</p>
                <p className='logo-text'>No Bitterness</p>
                <p className='logo-text'>Rich Aroma</p>
                </div> 
            </div>
        </div>
    
    </StyleDivElement>
  )
}

const StyleDivElement = styled('div')`
    .story{
    box-sizing: border-box;
    background: linear-gradient(180deg, rgba(58, 58, 58, 0.7) 5.22%, rgba(72, 72, 72, 0.4) 94.94%);
    backdrop-filter: blur(12px);
    border-radius: 5px;
    margin:  20px;
    padding: 20px 0px;
    border: 1px solid  rgba(255, 255, 255, 0.2);

    .heading{
      display: flex;
      color: rgba(255, 255, 255, 0.6);
      padding: 10px 20px;
      .image1{
        width: 50px;
        height: 50px;
        border-radius: 2px;
        margin-right: 10px;
       
      }
      h4{
        margin-bottom: 0;
        font-size: 24px;
        font-weight: 700;
      }
      p{
        font-size: 13px;
        text-transform: uppercase;
        margin-bottom: 0;
        letter-spacing: 19%;
      }
    }
    
    .body{
      display: flex;
      justify-content: space-evenly;
      margin-top: 20px;
      .image2{
        width: 150px;
        height: 150px;
        border-radius: 0;
        margin: 10px ;
      }
      p{
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
        margin-right: 5px;
      }
    }
    .logos{
      box-sizing: border-box;
      border: 1px solid #ADADAD;
      border-radius: 8px;
      margin: 10px 20px;
      padding: 20px 10px;
    }
    .icon{
      display: flex;
      text-align: center;
      justify-content: space-around;
      
    }
    .logo{
      width: 30px;
      height: 26px;
      margin: 0px 20px;
      
    }
    .icon-text{
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    .logo-text{
      font-size: 11px;
      margin: 0 5px;
      color:  rgba(173, 173, 173, 1);
      

    }
    
  }

`;

export default Usp
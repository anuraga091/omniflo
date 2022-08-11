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
            <div style={{marginTop: 5, marginLeft: 5}}>
                <h4>STORY OF</h4> 
                <p>{brand.brandName}</p>
            </div>
            </div>

            <div className='body'>
            <img className='image2' src={data.descriptionImage} alt="description" type="text/html"/>
            <p>{decodeURIComponent(data.story)}</p>
            </div>
             {
              data && data.icons ?
              <div className="logos"> 
              {data.icons.map((icon , index) => (
                <div className="icon" key={index}>
                    <img className='logo' src={icon.url} alt=""/>
                    <p className='logo-text'>{icon.name}</p>
                </div>
              ))}     
              </div>
             :
            ''
            }
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
        width: 100px;
        height: 100%;
        border-radius: 0;
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
      
      margin: 20px;
      
      .image2{
        width: 80%;
        height: 200px;
        border-radius: 0;
        margin-bottom: 10px;
      }
      p{
        font-size: 14px;
        color: rgba(255, 255, 255, 0.6);
        margin-right: 5px;
      }
    }
    .logos{
      display: flex;
      text-align: center;
      justify-content: space-around;
      align-items: center;
      box-sizing: border-box;
      border: 1px solid #ADADAD;
      border-radius: 8px;
      margin: 10px 20px;
      padding: 20px 10px;
    }
    
    .logo{
      width: 30px;
      height: 30px;
      
      
    }
    .icon-text{
      display: flex;
      align-items: center;
      text-align: center;
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
import React from 'react';
import { styled } from '@mui/material';
import { useParams } from 'react-router-dom';

const Usp = ({data}) => {
  //getting brand name from the URL
  const brand = useParams();

  // const Story = decodeURIComponent(data.story).replace('.',`${<br/>}`);
  // $search = array('.', ':'); $replace = array('.<br /><br />', ''); echo $longDesc = str_replace($search, $replace, $desc); 
  // function makeStory(){
      const Story = decodeURIComponent(data.story);
      let newStory = Story.split('.').map(str => <p>{str}</p>)
      // console.log(newStory);
  //     console.log(newStory);
  //     return newStory;
  // }
  // const Story = decodeURIComponent(data.story);
  // const newStory = Story.split('.').map(str => <p>str</p>);
  // console.log(newStory);

  return (
    //rendering usp component
    <StyleDivElement>
        
        <div className="story">
            {/* <div className='heading'>
              <img className='image1' src={data.brandLogo} alt={data.alt}/>
              <div style={{marginTop: 5, marginLeft: 5}} className='story-of-container'>
                  <h4>STORY OF</h4> 
                  <p className='BrandName'>{brand.brandName}</p>
              </div>
            </div> */}

            {/* <div className='body'>
              <img className='image2' src={data.descriptionImage} alt="description" type="text/html"/>
              <h5>Our Story</h5> */}
              {/* <p>{decodeURIComponent(data.story).replace('.',`${<br/>}`)}</p> */}
              {/* <p>{decodeURIComponent(data.story)}</p> */}
              {/* <p>{Story.replaceAll('.',`${<br/>}`)}</p> */}
              {/* <p>{Story.replaceAll('.',".\n")}</p> */}
              {/* <p>{Story.split('.').map(str => <p><br/>{str}</p>)}</p> */}
              {/* <p>{Story.split('.').map(str => <p>{str}.</p>)}</p> */}
              {/* <p>{Story.split('!').map(str => <p>{str}.</p>)}</p> */}
            {/* </div> */}


             {
              data && data.icons ?
                <div className='body'>
                  <img className='image2' src={data.descriptionImage} alt="description" type="text/html"/>
                  <h6>Our Story</h6>
                  <div>{Story.split('.').map(str => <p>{str}.</p>)}</div>
                </div>             
              :
              ''
              }
             {/* {
              data && data.icons ?
              <div className="logos"> 
              {data.icons.map((icon , index) => (
                <div className="icon" key={index}>
                    <img className={`logo class-logo-${index}`} src={icon.url} alt=""/>
                    <p className={`logo-text class-logo-text-${index}`}>{icon.name}</p>
                </div>
              ))}     
              </div>
             :
            ''
            } */}
        </div>
    
    </StyleDivElement>
  )
}

const StyleDivElement = styled('div')`
    .story{
   
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
        ${'' /* margin-right: 10px; */}
       
      }
      ${'' /* .story-of-container{
        margin-left: 15px;
      } */}
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
      
      ${'' /* margin: 15px; */}
      padding: 10px;
      padding-top: 0;
      margin-top: 10px;
      
      .image2{
        ${'' /* width: 79vw; */}\
        display: block;
        width: 94%;
        margin: auto;
        height: 220px;
        border: 2px solid grey;
        padding: 2px 3px;
        border-radius: 5px;
        ${'' /* margin-bottom: 10px; */}
      }
      h6{
        color: rgba(255, 255, 255, 0.6);
        padding-left: 9px;
        margin-top: 0.8rem;
        ${'' /* margin: 17px 5px;
        font-weight: bold;  */}
      }
      p{
        padding-left: 5px;
        font-size: 11px;
        color: rgba(255, 255, 255, 0.6);
        margin-right: 5px;
        ${'' /* text-align: justify; */}
        ${'' /* text-indent:10px; */}
      }
    }
    .logos{
      display: flex;
      text-align: center;
      justify-content: space-evenly;
      align-items: center;
      box-sizing: border-box;
      border: 1px solid #ADADAD;
      border-radius: 8px;
      margin: 10px 20px;
      padding: 15px 10px;
    }
    .icon{
      width: 100px;
      height: 90px;
    }
    
    .logo{
      max-width: 60px;
      max-height: 60px;     
      
    }
    .class-logo-2{
      max-width: 55px;
      max-height: 53px;
    }
    .icon-text{
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: space-around;
    }
    .logo-text{
      font-size: 12px;
      margin: 0 5px;
      color:  rgba(173, 173, 173, 1);
      

    }
    .class-logo-text-0,.class-logo-text-1{
      font-size: 13px;
      margin: 0 5px;
      color:  rgba(173, 173, 173, 1);
    }
    
  }

`;

export default Usp
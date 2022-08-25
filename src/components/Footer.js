import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { styled} from '@mui/material';

const Footer = () => {
  return (
    //rendering footer component
    <StyleDivElement>
        <footer>
            <div className='footer'>
            <img src="/images/spotlight logo.jpg" alt="spotlight logo"/>
            <p>Spotlight is The Coolest Retail Shelf that brings premium online brands near you!</p>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}} className="MUIIcon">
            <a href="https://www.instagram.com/omniflo.in/"><InstagramIcon /></a>
            <a href="https://twitter.com/Omniflo_in"><TwitterIcon/></a>
            </div>
            
            <hr/>
            <p> &copy; 2022 Spotlight</p>
        </footer>
    </StyleDivElement>
  )
}

const StyleDivElement = styled('div')`
    footer{
    padding: 20px 40px;
    background-color: rgba(43, 43, 43, 1);
    .footer{
      display: flex;
      margin-bottom: 10px;
      img{
        width: 30px;
        height: 30px;
        margin-right: 10px;
        border-radius: 50%;
      }

      p{
        color: rgba(173, 173, 173, 1);
        font-size: 11px;
        text-align: unset;
        margin: 0;
      }
    }
    hr{
      border: 0.8px solid #383838;
    }
    p{
      font-size: 11px;
      color: rgba(153, 153, 153, 1);
      margin: 5px;
      text-align: center;
    }
    svg{
      font-size: 20px;
      text-align: center;
      align-items: center;
      margin: 10px;
      color: rgba(153, 153, 153, 1);
    }
  }
`;

export default Footer
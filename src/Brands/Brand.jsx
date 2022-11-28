import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { styled } from "@mui/material";
import axios from "axios";
import { MainButton } from "../components/MainButton";

//importing components
import Header from "../components/Header";
import SpotlightXBrand from "../components/SpotlightXBrand";
import ButtonCard from "../components/ButtonCard";
import Usp from "../components/Usp";
import Footer from "../components/Footer";
import { Carousal } from "../components/Carousal";

const Brand = (props) => {
  //Getting brand name from the URL and updating the API URL
  const brand = useParams();
  const brandDetailURL = `https://api.omniflo.in/getbranddata?brandname=${brand.brandName}`;

  //fetching data and consuming in brands page
  useEffect(() => {
    axios.get(`${brandDetailURL}`).then((resp) => {
      props.brandName(resp.data);
      console.log(resp.data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    //Rendering the Brand Page
    <div style={{ backgroundColor: "#171717" }}>
      <Header />
      <StyleDivElement>
        <SpotlightXBrand data={props.data} />
        <hr />
        <MainButton data={props.data} />
        {/* <ButtonCard data={props.data}/> */}
        <Carousal data={props.data} />
        {/* <Usp data={props.data}/> */}
        <Footer />
      </StyleDivElement>
    </div>
  );
};

const StyleDivElement = styled("div")`
  margin-top: 0;

  hr {
    width: 50%;
    height: 0px;
    margin: auto;

    background: rgba(217, 217, 217, 0.6);
    opacity: 0.2;
    border: 1px solid #adadad;
    margin-bottom: 20px;
    margin-top: 5px;
    text-align: center;
  }
`;

export default Brand;

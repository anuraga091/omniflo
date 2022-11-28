//importing dependencies
import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import axios from "axios";

//importing components
import Header from "../../../components/Header";
import SpotlightXBrand from "../../../components/SpotlightXBrand";
import StoreNotFoundCard from "../../../components/StoreNotFoundCard";
import Usp from "../../../components/Usp";
import Footer from "../../../components/Footer";
import { Carousal } from "../../../components/Carousal";

const StoreNotFound = (props) => {
  const brand = useParams();
  const brandDetailURL = `https://api.omniflo.in/getbranddata?brandname=${brand.brandName}`;

  useEffect(() => {
    //using get request to consume the data from api
    axios.get(`${brandDetailURL}`).then((resp) => {
      props.brandName(resp.data);
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    //rendering brand stores not found page
    <div style={{ backgroundColor: "#171717" }}>
      <Header />
      <StyleDivElement>
        <SpotlightXBrand data={props.data} />
        <hr className="hr1" />
        <StoreNotFoundCard data={props.data} />
        {/* <Usp data={props.data}/> */}
        <Carousal />
        <Footer />
      </StyleDivElement>
    </div>
  );
};

const StyleDivElement = styled("div")`
  .hr1 {
    width: 50%;
    height: 0px;
    margin: auto;
    background: rgba(217, 217, 217, 0.6);
    opacity: 0.2;
    border: 1px solid #adadad;
  }
`;

export default StoreNotFound;

import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Card } from "@mui/material";
import Brand from "./Brands/Brand";
// import PrivateRoute from './components/PrivateRoute';
import BrandStores from "./conditions/iflocationallow/brandsStore/BrandStores";
import LocationDenyPage from "./conditions/iflocationdeny/LocationDenyPage";
import StoreNotFound from "./conditions/iflocationallow/brandsStoreNotFound/StoreNotFound";
import lottie from "lottie-web";
// import myAnimation from "./Loading/LoadingAnimation.json";
// import "./Loading/LoadingAnimation.json";

function App() {
  const [data, setData] = useState({});
  // const container = useRef();

  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.getElementById("container"),
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: require("./Loading/LoadingAnimation.json"),
  //   });
  // }, []);
  return (
    <Card sx={{ maxWidth: 500, margin: "0 auto", color: "#fff" }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/:brandName"
            element={<Brand data={data} brandName={setData} />}
          ></Route>
          {/* <Route element={<PrivateRoute/>}> */}
          <Route
            path={encodeURI(`:brandName/Stores`)}
            element={<BrandStores data={data} brandName={setData} />}
          ></Route>
          <Route
            path={encodeURI(`:brandName/Location denied`)}
            element={<LocationDenyPage data={data} brandName={setData} />}
          ></Route>
          <Route
            path={encodeURI(`:brandName/Store Not Found`)}
            element={<StoreNotFound data={data} brandName={setData} />}
          ></Route>
          {/* </Route> */}
        </Routes>
      </Router>
      {/* <div className="container" id="container" ref={container}></div> */}
    </Card>
  );
}

export default App;

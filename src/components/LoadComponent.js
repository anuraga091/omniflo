import React, { useState, useEffect } from "react";
import lottie from "lottie-web";

export const LoadComponent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("container"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Loading/LoadingAnimation.json"),
    });
  }, []);
  return <div className="h-[100vh]" id="container"></div>;
};

import React, { useState, useEffect } from "react";
import lottie from "lottie-web";

export const ButtonAnimationComponent = ({ text }) => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById("button"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../Loading/ButtonAnimation.json"),
    });
    // return ( => instance.destroy();
  }, []);
  return (
    <button className="button top-0 left-0" id="button">
      hvdkgcfu
    </button>
  );
};
// return () => instance.destroy();

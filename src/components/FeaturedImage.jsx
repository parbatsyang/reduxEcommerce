import React from "react";
import FeatureImage from "../assets/shoppingwomen.jpg";

const FeaturedImage = () => {
  return (
    <div className="md:h-[400px] bg-sky-100">
      <div className="w-screen max-w-[1320px] mx-auto">
        <img src={FeatureImage} className="h-[300px] md:h-[400px] w-full" />
      </div>
    </div>
  );
};

export default FeaturedImage;

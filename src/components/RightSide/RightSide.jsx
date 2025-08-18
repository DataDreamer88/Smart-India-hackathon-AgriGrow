import React from "react";
import CustomerReview from "../CustomerReview/CustomerReview";
import Updates from "../Updates/Updates";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="RightSide">
      <div className="gap">
        <h2>Latest News</h2>
        <Updates />
      </div>
      <div className="size"> 
        <h2>Market Analysis</h2>
        <CustomerReview />
      </div>
    </div>
  );
};

export default RightSide;

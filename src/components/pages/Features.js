import React from "react";
import "../../App.css";
import FeatureItems from "../FeatureItems";

export default function Features() {
  return (
    <>
      <h1 className="features">Features</h1>
      <div className="main">
        <div className="content">
          <FeatureItems />
        </div>
      </div>
    </>
  );
}

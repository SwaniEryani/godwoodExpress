import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../Cards";

import React from "react";
import OpeningHours from "../OpeningHours";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OpeningHours />
      <Cards />
    </>
  );
}

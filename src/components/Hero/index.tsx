import React from "react";
import './hero.css';

interface HeroProps {
  title?: string;
  subtext?: string;
}

const Hero = ({ title, subtext }: HeroProps) => {

  return (
    <div className="hero">
      <h1><span>Welcome to the Cock fight Club</span><br />6666 Erect Fighters</h1>
      <div className="mouse">
        <span></span>
      </div>
    </div>
  )
}

export default Hero
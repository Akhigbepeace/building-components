import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroSection = () => {
  const slideImage = "/assets/window.jpg";
  return (
    <Carousel>
      <div>
        <div className="w-full relative h-[400px]">
          <Image src={slideImage} alt="image-1" fill />
        </div>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <div className="w-full relative h-[400px]">
          <Image src={slideImage} alt="image-1" fill />
        </div>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <div className="w-full relative h-[400px]">
          <Image src={slideImage} alt="image-1" fill />
        </div>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default HeroSection;

import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type CarouselData = {
  imageURL: string;
  heading: string;
  desc: string;
};

const HeroSection = () => {
  const window = "/assets/hero-window.jpg";
  const stairRail = "/assets/hero-stair-rail.png";
  const roof = "/assets/roof.png";
  const door = "/assets/door.png";

  const carouselData: CarouselData[] = [
    {
      imageURL: window,
      heading: "Aluminium Windows",
      desc: "Highly energy-efficient, helping to reduce your heating and cooling costs",
    },
    {
      imageURL: roof,
      heading: "Roofing Designs",
      desc: "Highly energy-efficient, helping to reduce your heating and cooling costs",
    },
    {
      imageURL: door,
      heading: "Aluminium Doors",
      desc: "Highly energy-efficient, helping to reduce your heating and cooling costs",
    },
    {
      imageURL: stairRail,
      heading: "Aluminium Stair Railings",
      desc: "Highly energy-efficient, helping to reduce your heating and cooling costs",
    },
  ];
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      interval={4000}
      stopOnHover={true}
      showStatus={false}
      showThumbs={true}
    >
      {carouselData.map((data, index) => {
        return (
          <div key={index} className="relative">
            <div className="w-full relative h-[500px]">
              <Image
                src={data.imageURL}
                alt="image-1"
                fill
                className="object-cover"
              />
            </div>
            <div className="carousel-text flex flex-col items-center justify-center text-center px-5">
              <h1 className="lg:text-[50px] text-[30px] font-[800]">
                {data.heading}
              </h1>
              <p className="lg:text-[20px] text-[18px]">
                Highly energy-efficient, helping to reduce your heating and
                cooling costs
              </p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default HeroSection;

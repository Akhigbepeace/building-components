import Image from "next/image";
import React from "react";

type CardProps = {
  imageURL: string;
  heading: string;
  desc: string;
};

const Card = (props: CardProps) => {
  const { imageURL, heading, desc } = props;

  return (
    <div className="flex flex-col xl:w-[450px] md:w-[400px] w-[360px] rounded-md">
      <div className="relative xl:w-[450px] bg-[rgba(0,0,0,0.7)] w-[360px] lg:w-[400px] xl:h-[370px] h-[290px]">
        <Image
          src={imageURL}
          alt="image"
          fill
          objectFit="contain"
          className="opacity-70"
        />
      </div>
      <div className="bg-slate-900 p-5 text-white">
        <h2 className="text-[20px] font-[700]">{heading}</h2>
        <p className="truncate">{desc}</p>
      </div>
    </div>
  );
};

export default Card;

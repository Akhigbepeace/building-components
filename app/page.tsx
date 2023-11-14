"use client";

import Link from "next/link";
import React, { useState, ReactNode } from "react";
import HeroSection from "./components/layouts/hero-section";
import Image from "next/image";
import Roofing from "./components/layouts/roofing";
import AluminiumDoors from "./components/layouts/aluminum-doors";
import Railings from "./components/layouts/railings";
import AluminiumWindows from "./components/layouts/aluminum-windows";

type Content = {
  imageURL: string;
  title: string;
  description: string;
  href: string;
};

type Section = {
  title: string;
  content: ReactNode;
};

const sections: Section[] = [
  {
    title: "Roofing",
    content: <Roofing />,
  },
  {
    title: "Aluminium Doors",
    content: <AluminiumDoors />,
  },
  {
    title: "Railings",
    content: <Railings />,
  },
  {
    title: "Aluminium Windows",
    content: <AluminiumWindows />,
  },
];

export default function Home() {
  const aluminiumWindow = "/assets/window.jpg";

  const [currentSection, setCurrentSection] = useState<Section>(sections[0]);

  const contents: Content[] = [
    {
      imageURL: aluminiumWindow,
      title: "Aluminium Window",
      href: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, fugiat?",
    },
    {
      imageURL: aluminiumWindow,
      title: "Aluminium Window",
      href: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, fugiat?",
    },
    {
      imageURL: aluminiumWindow,
      title: "Aluminium Window",
      href: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, fugiat?",
    },
    {
      imageURL: aluminiumWindow,
      title: "Aluminium Window",
      href: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, fugiat?",
    },
    {
      imageURL: aluminiumWindow,
      title: "Aluminium Window",
      href: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, fugiat?",
    },
    {
      imageURL: aluminiumWindow,
      title: "Aluminium Window",
      href: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, fugiat?",
    },
    {
      imageURL: aluminiumWindow,
      title: "Aluminium Window",
      href: "",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, fugiat?",
    },
  ];

  const handleSectionChange = (section: Section) => {
    setCurrentSection(section);
  };

  return (
    <div>
      <HeroSection />

      <div className="  px-[80px] flex items-center justify-between bg-slate-400">
        {sections.map((section, index) => {
          return (
            <>
              <button
                key={index}
                className={`hover:bg-slate-500 transition-all w-full py-[30px]  text-center ${
                  currentSection === section && "text-white  bg-slate-800"
                }`}
                onClick={() => handleSectionChange(section)}
              >
                {section.title}
              </button>
            </>
          );
        })}
      </div>

      <div className="flex flex-row flex-wrap justify-center gap-3 mt-3">
        {contents.map((item, index) => {
          return (
            <Link 
              href=""
              key={index}
              className="flex flex-col w-[400px] rounded-md"
            >
              <div className="bg-[rgba(0,0,0,0.8)] ">
                <Image
                  src={item.imageURL}
                  alt="image"
                  width={400}
                  height={400}
                  objectFit="contain"
                  className="bg-[rgba(0,0,0,0.8)]"
                />
              </div>
              <div className="bg-slate-900 p-5 text-white">
                <h2 className="text-[20px] font-[700]">{item.title}</h2>
                <p className="truncate">{item.description}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

"use client";

import React, { useState, ReactNode } from "react";
import HeroSection from "./components/layouts/hero-section";
import Roofing from "./components/layouts/roofing";
import AluminiumDoors from "./components/layouts/aluminum-doors";
import Railings from "./components/layouts/railings";
import AluminiumWindows from "./components/layouts/aluminum-windows";

export type Content = {
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

      <div className="lg:px-[80px] flex items-center justify-between bg-slate-400 mt-[-40px]">
        {sections.map((section, index) => {
          return (
            <>
              <button
                key={index}
                className={`hover:bg-slate-500 transition-all w-full py-[30px] xl:text-[20px] text-[14px] text-center ${
                  currentSection === section &&
                  "text-white bg-slate-800 hover:text-white  hover:bg-slate-800"
                }`}
                onClick={() => handleSectionChange(section)}
              >
                {section.title}
              </button>
            </>
          );
        })}
      </div>

      {currentSection.content}
    </div>
  );
}

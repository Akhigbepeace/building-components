import { Content } from "@/app/page";
import React from "react";
import Card from "../molecules/card";

const AluminiumWindows = () => {
  const aluminiumWindow = "/assets/window.jpg";

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

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4 my-3">
      {contents.map((item, index) => {
        return (
          <Card
            key={index}
            imageURL={item.imageURL}
            heading={item.title}
            desc={item.description}
          />
        );
      })}
    </div>
  );
};

export default AluminiumWindows;

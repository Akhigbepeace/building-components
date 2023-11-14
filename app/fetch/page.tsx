"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [data, setData] = useState({
    icon_url: "",
  });

  useEffect(() => {
    const initPage = async () => {
      // Get Request
      const getData = await fetch("https://api.chucknorris.io/jokes/random");

      // Post Request
      const createData = await fetch(
        "https://api.chucknorris.io/jokes/random",
        {
          mode: "cors",
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      // Put Request

      const updateData = await fetch(
        `https://api.chucknorris.io/jokes/random/`,
        {
          method: "PUT",
          body: JSON.stringify(data),
        }
      );
      const res = await getData.json();

      if (res) setData(res);
    };

    initPage();
  }, []);

  const navLinks = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "About",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
    {
      title: "Resume",
      href: "#",
    },
  ];

  return (
    <div>
      {data?.icon_url}

      {navLinks.map((link, index) => {
        return (
          <Link key={index} href={link.href}>
            {link.title}
          </Link>
        );
      })}
    </div>
  );
};

export default FetchAPI;

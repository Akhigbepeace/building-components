import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between sticky top-0 w-full bg-slate-300 p-[20px_80px]">
      <Link
        href="/"
        className="w-[100px] h-[100px]  rounded-full bg-gray-500 text-center"
      >
        Logo
      </Link>
      <div className="flex gap-[40px] items-center justify-center">
        <Link href="/about" className="p-[20px_40px] bg-slate-500 rounded-lg">
          About Us
        </Link>
        <Link href="/contact" className="p-[20px_40px] bg-slate-500 rounded-lg">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

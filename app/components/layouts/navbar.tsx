import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between sticky top-0 w-full z-50 bg-slate-300 p-[10px_80px]">
      <Link
        href="/"
        className="w-[70px] h-[70px]  rounded-full bg-gray-500 text-center"
      >
        Logo
      </Link>
      {/* <div className="flex gap-[40px] items-center justify-center">
        <Link href="/about" className="p-[10px_40px] bg-slate-500 rounded-lg">
          About Us
        </Link>
        <Link href="/contact" className="p-[10px_40px] bg-slate-500 rounded-lg">
          Contact
        </Link>
      </div> */}
    </div>
  );
};

export default Navbar;

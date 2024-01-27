import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <div className="p-4 flex justify-between items-center bg-stone-700">
      <Link href="/">
        <h1 className="text-2xl font-bold">FUPRE AI</h1>
      </Link>
    </div>
  );
}

export default NavBar;

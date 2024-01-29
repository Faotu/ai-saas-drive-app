"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const routes = [
  {
    name: "chat",
    path: "/",
  },
  {
    name: "Profile",
    path: "/profile",
  },
];

function NavBar() {
  const pathname = usePathname();
  return (
    <div className="p-4 flex justify-between items-center bg-black text-white">
      <Link href="/">
        <h1 className="text-2xl font-bold">FUPRE AI</h1>
      </Link>
      <div className="flex gap-x-6 text-lg items-center">
        {routes.map((route, id) => (
          <Link
            key={id}
            href={route.path}
            className={
              pathname === route.path ? "border-b-2 border-yellow-500" : ""
            }
          >
            {route.name}
          </Link>
        ))}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default NavBar;

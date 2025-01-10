"use client";

import { Suspense } from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="flex dark:bg-gray-600 bg-amber-100 lg:text-lg p-4 justify-center gap-4">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
};
export default Navbar;

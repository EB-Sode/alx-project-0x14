import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-black text-white py-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">
          <Link href="/">ALX Movie App</Link>
        </h1>
        <div className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/movies">Movies</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

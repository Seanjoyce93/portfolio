import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-screen flex flex-row justify-between items-center bg-slate-600 text-white p-3">
      <Link href="/">SeanJoyce.Dev</Link>
      <div className="flex flex-row gap-2">
        <Link href="/projects" className="bg-slate-800 p-2 rounded">
          Projects
        </Link>
        <Link href="/experience" className="bg-slate-800 p-2 rounded">
          Experience
        </Link>
      </div>
    </nav>
  );
}

"use client";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import useScroll from "@/lib/hooks/use-scroll";
import {
  BookIcon,
  ContactIcon,
  InfoIcon,
  LayoutDashboard,
} from "lucide-react";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <div
      className={`fixed top-0 flex w-full justify-center ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
        <Link href="/" className="flex items-center font-display text-2xl">
          <Image
            src="/logo.png"
            alt="CollegiateIQ logo"
            width={30}
            height={30}
            className="mr-2 rounded-sm"
          />
          <p>SNR Labs</p>
        </Link>

        <div className="flex gap-6 items-center">
          <Link
            href="/about"
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-500 hover:text-white"
          >
            <InfoIcon className="h-4 w-4" />
            About
          </Link>
          <Link
            href="/projects"
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-500 hover:text-white"
          >
            <LayoutDashboard className="h-4 w-4" />
            Projects
          </Link>

          <Link
            href="/blogs"
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-500 hover:text-white"
          >
            <BookIcon className="h-4 w-4" />
            Blogs
          </Link>
          
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-500 hover:text-white"
          >
            <ContactIcon className="h-4 w-4" />
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

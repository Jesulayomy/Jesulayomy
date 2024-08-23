"use client";

import Image from "next/image";
import Link from 'next/link';
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";


export default function NotFound() {
  const MotionLink = motion(Link);

  return (
    <div className="flex flex-col items-center text-center justify-center p-24">
      <p className='py-10'>I&apos;m Pretty sure you&apos;re lost, Zoro.</p>
      <MotionLink
        href="/"
        className="
        p-2 min-w-24 rounded-full
        border-b-4 border
        border-slate-500/50
        hover:bg-white hover:text-black
        hover:border-none hover:scale-110
        transition-all duration-300
        "
      >
        Home
      </MotionLink>
    </div>
  );
}

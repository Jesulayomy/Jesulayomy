"use client";

import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  useMotionValue,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";


export default function NavBar() {
  const data = [
    {
      title: "Career",
      link: "/career",
    },
    {
      title: "Projects",
      link: "/projects",
    },
    {
      title: "Contact",
      link: "/contact",
    }
  ]
  const pathname = usePathname();
  const MotionLink = motion(Link);
  const [showNav, setShowNav] = useState(false);
  const [hidden, setHidden] = useState(false);

  const mapRange = (
    inputLower: number,
    inputUpper: number,
    outputLower: number,
    outputUpper: number
  ) => {
    const INPUT_RANGE = inputUpper - inputLower;
    const OUTPUT_RANGE = outputUpper - outputLower;

    return (value: number) =>
      outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
  };
  const setTransform = (
    item: HTMLElement & EventTarget,
    event: React.PointerEvent,
    x: MotionValue,
    y: MotionValue
  ) => {
    const bounds = item.getBoundingClientRect();
    const relativeX = event.clientX - bounds.left;
    const relativeY = event.clientY - bounds.top;
    const xRange = mapRange(0, bounds.width, -1, 1)(relativeX);
    const yRange = mapRange(0, bounds.height, -1, 1)(relativeY);
    x.set(xRange * 10);
    y.set(yRange * 10);
  };

  return (
    <motion.nav
      className='fixed text-xs sm:text-base lg:text-xl inset-0 top-4 w-[95%] sm:w-[90%] mx-auto bg-secondary/60 font-medium flex max-sm:justify-between gap-4 px-3 z-50 max-w-7xl items-center rounded-full font-mono h-14 p-5 overflow-hidden backdrop-blur-lg hover:border-solid hover:border hover:border-white/10 '
      variants={{
        long: { maxWidth: 1216, scale: 1 },
        short: { maxWidth: 128 },
        hideNav: {
          height: 56,
          borderRadius: 50,

          alignItems: "center",
          transition: { delay: 0, duration: 0.3 },
        },
        showNav: {
          height: 200,
          borderRadius: 22,
          alignItems: "start",
          transition: { delay: 0 },
        },
      }}
      initial={"short"}
      animate={[hidden ? "short" : "long", showNav ? "showNav" : "hideNav"]}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 80,
        damping: 14,
      }}
      whileHover={{ scale: 1.01 }}
    >
      <div
        className="min-w-[40px] min-h-[40px] rounded-full gap-2 flex items-center justify-center"
        onClick={() => setShowNav(false)}
      >
        <MotionLink
          className="transition-all duration-500 ease-out"
          href="/"
        >
          <Image
            src={'/logo.png'}
            alt="Logo"
            width={40}
            height={40}
            priority
          />
        </MotionLink>
      </div>
      <motion.ul
        className={`w-full ${
          showNav
            ? "[--display-from:none] [--display-to:flex]"
            : "max-sm:[--display-from:none] sm:[--display-to:flex]"
        }  [--opacity-from:0.1] [--opacity-to:1] flex-col sm:flex-row items-center justify-center gap-10 max-sm:gap-5 max-sm:pt-0`}
        variants={{
          hidden: {
            display: "var(--display-from, none)",
            opacity: "var(--opacity-from, 1)",
            transition: { duration: 0.1, delay: 0 },
          },
          visible: {
            display: "var(--display-to, none)",
            opacity: "var(--opacity-to, 1)",
            transition: { duration: 0.6, delay: 0.2 },
          },
        }}
        initial={"hidden"}
        animate={["visible"]}
      >
        <AnimatePresence>
          {data.map((item) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const textX = useTransform(x, (latest) => latest * 0.5);
            const textY = useTransform(y, (latest) => latest * 0.5);
            return (
              <motion.li
                onPointerMove={(event) => {
                  const item = event.currentTarget;
                  setTransform(item, event, x, y);
                }}
                onPointerLeave={(event) => {
                  x.set(0);
                  y.set(0);
                }}
                style={{ x, y }}
                key={item.title}
                className={cn(
                  "hover:font-semibold",
                  pathname === item.link ? "font-semibold" : ""
                )}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowNav(false)}
              >
                <MotionLink
                  className={cn(
                    "font-medium relative rounded-full text-sm py-2.5 px-5 transition-all duration-500 ease-out hover:bg-white/50 hover:text-black",
                    pathname === item.link
                      ? "bg-slate-100 text-black font-bold"
                      : ""
                  )}
                  href={item.link}
                >
                  {" "}
                  <motion.span
                    style={{ x: textX, y: textY }}
                    className="z-10 relative"
                  >
                    {item.title}
                  </motion.span>
                  {pathname === item.link ? (
                    <motion.div
                      transition={{ type: "spring" }}
                      layoutId="underline"
                      className="absolute w-full h-full rounded-full left-0 bottom-0 bg-primary/15 text-secondary"
                    ></motion.div>
                  ) : null}
                </MotionLink>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
      <button 
        className="
        inline-flex items-center justify-center
        whitespace-nowrap text-sm font-medium
        ring-offset-background transition-colors
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-ring focus-visible:ring-offset-2
        disabled:pointer-events-none disabled:opacity-50
        hover:bg-accent hover:text-accent-foreground
        h-10 w-10 rounded-full min-w-[40px] sm:hidden"
        onClick={() => {
          setHidden(false);
          setShowNav((prev) => !prev);
        }}
      >
        {showNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            ><path d="m6 9 6 6 6-6"></path>
          </svg>
        )}
      </button>
      {/* <div>
        <Image
          src={'/logo.png'}
          alt="Logo"
          width={40}
          height={40}
        />
      </div> */}
    </motion.nav>
  );
};
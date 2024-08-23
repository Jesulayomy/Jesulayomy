"use client";

import { motion } from "framer-motion";
import Image from 'next/image';

import icons from '@/lib/icons';


export default function Footer() {
  const contacts: { [key: string]: string } = {
    "GitHub Link": "https://github.com/Jesulayomy",
    "LinkedIn Link": "https://www.linkedin.com/in/jesulayomi/",
    "Gmail Link": "mailto:jesulayomi081@gmail.com",
    "Resume": "/Aina Jesulayomi Resume.pdf",
  };
  const hoverVariants = {
    normal: {
      scale: 1,
    },
    lift: {
      scale: 1.2,
      // A semi-transparent border to make the icon pop
      border: '5px solid rgba(255, 255, 255, 0.1)',
    },
  }

  return (
    <motion.footer 
      className='
      fixed inset-x-0 bottom-3
      flex flex-row items-center justify-between
      gap-4 z-50 w-min mx-auto
      font-medium font-mono
      text-xs sm:text-base lg:text-xl
      bg-secondary/60 rounded-full
      backdrop-blur-sm
      hover:border-solid hover:border hover:border-white/10
      '
      initial='normal'
      whileHover="hoverVariants"
      transition={{
        duration: 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <div className='w-max h-[48px] p-1 px-1.5 flex items-center gap-4 rounded-full border border-1'>
        {Object.entries(contacts).map(([contact, url], index) => (
          <motion.div
            className='aspect-square cursor-pointer items-center justify-center rounded-full hover:bg-neutral-400/40 flex'
            variants={hoverVariants}
            whileHover={"lift"}
            key={index}
          >
            <a href={url} target='_blank' rel='noopener noreferrer'>
              <Image
                width={40}
                height={40}
                src={`${icons[contact.toLowerCase()]}`}
                alt={contact}
                className='object-contain h-[40px] w-[40px]'
              />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.footer>
  );
};
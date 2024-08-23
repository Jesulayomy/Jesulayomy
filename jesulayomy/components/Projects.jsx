"use client";
import { motion } from 'framer-motion';

import Link from 'next/link';


export default function Projects() {
  return (
    <motion.div
      className='w-[100%] sm:[w-80%] md:w-[60%] xl:w-[40%] xl:px-10 md:px-7 px-6 py-7 flex flex-col xl:gap-y-4 gap-y-2 border border-zinc-600 bg-zinc-800 rounded-2xl'
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { ease: 'linear' },
        layout: { duration: 0.1 }
      }}
    >
      <div className='flex flex-row gap-4 md:gap-10 items-center'>
        <div
          className='rounded-full w-3 h-3 bg-white'
          style={{
            animation: 'glow 2s infinite'
          }}
        ></div>
        <div className='md:text-2xl text-xl font-medium'>
          Projects
        </div>
      </div>
      <div
        className='
        flex flex-row
        justify-center
        pt-5
        '
      >
        <Link
          className='p-2 border-b-4 border border-slate-500/50 min-w-24 rounded-full hover:bg-white hover:text-black transition-all duration-300 hover:border-none hover:scale-110'
          href='/projects'
        >
          View All Projects
        </Link>
      </div>
    </motion.div>
  )
}
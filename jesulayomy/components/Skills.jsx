
"use client";

import {motion} from 'framer-motion';
import Image from 'next/image';

import icons from '@/lib/icons';
import technologies from '@/lib/technologies';


export default function Skills() {
  return (
    <motion.div
      className='w-[100%] sm:[w-90%] md:w-[80%] xl:w-[60%] xl:px-10 md:px-7 px-6 py-7 flex flex-col xl:gap-y-4 gap-y-2 border border-zinc-600 bg-zinc-800 rounded-2xl'
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
        <div className='md:text-2xl text-xl font-medium text-white'>
          Skills
        </div>
      </div>
      <div
        className='
        grid grid-cols-1
        sm:grid-cols-2 sm:gap-4
        lg:grid-cols-3
        xl:grid-cols-4
        '
      >
        {Object.keys(technologies).map((tech, index) => (
          <div key={index} className='pt-6'>
            <div key={index} className='px-2 border-b border-zinc-600 rounded-lg bg-zinc-700/25 text-white'>
              {tech}
            </div>
            <div className='flex flex-wrap gap-2 pt-2'>
              {technologies[tech].map((subTech, index) => (
                <div key={index} className='flex flex-row px-2 border border-zinc-600 rounded items-center'>
                  <Image
                    src={`${icons[subTech.toLowerCase().replaceAll(" ", "")] || icons['default']}`}
                    width={15}
                    height={15}
                    alt=""
                    // style={{ width: "auto", height: "auto" }}
                    // className='object-contain'
                  />
                  <div key={index} className='px-1 text-white'>
                    {subTech}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
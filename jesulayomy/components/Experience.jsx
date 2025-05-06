"use client";
import { motion } from 'framer-motion';

import Exp from '@/components/Exp';
import experiences from '@/lib/experiences';


export default function Experience() {

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
          Experience
        </div>
      </div>
      <div className='flex-col flex-wrap'>
        {experiences.map((exp, index) => (
          <Exp key={index} exp={exp} />
        ))}
      </div>
    </motion.div>
  )
}
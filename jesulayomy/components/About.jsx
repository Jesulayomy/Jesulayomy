"use client";

import { motion } from 'framer-motion';

import RowCircles from '@/components/RowCircles';
import { useRouter } from 'next/navigation';


export default function About() {
  const techs = [
    'Python', 'Django', 'Flask', 'Javascript', 'React', 'Next', 'Nodejs', 'MySQL', 'Amazon Web Services', 'Github', 'Github Actions', 'Postman'
  ];
  const navigate = useRouter();

  return (
    <motion.div
      className='xl:px-10 md:px-7 px-6 flex flex-col xl:gap-y-4 gap-y-2 py-7 border border-zinc-600 bg-gradient-to-b from-zinc-800 to-black rounded-2xl'
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { ease: 'linear' },
        layout: { duration: 0.1 }
      }}
    >
      <div className='md:text-2xl text-xl font-medium'>
        I&apos;m <span className='text-3xl md:text-4xl text-purple-500 text-shadow-sm shadow-red-500/75'>Jesulayomi Aina,</span>
      </div>
      <div className='xl:text-5xl md:text-4xl text-3xl font-medium flex flex-wrap gap-x-2 text-green-500 text-shadow shadow-green-500/75'>
        <div><span className='xl:text-2xl md:text-xl text-base text-white text-shadow-none'>a</span> Software Engineer,</div>
      </div>
      <div className='text-yellow-500 text-lg pt-2'>
        and I build software, web applications and websites using a mix of these . . .
      </div>
      <RowCircles techs={techs} />
      <div className='text-white flex text-base pt-5 items-center justify-center'>
        <div className="flex flex-row flex-wrap md:gap-x-20 gap-2">
          <button
            className='
            p-2 min-w-24 rounded-full
            border-b-4 border
            border-slate-500/50
            hover:bg-white hover:text-black
            hover:border-none hover:scale-110
            transition-all duration-300
            '
            onClick={() => navigate.push('/career#experience')}
          >
            Career
          </button>
          <button
            className='
            p-2 min-w-24 rounded-full
            border-b-4 border
            border-slate-500/50
            hover:bg-white hover:text-black
            hover:border-none hover:scale-110
            transition-all duration-300
            '
            onClick={() => navigate.push('/career#skills')}
          >
            Skills
          </button>
          <button
            className='
            p-2 min-w-24 rounded-full
            border-b-4 border
            border-slate-500/50
            hover:bg-white hover:text-black
            hover:border-none hover:scale-110
            transition-all duration-300
            '
            onClick={() => navigate.push('/career#education')}
          >
            Education
          </button>
          <button
            className='
            p-2 min-w-24 rounded-full
            border-b-4 border
            border-slate-500/50
            hover:bg-white hover:text-black
            hover:border-none hover:scale-110
            transition-all duration-300
            '
            onClick={() => navigate.push('/projects')}
          >
            Projects
          </button>
          <button
            className='
            p-2 min-w-24 rounded-full
            border-b-4 border
            border-slate-500/50
            hover:bg-white hover:text-black
            hover:border-none hover:scale-110
            transition-all duration-300
            '
            onClick={() => navigate.push('/contact')}
          >
            Contact
          </button>
        </div>
      </div>
    </motion.div>
  )
};

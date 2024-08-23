"use client";

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import StackingCircles from './StackingCircles';


export default function Project({ project }) {
  const hiddenVariants = {
    hideTech: {
      opacity: 0
    },
    showTech: {
      opacity: 1
    }
  }
  const circleStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    position: 'absolute',
    border: '1px solid #4B5563',
  };
  
  const iconVariants = {
    hideIcons: (index) => ({
      y: -100,
      opacity: 0,
    }),
    visibleIcons: (index) => ({
      y: index * 60,
      opacity: 1,
      transition: {
        // delay: index * 0.2,
        delay: 0.2,
        duration: 1,
        type: 'spring',
        stiffness: 50,
      },
    }),
  };


  return (
    <motion.div
      className='flex'
      initial="hideTech"
      whileHover={["showTech", "visibleIcons"]}
    >
      <motion.div
        className='rounded-3xl bg-zinc-800 group p-[7px] md:mb-28 mb-16 z-40'
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          opacity: { ease: 'linear' },
          layout: { duration: 0.1 }
        }}
      >
        <div className={`
          transition-all duration-700
          rounded-2xl overflow-hidden
          border-[1px] border-zinc-600
          hover:from-${project.theme}-700 bg-zinc-900
          bg-gradient-to-b hover:to-black`}>
          <div className="flex flex-col rounded-3xl justify-center">
            <div className="justify-between items-center pt-8 md:pt-10 px-8">
              <div className="relative text-center text-4xl md:font-semibold font-[500]">
                <span>{project.title}</span>
                <div className='absolute -right-8 -top-5 text-end border-none'>
                  {project.icon ? (
                    <Image
                      src={project.icon}
                      width={70}
                      height={70}
                      alt={`${project.title} icon`}
                      className='object-contain'
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full sm:w-[70%] mx-auto px-4 sm:px-8 md:pt-5 pt-3 pb-5 text-xs sm:text-sm md:text-lg text-zinc-300 group-hover:text-white">
              <span className="text-white">{project.description} </span>
            </div>
            <div className="flex flex-row justify-between">
              <motion.a
                whileHover={{ scale: 1.075 }}
                whileTap={{ scale: 0.9 }}
                target='_blank'
                className="
                mx-auto p-2
                text-center text-xs sm:text-base
                rounded-full border-2 border-zinc-600
                hover:rounded-xl
                group-hover:border-zinc-300/75
                hover:bg-white hover:text-black
                hover:font-medium
                "
                href={project.repo}
              >
                <button className="">GitHub Repo</button>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.075 }}
                whileTap={{ scale: 0.9 }}
                target='_blank'
                className="
                mx-auto p-2
                text-center text-xs sm:text-base
                rounded-full border-2 border-zinc-600
                hover:rounded-xl
                group-hover:border-zinc-300/75
                hover:bg-white hover:text-black
                hover:font-medium
                "
                href={project.url}
              >
                <button className="">Visit Website</button>
              </motion.a>
            </div>
            <div className="mx-auto object-fill group-hover:translate-y-1 shadow-xl shadow-black translate-y-6 transition-all duration-500 w-[86%] mt-6 md:mt-10">
              <img className='mx-auto' src={project.image} />
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="
        rounded-full bg-zinc-800 border-zinc-600
        p-[7px] md:mb-28 mb-16
        scale-95 translate-x-2 overflow-hidden
        w-0 sm:min-w-min max-w-7xl"
        variants={hiddenVariants}
      >
        <div className='text-xl text-green-500'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div className=''>
          <StackingCircles circleStyle={circleStyle} iconVariants={iconVariants} techs={project.technologies} />
        </div>
      </motion.div>
    </motion.div>
  );
};
"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

import icons from '@/lib/icons';


const StackingCircles = ({ circleStyle, iconVariants, techs }) => {
  return (
    <>
      {techs.map((name, index) => (
        <motion.div
          key={index}
          custom={index}
          style={circleStyle}
          variants={iconVariants}
          className='bg-slate-600/25 p-2'
        >
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            className='flex justify-center items-center'
          >
            <Image
              src={`${icons[name.toLowerCase()] || icons['default']}`}
              alt={name}
              width={45}
              height={45}
            />
          </motion.div>
        </motion.div>
      ))}
    </>
  );
};

export default StackingCircles;

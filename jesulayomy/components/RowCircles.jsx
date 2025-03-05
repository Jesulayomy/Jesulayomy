"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

import icons from '@/lib/icons';


const RowCircles = ({ techs }) => {
  const circleStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    border: '1px solid #4B5563',
  };

  const iconRowVariants = {
    hideRowIcons: (index) => ({
      x: -100,
      opacity: 0,
      rotate: 900,
    }),
    visibleRowIcons: (index) => ({
      x: index,
      opacity: 1,
      rotate: 0,
      transition: {
        // delay: index * 0.2,
        delay: 0.2,
        duration: 1,
        type: 'spring',
        stiffness: 50,
      },
    }),
  };
  const textVariants = {
    hideText: {
      opacity: 0,
      scale: 0,
    },
    showText: {
      opacity: 1,
      scale: 1,
    }
  };
  const scaleVariants = {
    scale: {
      scale: 1.5,
    },
  }

  return (
    <motion.div
      className='flex flex-wrap justify-center items-center w-full gap-4'
      initial='hideRowIcons'
      animate='visibleRowIcons'
    >
      {techs.map((name, index) => (
        <motion.div
          key={index}
          className='flex flex-col'
          initial='hideText'
          animate='visibleRowIcons'
          whileHover="showText"
        >
          <motion.span
            variants={textVariants}
          >{name}
          </motion.span>
          <motion.div className='flex w-[100%] justify-center'>
            <motion.div
              custom={index}
              style={circleStyle}
              variants={iconRowVariants}
              className='
              p-2
              bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]
              from-white/20 from-0% to-slate-600/25 to-100%
              '
              whileHover={{
                backgroundColor: 'rgb(255 255 255 / 0.25)',
              }}
            >
              <motion.div
                variants={scaleVariants}
                whileHover={[
                  "scale"
                ]}
                className='flex flex-col justify-center items-center'
              >
                <Image
                  src={`${icons[name.toLowerCase().split(" ").join("")] || icons['default']}`}
                  alt={name}
                  width={45}
                  height={45}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default RowCircles;

"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';


export default function HeadShot() {

  return (
    <motion.div
      className='p-1 flex flex-col border border-zinc-600 bg-gradient-to-b from-zinc-700 to-black rounded-2xl'
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        opacity: { ease: 'linear' },
        layout: { duration: 0.1 }
      }}
      whileHover={{
        scale: 1.01
      }}
    >
      <Image
        src={"/JesulayomiA.png"}
        width={300}
        height={400}
        className='object-contain rounded-xl'
        alt=""
        priority
      />
    </motion.div>
  )
};

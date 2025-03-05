"use client";

import {motion} from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import icons from '@/lib/icons';


export default function Contacts({ contacts }) {
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
        <div className='md:text-2xl text-xl font-medium'>
          Contacts
        </div>
      </div>
      <div className='flex flex-row flex-wrap md:flex-col gap-2 pt-2'>
        {Object.entries(contacts).map(([contact, url], index) => (
          <div key={index} className='flex flex-row items-center'>
            <Link
              href={url}
              className='
              flex flex-row gap-4
              items-center p-2 md:px-4
              border border-zinc-600 rounded-xl
              bg-gradient-to-b from-zinc-700 to-zinc-900
              hover:from-zinc-900 hover:to-zinc-700
              transition-all duration-300 ease-in-out
              '
              target='_blank'
            >
              <Image
                src={`${icons[contact.toLowerCase()] || icons['default']}`}
                width={40}
                height={40}
                alt={contact}
                // className='object-contain w-auto h-auto'
              />
              <div className='px-1 text-lg'>
                {contact}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
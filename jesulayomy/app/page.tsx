"use client";

import Image from "next/image";
import About from '@/components/About';
import HeadShot from '@/components/HeadShot';


export default function Home() {
  return (
    <section className='flex flex-row flex-wrap py-10 gap-10 justify-center' id='home'>
      <About />
      <HeadShot />
    </section>
  );
}

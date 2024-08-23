import type { Metadata } from 'next';
import Image from 'next/image';

import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';


export const metadata: Metadata = {
  title: 'Career',
};


export default function page() {
  return (
    <div className='flex flex-col w-full items-center'>
      <h2 className='text-3xl lg:text-5xl font-bold text-center py-5 font-mono'>Career & Skills</h2>
      <Resume />
      <section className='flex flex-col py-8 w-full items-center' id='experience'>
        <Experience />
      </section>
      <section className='flex flex-col py-8 w-full items-center' id='skills'>
        <Skills />
      </section>
      <section className='flex flex-col py-8 w-full items-center' id='education'>
        <Education />
      </section>
      <section className='flex flex-col py-8 w-full items-center' id='projects'>
        <Projects />
      </section>
    </div>
  );
}

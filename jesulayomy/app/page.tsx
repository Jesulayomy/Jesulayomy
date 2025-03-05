"use client";

import Image from "next/image";
import About from '@/components/About';
import HeadShot from '@/components/HeadShot';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Project from '@/components/Project';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';

import projects from '@/lib/projects';


export default function Home() {
  const contacts = {
    "Github": "https://github.com/Jesulayomy",
    "Linkedin": "https://www.linkedin.com/in/jesulayomi/",
    "Gmail": "mailto:jesulayomi081@gmail.com",
    "WhatsApp": "https://wa.me/19298329086",
    "Calendly": "https://calendly.com/jesulayomi",
  }
  return (
    <section className='flex flex-row flex-wrap py-10 gap-10 justify-center' id='home'>
      <About />
      <HeadShot />
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
          <h2 className='text-3xl lg:text-5xl p-5 font-bold text-center font-mono'>My Projects</h2>
          <div className='flex flex-col w-[95%] md:w-[80%]'>
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </section>
      </div>
      <div className='flex flex-col w-full items-center'>
        <h2 className='text-3xl lg:text-5xl font-bold font-mono text-center py-5'>Contact Me</h2>
        <section className='flex flex-col py-10 w-full items-center' id='contact'>
          <Contact contacts={contacts} />
        </section>
      </div>
    </section>
  );
}

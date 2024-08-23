"use client";

import React from 'react'

import projects from '@/lib/projects';
import Project from '@/components/Project';


export default function page() {

  return (
    <>
      <h2 className='text-3xl lg:text-5xl p-5 font-bold text-center font-mono'>My Projects</h2>
      <div className='flex flex-col w-[95%] md:w-[80%]'>
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </>
  );
};

"use client";

import Contact from '@/components/Contact';


export default function page() {
  const contacts = {
    "Github": "https://github.com/Jesulayomy",
    "Linkedin": "https://www.linkedin.com/in/jesulayomi/",
    "Gmail": "mailto:jesulayomi081@gmail.com",
    "WhatsApp": "https://wa.me/2348124951459"
  }
  return (
    <div className='flex flex-col w-full items-center'>
      <h2 className='text-3xl lg:text-5xl font-bold font-mono text-center py-5'>Contact Me</h2>
      <section className='flex flex-col py-10 w-full items-center' id='contact'>
        <Contact contacts={contacts} />
      </section>
    </div>
  );
};

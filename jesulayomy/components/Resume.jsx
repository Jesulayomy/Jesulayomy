import Image from 'next/image';

import icons from '@/lib/icons';


export default function Resume() {
  return (
    <div
      className='
      flex flex-row-reverse text-end
      w-[100%] sm:[w-90%] md:w-[80%] xl:w-[60%]
      '
    >
      <a
        href="/Aina Jesulayomi Resume.pdf"
        target='_blank' rel='noopener noreferrer'
        className='
        flex items-center cursor-pointer
        p-2 xl:p-3
        border border-zinc-600
        bg-gradient-to-b from-zinc-900
        to-black rounded-xl
        transition-all duration-300 ease-in-out
        hover:from-black hover:to-zinc-900'
      >
        <Image
          width={10}
          height={10}
          src={`${icons.resume}`}
          alt={"Resume -> "}
          className='object-contain h-[20px] w-[20px]'
        />
        <span className='text-white text-sm font-medium'>Download My Resume</span>
      </a>
    </div>
  )
}
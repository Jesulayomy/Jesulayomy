import Image from 'next/image';
import RowCircles from './RowCircles';
import { companyIcons, yearIcons } from '@/lib/icons';

export default function CompanyExperience({ company, isLast }) {
  const companyIconKey = company.company.toLowerCase().replaceAll(' ', '');
  const companyIcon = companyIcons[companyIconKey];

  return (
    <section className={`py-4 ${isLast ? '' : 'border-b border-zinc-500'}`}>
      <header className='flex items-center gap-3 pb-3'>
        {companyIcon && (
          <Image
            src={companyIcon}
            alt={`${company.company} logo`}
            width={48}
            height={48}
            className='h-12 w-12 shrink-0 object-contain'
          />
        )}
        <h3 className='text-2xl md:text-3xl text-slate-200'>
          {company.company}
        </h3>
      </header>
      <div>
        {company.experiences.map((experience, index) => (
          <article
            key={`${experience.role}-${experience.duration}`}
            className='relative flex gap-3 py-4'
          >
            {index < company.experiences.length - 1 && (
              <span
                aria-hidden='true'
                className='absolute left-3 top-7 -bottom-7 z-0 w-px bg-zinc-600'
              />
            )}
            <div className='flex shrink-0 items-start'>
              <Image
                src={yearIcons[experience.imageYear]}
                alt={`${experience.imageYear} timeline marker`}
                width={30}
                height={30}
                className='relative z-10 h-8 w-8 rounded-full border border-zinc-500 bg-zinc-800 object-contain'
              />
            </div>
            <div className='flex min-w-0 flex-1 flex-col lg:flex-row lg:justify-between lg:gap-3'>
              <h4 className='lg:w-[28%] text-2xl text-slate-100'>
                {experience.role}
                {experience.team && (
                  <span className='block text-base text-slate-300'>
                    {experience.team}
                  </span>
                )}
              </h4>
              <div className='lg:w-[69%]'>
                <div className='flex flex-col md:flex-row items-start md:items-center w-full'>
                  <div className='flex flex-col w-full md:w-[40%]'>
                    <span className='text-xs text-slate-200'>
                      {experience.type}, {experience.location}
                    </span>
                    <span className='text-xs text-slate-100'>
                      {experience.duration}
                    </span>
                  </div>
                  <div className='w-full md:w-[60%]'>
                    <RowCircles techs={experience.tech} />
                  </div>
                </div>
                <ul className='list-disc list-inside'>
                  {experience.tasks.map((task, taskIndex) => (
                    <li
                      key={taskIndex}
                      className='text-xs md:text-base text-slate-200'
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

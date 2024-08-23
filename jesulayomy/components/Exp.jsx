import RowCircles from './RowCircles';


export default function Exp({ exp }) {
  return (
    <div className='flex flex-col lg:flex-row gap-10 py-4 border-b border-zinc-500 justify-around'>
      <div className='text-end lg:w-[30%]'>
        <div className='flex flex-col'>
          <span className='text-4xl text-slate-500'>{exp.company}</span>
          <span className='text-2xl text-slate-300'>{exp.role}</span>
        </div>
      </div>
      <div className='lg:w-[70%]'>
        <div className='flex flex-col'>
          <div className='flex flex-row gap-2 items-center w-[100%]'>
            <div className='flex flex-col'>
              <span className='text-xs text-slate-500'>{exp.type}, {exp.location}</span>
              <span className='text-xs text-slate-300'>{exp.duration}</span>
            </div>
            <div
              className='flex flex-row flex-wrap items-center justify-content-between w-[80%]'
            >
              <RowCircles techs={exp.tech} />
            </div>
          </div>
          <ul className='list-disc list-inside'>
            {exp.tasks.map((task, index) => (
              <li key={index} className='text-xs md:text-base text-slate-500'>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

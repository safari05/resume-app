import { EXPERIENCES } from '@/utils/data'
import React from 'react'

export default function page() {
  return (
    <div className='overflow-hidden md:flex-row pt-44 container'>
        {
          EXPERIENCES.map((experience, index) => (
              <div
              key={index}
              className='mb-8 flex flex-wrap lg:justify-center'
              >
                <div className='w-full lg:w-1/4'> 
                  <p> {experience.periode}</p>
                </div>
                <div className='w-full max-w-xl lg:w-3/4'> 
                  <h3 className='mb-2 font-semibold'> {experience.role} - <span>{experience.company}</span></h3>
                  <p className='mb-4 text-neutral-300'>{experience.description}</p>
                  {
                    experience.Technologies.map((tech, i) => (
                      <span key={i} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-accent-foreground'>
                        {tech}
                      </span>
                    ))
                  }
                </div>
              </div>
          ))
        }
    </div>
  )
}


import React from 'react'
import {RiReactjsLine } from 'react-icons/ri'
import {TbBrandNextjs  } from 'react-icons/tb'
import {DiRedis, DiNetmagazine, DiMsqlServer  } from 'react-icons/di'
import {FaGithubSquare   } from 'react-icons/fa'
import {FaNode   } from 'react-icons/fa'
import{BiLogoPostgresql} from 'react-icons/bi';

const Technology = () => {
  return (
    <section id='technology' className='container pb-24'>
        <h1 className='text-primary my-10 text-4xl text-center'>Technology</h1>
        <div className='flex flex-wrap items-center justify-center gap-4'>
        <div
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiReactjsLine className='text-7xl text-cyan-400' />
        </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <TbBrandNextjs 
                    className='text-7xl '
                />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNode 
                    className='text-7xl text-green-500'
                />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiNetmagazine 
                    className='text-7xl '
                />
            </div>  
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMsqlServer 
                    className='text-7xl text-red-400'
                />
            </div>  
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql 
                    className='text-7xl text-sky-500'
                />
            </div>  
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiRedis 
                    className='text-7xl text-red-500'
                />
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaGithubSquare 
                    className='text-7xl'
                />
            </div>
        </div>
    </section>
  )
}

export default Technology

import React from 'react'
import oneDataImage from '../../../public/assets/images/satu-data-muba.png';
import pirImage from '../../../public/assets/images/pir.png';
import Image from 'next/image';
export default function Portfolio() {
  return (
    <section className='pt-36 pb-16 bg-slate-100'>
      <div className="container">
        <div className="w-full px-4">
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h4 className='font-semibold text-lg text-primary mb-2'>Portfolio</h4>
            <h2 className='font-bold text-dark text-3xl mb-4'> My Projects</h2>
            <p className='font-medium text-md text-secondary'>
              Most of these projects were completed by my team and me. Some of them were full stack, while others were focused solely on the front end
            </p>
          </div>
        </div>
        <div className='w-full px-4 flex flex-wrap justify-center'>
          <div className='mb-12 p-4 md:w-1/2'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <Image src={oneDataImage} alt='One Data Muba' className='w-full' />
            </div>
            <h3 className='font-semibold text-dark mt-5 mb-3'>One Data Musibanyuasin</h3>
            <p className='font-medium'>

              The One Data Local Government platform provides a comprehensive data management system with various access levels:

              Open Data: Accessible to the public for general use.
              Limited Data: Accessible to specific government departments (OPD) with controlled permissions.
              Closed Data: Restricted to authorized personnel within the OPD.
              The platform is integrated with One Indonesian Data (https://data.go.id), ensuring consistency and interoperability across national data systems.
            </p>
          </div>
        </div>
        <div className='w-full px-4 flex flex-wrap justify-center'>
          <div className='mb-12 p-4 md:w-1/2'>
            <div className='rounded-md shadow-md overflow-hidden'>
              <Image src={pirImage} alt='Regional Invetment' className='w-full' />
            </div>
            <h3 className='font-semibold text-dark mt-5 mb-3'>Regional Investment</h3>
            <p className='font-medium'>
              PIR
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

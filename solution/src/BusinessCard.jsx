import React from 'react';

const BusinessCard = ({
   name = 'Lokeshwar',
   description = 'A TA in the 100xDevs Cohort 2.0',
   socials = [
      {
         label: 'LinkedIn',
         link: '',
      },
      {
         label: 'Twitter',
         link: '',
      },
      {
         label: 'Github',
         link: '',
      },
   ],
   interests = ['Iconic', 'Open Sourse', 'App Dev'],
}) => {
   return (
      <div className='border border-white rounded-2xl px-[15em] pl-[3em] py-12 flex flex-col items-start gap-y-8'>
         <div className='w-full flex flex-col items-start gap-1'>
            <h1>{name}</h1>
            <span>{description}</span>
         </div>

         <div className='flex flex-col items-start gap-3'>
            <h2 className='font-bold text-lg'>Interests</h2>
            <div className='text-sm'>
               <ul className='list-none flex flex-col items-start gap-2'>
                  {interests.map((interest) => (
                     <li
                        key={interest}
                        className='left-0 m-0 p-0 text-sm text-gray-700'
                     >
                        {interest}
                     </li>
                  ))}
               </ul>
            </div>
         </div>

         <div className='flex justify-between gap-20'>
            {socials?.map((handle) => (
               <button key={Math.random()} className='bg-blue-600'>
                  <a
                     href={handle.link}
                     target='_blank'
                     className='text-white hover:border-none hover:outline-none hover:text-slate-200'
                  >
                     {handle.label}
                  </a>
               </button>
            ))}
         </div>
      </div>
   );
};

export default BusinessCard;

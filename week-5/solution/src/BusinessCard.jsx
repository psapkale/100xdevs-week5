import React from 'react';

const BusinessCard = ({
   name = 'Lokeshwar',
   description = 'A TA in the 100xDevs Cohort 2.0',
   linkedin = true,
   twitter = true,
   github = false,
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
            {linkedin && <button className='bg-blue-600'>LinkedIn</button>}
            {twitter && <button className='bg-blue-600'>Twitter</button>}
            {github && <button className='bg-blue-600'>Github</button>}
         </div>
      </div>
   );
};

export default BusinessCard;

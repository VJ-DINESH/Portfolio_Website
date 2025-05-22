import React from 'react'

export const HomePage = () => {
  return (
   <>
   <div className='bg-black text-white text-center py-20  'id='homepage'>
   <img 
  src='./Profile/1.png' 
  alt='images'
  class='mx-auto mb-4 w-62 h-72 rounded object-cover transform transition-transform duration-300 hover:scale-105 mt-5 sm:mt-20 lg:mt-20'
/>



    <h1 className='text-4xl '>
        I'm{""}
        <span className='ml-3 text-3xl  justify-between font-bold '>DINESH VETRISELVAM</span><br/>
        <span  className='ml-3 text-2xl'>FullStack Developer | UI/UX</span>
    </h1>
    <p className='mt-4 text-md lg:text-xl text-gary-400 px-4 md:px32'>Full Stack Developer Specializing in  HTML, CSS, Bootstrap, JavaScript, React, Node.js, Express.js, Php, MYSQL and MongoDB.| Creating Responsive, User-Friendly Web Application. </p>
    <div className='mt-8 space-x-4'>
        <button
        className=' text-xl sm:text-2xl border border-white border-x-2 border-y-2 rounded-md shadow-sm hover:scale-105 px-6 py-0 bg-blue-600  '><a href='mailto:vjdinesh8904@gmail.com'>Hire Me</a></button>
        <button
        className='text-xl sm:text-2xl border border-white border-x-2 border-y-2 rounded-md shadow-sm  hover:scale-105 px-6 py-0 bg-green-600'><a
        href='./Resume/Dinesh.Vetriselvam.pdf'
        target='_blank'
       
        
      >
        Resume
      </a></button>
    </div>
   
   </div>
  
   
   
   </>
  )
}

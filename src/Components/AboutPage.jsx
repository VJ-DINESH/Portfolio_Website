import React from 'react';

export const AboutPage = () => {
  return (
    <div className='bg-white text-black py-7 mb-20  mb-1' id='aboutpage'>
      <div className='container mx-auto px-4 md:px-16 lg:px-24'>
        <h2 className='text-3xl font-bold text-center mt-14'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12 '>
          <img
            src="./Profile/2.png"
            alt='aboutImage'
            className='w-62 h-72 mt-7 rounded object-cover mb-8 md:mb-0 hover:scale-105 transition-transform duration-300 mt-20'
          />
          <div className=''>
            <div className='mb-8'>
              <h2 className='font-bold text-xl lg:text-2xl'>FullStack Developer</h2>
              <p className='mt-2 text-md lg:text-xl'>
              
              Passionate FullStack developer with hands-on experience in creating responsive web
                applications using HTML, CSS, Bootstrap, JavaScript, React, Node.js, Express.js, Php, MYSQL and MongoDB. Proven
                ability to design user-friendly interfaces and implement efficient back-end
                functionalities. Eager to contribute to dynamic web development projects with a
                strong commitment to delivering high-quality, engaging websites.
              </p>
            </div>
            
            <h2 className='font-bold text-xl lg:text-2xl mt-4'>UI/UX Developer</h2>
            <p className='mt-2 text-md lg:text-xl '>
              As a UI/UX designer, I specialize in creating engaging and intuitive user
              interfaces that prioritize usability and aesthetics. My approach blends
              user-centric design principles with a keen understanding of visual hierarchy and
              interaction design. With proficiency in tools like Figma, I craft
              seamless experiences that enhance user satisfaction and drive engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

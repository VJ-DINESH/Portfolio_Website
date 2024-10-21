import React from 'react';

const InternshipPage = () => {
  return (
    <div className=" bg-black shadow-sm shadow-black border border-black container mx-auto p-2 mb-14 mt-14 sm:p-8 " id="internshippage">
      <h2 className="text-3xl font-bold mb-8 text-white text-center mt-16">Internship</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-0">
        {/* First Internship */}
        <div className="bg-white p-2 rounded-lg border border-black shadow-lg">
          <h3 className="text-lg lg:text-xl font-bold mb-2">Techzarinfo</h3>
          <p className="text-md text-lg lg:text-xl text-gray-800 mb-2">Web Development Intern | Trichy, India</p>
          <ul className="list-disc list-inside text-md lg:text-lg text-gray-800">
            <li>Completed a 3-month web development internship.</li>
            <li>Gained  experience in building applications.</li>
            <li>Worked on front-end projects using HTML.</li>
            <li>Implemented JavaScript and frameworks.</li>
      
            <li>Learned version control with Git effectively.</li>
          </ul>
        </div>

        {/* Second Internship */}
        <div className="bg-white p-2 rounded-lg border border-black shadow-lg mt-6 sm:mt-0">
          <h3 className="text-lg lg:text-xl font-bold mb-2">Nimatooz Smile Mobility</h3>
          <p className="text-md text-lg lg:text-xl text-gray-800 mb-2">Web Development Intern | Pudukkotai, India</p>
          <ul className="list-disc list-inside text-md lg:text-lg text-gray-800">
            <li>Completed a 3-day web development internship.</li>
            <li>Gained practical experience in web development.</li>
            <li>Assisted with developing internal tools and apps.</li>
            <li>Contributed to fixing bugs and optimizing apps.</li>
      
            <li>Participated in project planning and team meetings.</li>
          </ul>
        </div>

        {/* Third Internship */}
        <div className="bg-white p-2 rounded-lg border border-black shadow-lg mt-6 lg:mt-0">
          <h3 className="text-lg lg:text-xl font-bold mb-2">DLK Career Development IT Services</h3>
          <p className="text-md text-lg lg:text-xl text-gray-800 mb-2">Web Development Intern (React) | Chennai, India</p>
          <ul className="list-disc list-inside text-md lg:text-lg text-gray-800">
            <li>Completed a 5-day internship focused on React.</li>
            <li>Gained practical experience in React development.</li>
  
            <li>Code reviews for React components.</li>
            <li>Integrated APIs, managed state with React hooks.</li>
            <li>Collaborated with team to enhance application functionality.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;

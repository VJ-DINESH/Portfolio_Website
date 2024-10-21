import React from 'react';

const EducationPage = () => {
  const educationDetails = [
    {
      university: 'Anna University',
      collegeName: 'Chendhuran College of Engineering and Technology',
      degree: 'B.E. - Computer Science and Engineering',
      score: 'CGPA: 8.5',
      passOut: '2020 – 2024',
    },
    {
      university: 'State Board',
      collegeName: 'Vallal Pari Higher Secondary School , Piranmalai',
      degree: '12th Grade',
      score: 'Percentage: 63%',
      passOut: '2019 – 2020',
    },
    {
      university: 'State Board',
      collegeName: 'Vallal Pari Higher Secondary School , Piranmalai',
      degree: '10th Grade',
      score: 'Percentage: 82%',
      passOut: '2017 – 2018',
    },
  ];

  return (
    <section className="bg-white py-10 mt-1" id="educationpage">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-black mt-12">Education</h2>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 ">
          {educationDetails.map((edu, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg  border-black border-x-2">
<h3 className="text-xl font-semibold text-gray-900 text-center">{edu.university}</h3>
<h4 className="text-lg  font-bold text-white-800 mb-2 text-center ">{edu.collegeName}</h4>
              <p className="text-lg font-semibold text-white-700 text-center ">{edu.degree}</p>
              <p className="text-xl text-green-600 text-center ">{edu.score}</p>
              <p className="text-sm text-white-500 text-center " >{edu.passOut}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationPage;

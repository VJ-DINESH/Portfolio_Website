import React from 'react';

const ProjectsPage = () => {
  return (
    <div className="bg-black text-white w-full p-4 mb-11" id="projectpage">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-5 mt-20">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Project 1 */}
          <div className="bg-white text-black shadow-md p-4 rounded-lg">
            <img src="./Project/Restaurant.PNG" alt="Restaurant Web Page" className="h-50 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Restaurant Web Page</h3>
            <p className="text-gray-600">HTML, CSS, Bootstrap</p>
            <p className="text-gray-600">
              Experienced in creating responsive web pages using Bootstrap, HTML, and CSS. Skilled in designing user-friendly interfaces and implementing modern web standards. Passionate about web development and committed to delivering high-quality, visually appealing, and functional websites.
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-white text-black shadow-md p-4 rounded-lg">
            <img src="./Project/Tracker.PNG" alt="Expense Tracker" className="h-50 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Expense Tracker</h3>
            <p className="text-gray-600">HTML, CSS, Bootstrap, JavaScript, Node.js, Express, MySQL, Xampp</p>
            <p className="text-gray-600">
              Developed an expense tracker using HTML, CSS, Bootstrap, and JavaScript for a responsive front-end. Implemented back-end functionality with Node.js and Express, and managed data with MySQL via XAMPP. Ensured seamless user experience and efficient data handling for tracking expenses.
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-white text-black shadow-md p-4 rounded-lg">
            <img src="./Project/Portfolio.PNG" alt="Portfolio Website" className="h-50 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-600">HTML, CSS, Tailwind CSS, React</p>
            <p className="text-gray-600">
              Developed a personal portfolio website to showcase projects and skills. Utilized React for dynamic components and Tailwind CSS for responsive design and modern styling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

import React from 'react';

const SkillsPage = () => {
  return (
    <div className="bg-black text-white py-7" id='skillspage'>
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <h2 className="text-3xl font-bold text-center mb-10 mt-14">Skills</h2>
        <div className="grid grid-cols-1 mt-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Skill Box 1 */}
          <div className="bg-white text-black shadow-md p-4 rounded-lg flex items-center">
            <img src="./Skills/html.png" alt="Skill Photo" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-md lg:text-xl
               font-bold">HTML/CSS</h3>
              <p className="text-gray-600 text-sm lg:text-lg">Skilled in creating responsive layouts and styles.<br />Style, design, layout, web, elements.</p>
            </div>
          </div>

          {/* Skill Box 2 */}
          <div className="bg-white text-black shadow-md p-4 rounded-lg flex items-center">
            <img src="./Skills/tailwind.png" alt="Skill Photo" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-md lg:text-xl font-bold">Bootstrap/Tailwind</h3>
              <p className="text-gray-600 text-sm lg:text-lg">Classic, comprehensive, responsive, CSS framework.<br />Utility-first, customizable, modern, design-centric framework.</p>
            </div>
          </div>

          {/* Skill Box 3 */}
          <div className="bg-white text-black shadow-md p-4 rounded-lg flex items-center">
            <img src="./Skills/react.png" alt="Skill Photo" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-md lg:text-xl font-bold">React</h3>
              <p className="text-gray-600 text-sm lg:text-lg">Experience with building single-page applications.</p>
            </div>
          </div>

          {/* Skill Box 4 */}
          <div className="bg-white text-black shadow-md p-4 rounded-lg flex items-center">
            <img src="./Skills/js.png" alt="Skill Photo" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-md lg:text-xl font-bold">JavaScript</h3>
              <p className="text-gray-600 text-sm lg:text-lg">Proficient in building interactive web applications.</p>
            </div>
          </div>

            {/* Skill Box 4 */}
            <div className="bg-white text-black shadow-md p-4 rounded-lg flex items-center">
            <img src="./Skills/php.png" alt="Skill Photo" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-md lg:text-xl font-bold">PHP Programming</h3>
              <p className="text-gray-600 text-sm lg:text-lg">Server-side scripting language for dynamic web development.</p>
            </div>
          </div>

          {/* Skill Box 5 */}
          <div className="bg-white text-black shadow-md p-4 rounded-lg flex items-center">
            <img src="./Skills/node.png" alt="Skill Photo" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-md lg:text-xl font-bold">Node.js/Express.js</h3>
              <p className="text-gray-600 text-sm lg:text-lg">Server-side, JavaScript runtime environment.<br />Minimalist, flexible, web application framework.</p>
            </div>
          </div>

          {/* Skill Box 6 */}
          <div className="bg-white text-black shadow-md p-4 rounded-lg flex items-center">
            <img src="./Skills/mongo.png" alt="Skill Photo" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-md lg:text-xl font-bold">MongoDB</h3>
              <p className="text-gray-600 text-sm lg:text-lg">Experience with NoSQL database management.</p>
            </div>
          </div>

          {/* Skill Box 7 */}
          <div className="bg-white text-black shadow-md p-4 rounded-lg flex items-center">
            <img src="/Skills/mysql.png" alt="Skill Photo" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-md lg:text-xl font-bold">MySQL/Xampp</h3>
              <p className="text-gray-600 text-sm lg:text-lg">Experience with relational database management.</p>
            </div>
          </div>

          {/* Skill Box 8 */}
          <div className="bg-white text-black shadow-md p-4 rounded-lg flex items-center">
            <img src="Skills/git.png" alt="Skill Photo" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h3 className="text-md lg:text-xl font-bold">Git/GitHub</h3>
              <p className="text-gray-600 text-sm lg:text-lg">Version control and collaboration using Git.</p>
            </div>
          </div>

          {/* Skill Box 9 */}
          <div className="bg-white text-black shadow-md p-4 rounded-lg flex items-center">
            <img src="./Skills/figma.png" alt="Skill Photo" className="w-16 h-19 rounded-full mr-4" />
            <div>
              <h3 className="text-md lg:text-xl font-bold">Figma</h3>
              <p className="text-gray-600 text-sm lg:text-lg">Designing user interfaces and prototyping with Figma.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;

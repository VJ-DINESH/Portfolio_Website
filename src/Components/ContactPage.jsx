import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:vjdinesh8904@gmail.com?subject=Message from ${formData.name}&body=${formData.message}`;
    window.location.href = mailtoLink;

    // Clear form data after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="container mx-auto p-4 mb-14 bg-white" id="contactpage">
      <h2 className="text-3xl font-bold mb-4 text-black text-center mt-14">Contact Us</h2>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-6">
        <div className="w-full lg:w-1/2">
          <figure>
            <img
              src="./Contact/Contact.png" 
              alt="Contact" 
              className="w-full h-[410px] object-cover rounded-lg hover:scale-105"
            />
          </figure>
        </div>
        <div className="w-full lg:w-1/2 p-6 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-md lg:text-xl font-medium text-black">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full text-md lg:text-xl border-2 border-black rounded-md h-12 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-md lg:text-xl font-medium text-black">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full text-md lg:text-xl border-2 border-black rounded-md h-12 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-md lg:text-xl font-medium text-black">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border-2 border-black rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-lg"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

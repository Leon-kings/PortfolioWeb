import React, { useState } from 'react';
import { 
  Web, Code, 
  Close, Email, Send, Business
} from '@mui/icons-material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    budget: '',
    service: ''
  });

  const services = [
    {
      icon: <Web className="text-indigo-600 text-4xl" />,
      title: "User Interface",
      description: "Crafting beautiful, responsive websites with modern UI/UX principles that engage users and drive conversions.",
      features: ["UI/UX Design", "Responsive Layouts", "Prototyping", "Material UI"],
      details: "I create visually stunning websites that are optimized for all devices. My design process focuses on user experience, accessibility, and brand consistency. From initial wireframes to final implementation, I ensure your website not only looks great but also performs exceptionally."
    },
    {
      icon: <Code className="text-purple-600 text-4xl" />,
      title: "Web Development",
      description: "Building robust, scalable web applications using cutting-edge technologies and frameworks.",
      features: ["React JS", "Node.js", "TypeScript", "REST APIs"],
      details: "Specializing in full-stack JavaScript development, I build custom web applications tailored to your business needs. Whether you need a simple brochure site or a complex web application, I deliver secure, performant solutions with clean, maintainable code."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast.success('Your message has been sent successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setContactModalOpen(false);
    setFormData({
      name: '',
      email: '',
      message: '',
      budget: '',
      service: ''
    });
  };

  const openContactModal = (service = '') => {
    setFormData(prev => ({ ...prev, service }));
    setContactModalOpen(true);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-indigo-600 font-medium mb-2">What I Do</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Professional <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Development Services</span>
          </h2>
          <p className="text-gray-600">
            Comprehensive solutions tailored to your business needs, from concept to deployment and beyond.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="p-6">
                <div className="w-16 h-16 mb-4 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mr-2"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="bg-gradient-to-r from-indigo-300 to-purple-100  text-sm font-medium flex items-center transition-colors duration-200"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Service Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center mr-4">
                      {selectedService.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">{selectedService.title}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-100"
                  >
                    <Close />
                  </button>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Service Details</h4>
                  <p className="text-gray-600 mb-4">{selectedService.details}</p>
                  
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {selectedService.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-2"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="px-4 py-2 border bg-gradient-to-r from-red-500 to-red-300 font-medium rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      openContactModal(selectedService.title);
                    }}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-300 to-purple-500 font-medium text-white rounded-lg hover:bg-indigo-700 flex items-center"
                  >
                    <Send className="mr-2" /> Get This Service
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Modal */}
        {contactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 flex items-center">
                    <Email className="text-indigo-600 mr-2" />
                    Get In Touch
                  </h3>
                  <button 
                    onClick={() => setContactModalOpen(false)}
                    className="text-gray-400 hover:text-gray-500 p-1 rounded-full hover:bg-gray-100"
                  >
                    <Close />
                  </button>
                </div>

                <form onSubmit={handleContactSubmit} className='text-black'>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder='LD'
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder='admin2example.com'
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {formData.service && (
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Service Interested In</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                        value={formData.service}
                        readOnly
                      />
                    </div>
                  )}

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Budget (USD)</label>
                    <select
                      name="budget"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select budget range</option>
                      <option value="500-2000">$500 - $2,000</option>
                      <option value="2000-5000">$2,000 - $5,000</option>
                      <option value="5000-10000">$5,000 - $10,000</option>
                      <option value="10000+">$10,000+</option>
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Project Details</label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder='Hi LD , Am pleassed to ask you a help!'
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={() => setContactModalOpen(false)}
                      className="px-4 py-2 border bg-gradient-to-r from-red-500 to-red-300 font-medium rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-indigo-400 to-purple-600 font-medium text-white rounded-lg hover:bg-indigo-700 flex items-center"
                    >
                      <Send className="mr-2" /> Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Additional CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl p-8 md:p-10 inline-block max-w-3xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Have a custom project in mind?</h3>
            <p className="text-gray-600 mb-6">
              Let's discuss how I can help bring your ideas to life with tailored solutions.
            </p>
            <button 
              onClick={() => openContactModal()}
              className="bg-gradient-to-r from-indigo-400 to-blue-600  text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center mx-auto"
            >
              <Business className="mr-2" /> Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
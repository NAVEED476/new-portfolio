import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden">
        {/* Left side - Contact Information */}
        <div className="bg-white p-8 md:w-1/2">
          <h2 className="text-2xl font-bold mb-6">Let's get in touch With Us</h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-4 text-teal-500" />
              <a href="mailto:snaveedn23@gmail.com" className="text-gray-600 hover:underline">snaveedn23@gmail.com</a>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-4 text-teal-500" />
              <span className="text-gray-600">Khulna, Bangladesh</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-4 text-teal-500" />
              <span className="text-gray-600">+8801234567890</span>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Connect with me:</h3>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a key={social} href={`#${social}`} className="text-teal-500 hover:text-teal-600">
                  <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                    <img src={`/api/placeholder/24/24`} alt={social} className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="bg-teal-500 p-8 md:w-1/2">
          <h2 className="text-2xl font-bold mb-6 text-white">Contact with us</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-2 rounded-md"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 rounded-md"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-white text-teal-500 py-2 px-4 rounded-md font-semibold hover:bg-gray-100 transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
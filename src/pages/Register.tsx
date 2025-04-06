import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const Register = () => {
  return (
    <div 
      className="pt-20 min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80')`,
      }}
    >
      <div className="min-h-screen bg-gradient-to-b from-green-900/90 to-black/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/20"
          >
            <div className="p-8">
              <h1 className="text-3xl font-bold text-center mb-8 text-white">Register for BHASWARA 2025</h1>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Check className="w-6 h-6 text-green-400" />
                  <p className="text-gray-200">Access to all technical and non-technical events</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Check className="w-6 h-6 text-green-400" />
                  <p className="text-gray-200">Exclusive workshop participation</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Check className="w-6 h-6 text-green-400" />
                  <p className="text-gray-200">Certificate of participation</p>
                </div>
                <div className="flex items-center space-x-4">
                  <Check className="w-6 h-6 text-green-400" />
                  <p className="text-gray-200">Swag kit worth ₹1000</p>
                </div>
              </div>

              <form className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                    placeholder="you@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-gray-200">
                    College Name
                  </label>
                  <input
                    type="text"
                    id="college"
                    className="mt-1 block w-full rounded-md bg-white/5 border-white/10 text-white placeholder-gray-400 focus:border-green-500 focus:ring-green-500"
                    placeholder="Enter your college name"
                  />
                </div>
                
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-200">
                    Department
                  </label>
                  <select
                    id="department"
                    className="mt-1 block w-full rounded-md bg-white/5 border-white/10 text-white focus:border-green-500 focus:ring-green-500"
                  >
                    <option>Computer Science</option>
                    <option>Electronics</option>
                    <option>Mechanical</option>
                    <option>Civil</option>
                    <option>Other</option>
                  </select>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-green-700 transition-colors"
                >
                  Register Now
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Register;
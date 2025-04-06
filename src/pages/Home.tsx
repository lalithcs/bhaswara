import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Trophy, Sparkles } from 'lucide-react';

const Home = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className="text-center text-white px-4"
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">TECHFEST 2024</h1>
            <p className="text-xl md:text-2xl mb-8">Innovate • Create • Celebrate</p>
            <motion.button
              className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="p-6 bg-gray-50 rounded-xl text-center"
              whileHover={{ y: -10 }}
            >
              <Calendar className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2">3 Days</h3>
              <p className="text-gray-600">Of non-stop excitement</p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 rounded-xl text-center"
              whileHover={{ y: -10 }}
            >
              <Users className="w-12 h-12 mx-auto mb-4 text-green-600" />
              <h3 className="text-xl font-semibold mb-2">50+ Events</h3>
              <p className="text-gray-600">Across all departments</p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 rounded-xl text-center"
              whileHover={{ y: -10 }}
            >
              <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-600" />
              <h3 className="text-xl font-semibold mb-2">₹5L+ Prizes</h3>
              <p className="text-gray-600">Worth of prizes to win</p>
            </motion.div>

            <motion.div
              className="p-6 bg-gray-50 rounded-xl text-center"
              whileHover={{ y: -10 }}
            >
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">Workshops</h3>
              <p className="text-gray-600">By industry experts</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
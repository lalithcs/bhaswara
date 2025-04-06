import React from 'react';
import { motion } from 'framer-motion';

const departments = [
  {
    name: 'Computer Science',
    events: [
      { name: 'Hackathon', description: '24-hour coding challenge', date: 'March 15, 2024' },
      { name: 'CTF', description: 'Capture The Flag security challenge', date: 'March 16, 2024' },
      { name: 'Code Golf', description: 'Write the shortest code possible', date: 'March 16, 2024' }
    ]
  },
  {
    name: 'Electronics',
    events: [
      { name: 'Circuit Design', description: 'Design innovative circuits', date: 'March 15, 2024' },
      { name: 'Robotics', description: 'Build and program robots', date: 'March 16, 2024' },
      { name: 'IoT Challenge', description: 'Create IoT solutions', date: 'March 17, 2024' }
    ]
  },
  {
    name: 'Mechanical',
    events: [
      { name: 'CAD Competition', description: '3D design challenge', date: 'March 15, 2024' },
      { name: 'Bridge Building', description: 'Build the strongest bridge', date: 'March 16, 2024' },
      { name: 'Auto Quiz', description: 'Test your automobile knowledge', date: 'March 17, 2024' }
    ]
  }
];

const Events = () => {
  return (
    <div 
      className="pt-20 min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')`,
      }}
    >
      <div className="min-h-screen bg-gradient-to-b from-blue-900/90 to-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">Department Events</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-white/20"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-white">{dept.name}</h2>
                  <div className="space-y-4">
                    {dept.events.map((event) => (
                      <motion.div
                        key={event.name}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/20 transition-all duration-300"
                      >
                        <h3 className="text-lg font-semibold text-white">{event.name}</h3>
                        <p className="text-gray-300 text-sm mt-1">{event.description}</p>
                        <p className="text-blue-400 text-sm mt-2">{event.date}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
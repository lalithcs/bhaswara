import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Ticket, Sparkles } from 'lucide-react';
import logo from './ge.png';
import byte from './posters/CSE/byte.png';
import haunt from './posters/CSE/haunt.png';
import overall from './posters/bhasov.jpg';
function App() {
  const sections = [
    {
      name: 'Bhaswara 2025',
      posters: [
        {
          title:'Welcome to Bhaswara 2025',
          image:overall,
          desc: 'Join us for an unforgettable experience filled with innovation, creativity, and excitement.',
        }
      ]
    },
    {
      name: 'Dept of CSE',
      posters: [
        {
          title: 'AI & Machine Learning',
          image:
            byte,
          desc: 'Deep dive into AI',
        },
        {
          title: 'Web Development',
          image:
            haunt,
          desc: 'Full-stack mastery',
        },
        {
          title: 'Blockchain',
          image:
            'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80',
          desc: 'Crypto & Web3',
        },
      ],
    },
    {
      name: 'Dept of AIML',
      posters: [
        {
          title: '24-Hour Coding Challenge',
          image:
            'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80',
          desc: 'Code your way to victory',
        },
        {
          title: 'IoT Innovation',
          image:
            'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
          desc: 'Smart solutions',
        },
        {
          title: 'Game Development',
          image:
            'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80',
          desc: 'Create amazing games',
        },
      ],
    },
    {
      name: 'Dept of DS',
      posters: [
        {
          title: 'Battle of Bands',
          image:
            'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80',
          desc: 'Rock the stage',
        },
        {
          title: 'Dance Competition',
          image:
            'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80',
          desc: 'Show your moves',
        },
        {
          title: 'Fashion Show',
          image:
            'https://images.unsplash.com/photo-1469488865564-c2de10f69f96?auto=format&fit=crop&q=80',
          desc: 'Walk the ramp',
        },
      ],
    },
    {
      name: 'Dept of CS',
      posters: [
        {
          title: 'Cricket Tournament',
          image:
            'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80',
          desc: 'Battle on the field',
        },
        {
          title: 'Basketball',
          image:
            'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80',
          desc: 'Shoot hoops',
        },
        {
          title: 'Chess',
          image:
            'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80',
          desc: 'Strategic warfare',
        },
      ],
    },
    {
      name: 'Dept of IT & IOT',
      posters: [
        {
          title: 'Valorant Tournament',
          image:
            'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80',
          desc: 'Tactical shooting',
        },
        {
          title: 'FIFA Championship',
          image:
            'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&q=80',
          desc: 'Virtual football',
        },
        {
          title: 'PUBG Mobile',
          image:
            'https://images.unsplash.com/photo-1580327344181-c1163234e5a0?auto=format&fit=crop&q=80',
          desc: 'Battle royale',
        },
      ],
    },
    {
      name: 'Dept of ECE',
      posters: [
        {
          title: 'Digital Art',
          image:
            'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&q=80',
          desc: 'Create masterpieces',
        },
        {
          title: 'UI/UX Design',
          image:
            'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80',
          desc: 'Design experiences',
        },
        {
          title: '3D Modeling',
          image:
            'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?auto=format&fit=crop&q=80',
          desc: 'Shape the future',
        },
      ],
    },
    {
      name: 'Dept of EEE',
      posters: [
        {
          title: 'Startup Pitch',
          image:
            'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80',
          desc: 'Present your ideas',
        },
        {
          title: 'Case Study',
          image:
            'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80',
          desc: 'Solve real problems',
        },
        {
          title: 'Marketing Challenge',
          image:
            'https://images.unsplash.com/photo-1552664688-cf412ec27db2?auto=format&fit=crop&q=80',
          desc: 'Create campaigns',
        },
      ],
    },
    {
      name: 'Dept of CIVIL',
      posters: [
        {
          title: 'Robot Wars',
          image:
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
          desc: 'Battle of machines',
        },
        {
          title: 'Line Following',
          image:
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
          desc: 'Precision control',
        },
        {
          title: 'Drone Racing',
          image:
            'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
          desc: 'Sky high competition',
        },
      ],
    },
    {
      name: 'Dept of MECH',
      posters: [
        {
          title: 'Photo Walk',
          image:
            'https://drive.google.com/file/d/18yVc0Lk_78oiyN44c_4Uxh1XGYuOrxy_/view?usp=sharing',
          desc: 'Capture moments',
        },
        {
          title: 'Portrait Contest',
          image:
            'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80',
          desc: 'Frame faces',
        },
        {
          title: 'Street Photography',
          image:
            'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?auto=format&fit=crop&q=80',
          desc: 'Urban stories',
        },
      ],
    },
    {
      name: 'Dept of MBA',
      posters: [
        {
          title: 'Poetry Slam',
          image:
            'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80',
          desc: 'Express yourself',
        },
        {
          title: 'Creative Writing',
          image:
            'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80',
          desc: 'Weave stories',
        },
        {
          title: 'Debate',
          image:
            'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80',
          desc: 'Voice your opinion',
        },
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState<{ [key: string]: number }>(
    {}
  );

  const nextSlide = (sectionName: string, maxSlides: number) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [sectionName]: ((prev[sectionName] || 0) + 1) % maxSlides,
    }));
  };

  const prevSlide = (sectionName: string, maxSlides: number) => {
    setCurrentSlide((prev) => ({
      ...prev,
      [sectionName]: ((prev[sectionName] || 0) - 1 + maxSlides) % maxSlides,
    }));
  };

  const handleRegister = () => {
    window.open('https://forms.gle/peWEf7xuS1BNrjFV7', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-black text-white">
      {/* Header with Logo Space */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="w-48 h-12 bg-white/5 rounded flex items-center justify-center text-xl font-space font-bold">
            <img src={logo} alt="Logo"  />

          </div>
          <motion.button
            onClick={handleRegister}
            className="bg-white/10 backdrop-blur px-6 py-2 rounded-full font-space text-sm font-bold hover:bg-white/20 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Ticket className="w-4 h-4" />
            Register Now
          </motion.button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')] bg-cover bg-center bg-fixed opacity-20" />
        <motion.div
          className="text-center z-10 px-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8 flex justify-center"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
          >
            <Sparkles className="w-20 h-20 text-purple-400" />
          </motion.div>
          <h1 className="font-space text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            BHASWARA
            <br />
            2025
          </h1>
          <p className="font-poppins text-xl md:text-2xl mb-8 text-gray-300">
            Unleash Your Potential • Ignite Innovation • Create Memories
          </p>
        </motion.div>
      </section>

      {/* Event Sections */}
      {sections.map((section) => (
        <section key={section.name} className="py-16 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-space text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              {section.name}
            </h2>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide[section.name] || 0}
                  className="relative aspect-video"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <img
                    src={section.posters[currentSlide[section.name] || 0].image}
                    alt={section.posters[currentSlide[section.name] || 0].title}
                    className="w-full h-[600px] object-cover rounded-2xl shadow-2xl shadow-purple-500/20"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent rounded-b-2xl">
                    <h3 className="font-space text-3xl font-bold mb-2">
                      {section.posters[currentSlide[section.name] || 0].title}
                    </h3>
                    <p className="font-poppins text-lg text-gray-300">
                      {section.posters[currentSlide[section.name] || 0].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() => prevSlide(section.name, section.posters.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => nextSlide(section.name, section.posters.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer className="py-8 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-poppins text-gray-400">
          <p>© Bhaswara 2k25. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Ticket, Sparkles } from 'lucide-react';
import logo from './geelo.png';
import byte from './posters/CSE/byte.png';
import haunt from './posters/CSE/haunt.png';
import overall from './posters/bhasov.jpg';
import postdept from './eventli';
function App() {
  const sections = [
    {
      name: 'Bhaswara 2025',
      posters: [
        {
          title: 'Welcome to Bhaswara 2025',
          image: overall,
          desc: 'Join us for an unforgettable experience filled with innovation, creativity, and excitement.',
        }
      ]
    },
    {
      name: 'Dept of CSE',
      posters: [
        {
          title: 'Byte Busters',
          image: byte,
          desc: 'Code blindly',
        },
        {
          title: 'Haunt Hustlers',
          image: haunt,
          desc: 'Get ready to be spooked',
        },
        {
          title: 'The Final Move',
          image:
            postdept.CSE.general[0],
          desc: 'Choose your path wisely',
        },
      ],
    },
    {
      name: 'Dept of AIML',
      posters: [
        {
          title: 'Poster Presentation',
          image:
            postdept.CSE.AIML[2],
          desc: 'Bring out the talent in you and make creative posters!',
        },
        {
          title: 'Debug The Dark',
          image:
            postdept.CSE.AIML[0],
          desc: 'Unravel the mystery',
        },
        {
          title: 'Mystic Hustlers',
          image:
            postdept.CSE.AIML[1],
          desc: 'Solve the puzzle',
        },
        {
          title: 'Squidrift',
          image:
            postdept.CSE.AIML[3],
          desc: 'Dive into the unknown',
        }
      ],
    },
    {
      name: 'Dept of DS',
      posters: [
        {
          title: 'Fun Byte',
          image:
            postdept.CSE.DS[0],
          desc: 'Fun with data',
        },
        {
          title: 'Mystery Marathon',
          image:
            postdept.CSE.DS[1],
          desc: 'Solve the mystery',
        },
        {
          title: 'Project Expo',
          image:
            postdept.CSE.DS[2],
          desc: 'Showcase your projects',
        },
        {
          title: 'Squid Game',
          image:
            postdept.CSE.DS[2],
          desc: 'Survive the game',
        }
      ],
    },
    {
      name: 'Dept of CS',
      posters: [
        {
          title: 'Escape the Reality',
          image:
            postdept.CSE.CS[0],
          desc: 'Escape the room',
        },
        {
          title: 'Lights Camera Action!',
          image:
            postdept.CSE.CS[1],
          desc: 'Capture the moment',
        },
        {
          title: 'Spy X Hacker',
          image:
            postdept.CSE.CS[2],
          desc: 'Uncover the secrets',
        },
      ],
    },
    {
      name: 'Dept of IT & IOT',
      posters: [
        {
          title: 'GOC 3.0',
          image:
            postdept.IT[0],
          desc: 'Game of Cricket',
        },
        {
          title: 'Hunt for Glory',
          image:
            postdept.IT[1],
          desc:'Fight for your glory in BGMI',
        },
        {
          title: 'IOT Escape Room',
          image:
            postdept.IT[2],
          desc: 'Escape the room',
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
          title: 'Electric Tambola',
          image:
            postdept.EEE[0],
          desc: 'Play Tambola with Electric Symbols!',
        },
        {
          title: 'Energy Hunt',
          image:
            postdept.EEE[1],
          desc: 'Solve real problems',
        },
        {
          title: 'Project Expo',
          image:
            postdept.EEE[2],
          desc: 'Showcase your projects',
        },
        {
          title: 'Poster Presentation',
          image:
            postdept.EEE[3],
          desc: 'Show your creativity',
        },
        {
          title: 'Paper Presentation',
          image:
            postdept.EEE[4],
          desc: 'Present your research',
        },
        {
          title: 'Buzz Bar Game',
          image:
            postdept.EEE[5],
          desc: 'Play for Joy!',
        },
      ],
    },
    {
      name: 'Dept of CIVIL',
      posters: [
        {
          title: 'Brain Busters',
          image:
            postdept.CIVIL[0],
          desc: 'Cement your knowledge',
        },
        {
          title: 'Draft it Right!',
          image:
            postdept.CIVIL[1],
          desc: 'Where ideas take shape',
        },
        {
          title: 'The Great Search',
          image:
            postdept.CIVIL[2],
          desc: 'The fun starts where challenge begins!',
        },
        {
          title: 'Paper Presentation',
          image:
            postdept.CIVIL[3],
          desc: 'Present your research',
        },
        {
          title: 'Poster Presentation',
          image:
            postdept.CIVIL[4],
          desc: 'Show your creativity',
        },
        {
          title: 'Project Expo',
          image:
            postdept.CIVIL[5],
          desc: 'Showcase your projects',
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
          title:'Ignite Ventures',
          image:
            postdept.MBA[0],
          desc: 'Pitch your startup',
        },
        {
          title: 'Market Masters',
          image:
            postdept.MBA[1],
          desc: 'Master the market',
        },
        {
          title: 'Modern Maven',
          image:
            postdept.MBA[2],
          desc: 'Innovate and inspire by being the Young Manager',
        },
        {
          title: 'Paper Presentation',
          image:
            postdept.MBA[3],
          desc: 'Present your research',
        },
        {
          title: 'Quiz Masters',
          image:
            postdept.MBA[4],
          desc: 'Test your knowledge',
        },
        {
          title: 'Poster Presentation',
          image:
            postdept.MBA[5],
          desc: 'Showcase your creativity',
        }
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

      {/* Department Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {sections.map((section) => (
          <button
            key={section.name}
            onClick={() =>
              document
                .getElementById(section.name.replace(/\s+/g, "-").toLowerCase())
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-4 py-2 bg-purple-700 hover:bg-purple-600 text-white rounded-xl transition font-medium"
          >
            {section.name}
          </button>
        ))}
      </div>

      {/* Event Sections */}
      {sections.map((section) => (
        <section
          id={section.name.replace(/\s+/g, "-").toLowerCase()}
          key={section.name}
          className="py-16 border-t border-white/10"
        >
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
                    className="w-full h-[800px] object-cover rounded-2xl shadow-2xl shadow-purple-500/20"
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

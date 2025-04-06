import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const technicalPosters = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    title: 'Hackathon 2024'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80',
    title: 'Robotics Workshop'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    title: 'AI Summit'
  }
];

const nonTechnicalPosters = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    title: 'Cultural Night'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80',
    title: 'Battle of Bands'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80',
    title: 'Dance Competition'
  }
];

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-96">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          className="w-full h-full object-cover rounded-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white/30 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <h3 className="text-white text-xl font-semibold bg-black/50 backdrop-blur-sm inline-block px-4 py-2 rounded">
          {images[currentIndex].title}
        </h3>
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div 
      className="pt-20 min-h-screen bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80')`,
      }}
    >
      <div className="min-h-screen bg-gradient-to-b from-purple-900/90 to-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-12 text-white">Event Gallery</h1>
          
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-white">Technical Events</h2>
              <Carousel images={technicalPosters} />
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-white">Non-Technical Events</h2>
              <Carousel images={nonTechnicalPosters} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
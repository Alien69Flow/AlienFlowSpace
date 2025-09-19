import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface EcoProduct {
  name: string;
  image: string;
  description: string;
}

const EcoProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products: EcoProduct[] = [
    {
      name: "Cannabis Leaf Earrings",
      image: "/lovable-uploads/eco-earrings.jpg",
      description: "Sterling silver hexagon earrings with 24k gold cannabis leaf design"
    },
    {
      name: "Orange Eco Trucker Hat",
      image: "/lovable-uploads/eco-hat-orange.png", 
      description: "Sustainable trucker hat with embroidered alien cannabis logo"
    },
    {
      name: "Navy Alien Hat",
      image: "/lovable-uploads/eco-hat-navy.png",
      description: "Premium navy trucker hat with golden alien symbol"
    },
    {
      name: "Organic Bucket Hat",
      image: "/lovable-uploads/eco-bucket-hat.png",
      description: "100% organic cotton bucket hat with eco-friendly design"
    },
    {
      name: "Organic Baseball Cap",
      image: "/lovable-uploads/eco-baseball-cap.png",
      description: "Sustainable baseball cap with embroidered alien logo"
    },
    {
      name: "Classic Snapback",
      image: "/lovable-uploads/eco-snapback.png",
      description: "Black and teal snapback with geometric alien symbol"
    },
    {
      name: "Camo Dad Hat",  
      image: "/lovable-uploads/eco-dad-hat.png",
      description: "Green camo dad hat with cannabis leaf embroidery"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="relative w-full h-40 bg-alien-space-dark/60 rounded-lg overflow-hidden backdrop-blur-sm border border-alien-gold/20">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevProduct}
            className="p-2 bg-alien-space-dark/80 rounded-full border border-alien-gold/30 hover:border-alien-gold/50 transition-all duration-300"
          >
            <ChevronLeft className="h-4 w-4 text-alien-gold" />
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="w-20 h-20 rounded-lg overflow-hidden border border-alien-gold/30">
              <img
                src={products[currentIndex].image}
                alt={products[currentIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="max-w-48">
              <h4 className="text-sm font-semibold text-alien-gold font-[Exo] mb-1">
                {products[currentIndex].name}
              </h4>
              <p className="text-xs text-gray-300 font-[Exo] leading-relaxed">
                {products[currentIndex].description}
              </p>
            </div>
          </div>
          
          <button
            onClick={nextProduct}
            className="p-2 bg-alien-space-dark/80 rounded-full border border-alien-gold/30 hover:border-alien-gold/50 transition-all duration-300"
          >
            <ChevronRight className="h-4 w-4 text-alien-gold" />
          </button>
        </div>
      </div>
      
      {/* Indicators */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-alien-gold' : 'bg-alien-gold/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default EcoProductCarousel;
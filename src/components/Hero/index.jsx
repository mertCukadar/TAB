import React from 'react';
import ContactRedirectLine from '../ContactRedirectLine';
import Button from '../Button';

function Hero() {
  return (
    <div className="md:h-[40vh]">
        <div className="flex justify-center mx-auto">
        <div className="text-white mb-20 w-[100%] md:w-[80%] pt-10 md:pt-36 text-center space-y-10">
          <div className="flex flex-col space-y-6">
            <h1 className="text-5xl md:text-6xl">Become a Next-Gen Marketer</h1>
            <p className="text-4xl md:text-4xl">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="text-2xl md:text-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto exercitationem esse.
            </p>
          </div>
          <div className="flex justify-center space-x-3">
            <Button className="bg-orange-400 text-black" routName="GET STARTED" />
            <Button className="bg-transparent border border-black" routName="LEARN MORE" />
          </div>
        </div>
      </div>
      {/* Background YouTube video */}
      <div className="w-full h-full">
        <iframe
          src="https://www.youtube.com/embed/NhJ_Kz5F5a0?autoplay=1&mute=1&loop=1&playlist=NhJ_Kz5F5a0"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full object-cover"
        ></iframe>
      </div>

      {/* Content over video */}
    
    </div>
  );
}

export default Hero;

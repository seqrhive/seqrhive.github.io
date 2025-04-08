import React from "react";
import Image from "next/image";

function Landing() {
  return (
    <div className="landing min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-12 md:py-20">
          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              With SeqrHive, secure your
              <span className="text-[#485ED8] block"> cyberspace </span>
              and your <span className="text-[#485ED8]">digital</span> life
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-[600px]">
              In today's interconnected and technology-driven landscape, ensuring
              the safety and confidentiality of our digital assets has become more
              essential than ever. We, at SeqrHive, are dedicated to protecting
              your system, application, or your network from potential security
              breaches and vulnerabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-[#485ED8] text-white rounded-lg hover:bg-[#3a4ab0] transition-all duration-300 font-semibold">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-[#485ED8] text-[#485ED8] rounded-lg hover:bg-[#485ED8] hover:text-white transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/hero-security.svg"
                alt="Cybersecurity Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;

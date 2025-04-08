import { services } from "@/constants";
import { handleHover } from "@/constants/functions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import roboImage from "../public/robo-3.png";
import { useRouter } from "next/router";

function Services({ limit }) {
  const router = useRouter();
  const Data = limit ? services.slice(0, limit) : services;

  return (
    <section className="services py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-[#485ED8]">Services</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              In collaboration with the top penetration testing companies across
              India and the USA, we provide optimal risk management. We offer a
              complete range of security and penetration testing services to
              generate smart, simplistic, and safer user experiences.
            </p>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Image 
              src={roboImage} 
              alt="Security Robot" 
              width={200} 
              className="transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Data.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => router.push(service?.location)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#485ED8] bg-opacity-10 rounded-lg flex items-center justify-center">
                  <span className={`sprite-icon-2 item-3-${index}`}></span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {service?.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {service?.description}
              </p>
            </div>
          ))}
        </div>

        {limit && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-[#485ED8] text-white rounded-lg hover:bg-[#3a4ab0] transition-all duration-300 font-semibold"
            >
              View All Services
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default Services;

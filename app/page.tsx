import React from "react";
import { Button } from "../components/ui/button";
import { LightBulbIcon, Cog6ToothIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-100 via-white to-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 py-24 text-center shadow-inner bg-transparent">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
            <span className="text-gray-800">People</span> Smart <span className="text-gray-800">Tools</span> 
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-2xl">
          Empowering your business with expert solutions. 
        </p>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto py-20 px-4" id="about">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Us</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Acme Consulting Group is dedicated to helping organizations achieve their goals through strategic planning, operational excellence, and innovative solutions. Our experienced consultants partner with you to drive measurable results and lasting impact.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-20 px-4" id="services">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <LightBulbIcon className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Strategy Consulting</h3>
              <p className="text-gray-600">
                Develop winning strategies to drive growth and competitive advantage.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <Cog6ToothIcon className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Operations Improvement</h3>
              <p className="text-gray-600">
                Optimize processes and increase efficiency across your organization.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <DevicePhoneMobileIcon className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">Digital Transformation</h3>
              <p className="text-gray-600">
                Leverage technology to innovate and future-proof your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Ready to transform your business?
        </h2>
        <Button className="px-10 py-5 text-lg font-semibold shadow-lg hover:scale-105 transition" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </section>

      {/* Contact Section */}
      <section className="max-w-3xl mx-auto py-20 px-4" id="contact">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-4 text-lg">
          Email: <a href="mailto:info@acmeconsulting.com" className="text-blue-600 underline">info@acmeconsulting.com</a>
        </p>
        <p className="text-gray-600 text-lg">
          Phone: <a href="tel:+1234567890" className="text-blue-600 underline">+1 (234) 567-890</a>
        </p>
      </section>
    </div>
  );
}

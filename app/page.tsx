import React from "react";
import { Button } from "../components/ui/button";
import { RiTeamFill } from "react-icons/ri";
import { MdOutlineModelTraining } from "react-icons/md";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center flex-1 py-30 lg:py-50 text-center shadow-inner bg-transparent relative overflow-hidden"
        style={{
          backgroundImage: "url(static/angryboss.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div className="absolute inset-0 bg-white/50 pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
              <span className="text-gray-800">People</span> Smart{" "}
              <span className="text-gray-800">Tools</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-2xl"> Is your organization facing relationship challenges?</p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-3xl mx-auto py-20 px-4" id="about">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Managers and Supervisors</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
Are you a manager or supervisor dealing with constant nitpicking and conflicts among employees? Do frequent communication breakdowns in the workplace leave you feeling exhausted and stressed? Managing workplace relationships can be incredibly challenging.
        </p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-20 px-4" id="services">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            Manager Services
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto mb-8 text-center">
          We invite you to browse our site, where you’ll find detailed information about our approach, case studies, client testimonials, the services we offer, and free resources. Discover how we can assist you in achieving your goals.
          </p>
          <div className="grid md:grid-cols-2 gap-10 justify-center">
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <RiTeamFill className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                Coaching
              </h3>
              <p className="text-gray-600 text-center">
                Develop winning strategies to drive growth and competitive
                advantage.
              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/about-jim/conflict-management" className="inline-block px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/80 transition">Conflict Management</a>
                <a href="/about-jim/employee-productivity" className="inline-block px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/80 transition">Employee Productivity</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <MdOutlineModelTraining className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                Training
              </h3>
              <p className="text-gray-600 text-center">
                Optimize processes and increase efficiency across your
                organization.
              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/about-jim/unlocking-team-dynamics" className="inline-block px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/80 transition">Unlocking Team Dynamics</a>
                <a href="/about-jim/personal-influence" className="inline-block px-4 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/80 transition">Personal Influence</a>
              </div>
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

    </div>
  );
}

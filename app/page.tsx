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

      {/* How We Help Section */}
      <section className="max-w-3xl mx-auto py-20 px-4" id="how-we-help">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">How We Help</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          At People Smart Tools, we specialize in empowering managers of businesses and municipalities to enhance their influence with their staff. Owners and managers turn to us when they realize their team isn’t performing at its best. We assist in selecting, developing, and retaining outstanding employees who are fully engaged.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our coaching and training programs focus on developing workplace interpersonal communication skills, helping managers improve their influence over those they supervise. When workplace relationships are strong, employees are engaged and contribute significantly to the success of their assignments.
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
                Personalized, one-on-one guidance to help managers and supervisors overcome challenges, build confidence, and unlock their full leadership potential. Our coaching empowers you to navigate complex team dynamics, improve communication, and achieve lasting results for your organization.
              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/about-jim/conflict-management" className="text-primary font-semibold underline hover:text-primary/80 transition">Conflict Management</a>
                <a href="/about-jim/employee-productivity" className="text-primary font-semibold underline hover:text-primary/80 transition">Employee Productivity</a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition group">
              <MdOutlineModelTraining className="h-10 w-10 text-primary mb-4 mx-auto group-hover:scale-110 transition" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                Training
              </h3>
              <p className="text-gray-600 text-center">
                Interactive workshops and practical training sessions designed to strengthen your team’s interpersonal skills, boost collaboration, and foster a positive workplace culture. Our programs equip your staff with proven tools to resolve conflict, enhance productivity, and drive organizational success.
              </p>
              <div className="mt-4 flex flex-col items-center gap-2">
                <a href="/about-jim/unlocking-team-dynamics" className="text-primary font-semibold underline hover:text-primary/80 transition">Unlocking Team Dynamics</a>
                <a href="/about-jim/personal-influence" className="text-primary font-semibold underline hover:text-primary/80 transition">Personal Influence</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why a Coach for Managers Section */}
      <section className="max-w-3xl mx-auto py-20 px-4" id="why-coach">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Why a Coach for Managers?</h2>
        <h3 className="text-2xl font-semibold mb-2 text-gray-700">What is a Manager’s Coach?</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          A Manager’s Coach is a professional who helps managers work smart and live fulfilled.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-gray-700">Is a Manager’s Coach Right for Me?</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Managers who are highly successful often have a coach. Coaching helps align your goals and emotions, providing benefits that last for many years and aiding in upward mobility. Everyone, even those already successful, benefits from a coach.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-gray-700">Jim’s Coaching Qualifications</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Jim earned a Master’s Degree in Science and a Bachelor’s Degree in Biology & Psychology from Western State Colorado University in Gunnison, Colorado. He holds two designations from Target Training International®: Success Insights® DISC Certified and Success Insights® Driving Forces Certified. These certifications require biannual training updates. Additionally, he is a Certified Health Coach with Dr. Sears Wellness Institute.
        </p>
        <h3 className="text-2xl font-semibold mb-2 text-gray-700">Jim’s Coaching Approach</h3>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Jim’s holistic approach revolves around understanding your natural skills, communication style, and driving forces (values). Using state-of-the-art assessment tools and active listening, Jim gains a comprehensive picture of your strengths and concerns.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Together, you will plan the scope and process of the project. A summary of the plans is crafted into a Letter of Engagement, which aligns your goals and serves as a guide. Regular meetings will help you accomplish your desired outcomes. Jim is available for phone calls, texts, and in-person meetings as needed. Fees are charged by the project, not hourly.
        </p>
      </section>

      {/* About Jim Rooney – The Manager’s Coach Section */}
      <section className="max-w-3xl mx-auto py-20 px-4" id="about-jim">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Jim Rooney – The Manager’s Coach</h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          For over 30 years, Jim has provided personal skills management training, coaching, and consulting to a wide variety of businesses and municipalities. People Smart Tools specializes in helping people work well with people. Owners and managers call on us when they know they are not getting the best out of their team.
        </p>
        <a href="/about-jim" className="text-primary font-semibold underline hover:text-primary/80 transition mb-8 inline-block">Learn More About Jim</a>
        <p className="text-gray-600 text-lg leading-relaxed mt-6">
          Still not sure? Get in touch to learn more about how Jim and People Smart Tools can help you transform your team dynamics and enhance workplace productivity.
        </p>
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

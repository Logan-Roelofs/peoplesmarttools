import React from "react";
import { Button } from "../../components/ui/button";
import { MdOutlineModelTraining } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

export default function UnlockingTeamDynamicsPage() {
  return (
    <div className="flex flex-col">
      {/* Intro Section */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-800">
          Training: <span className="text-primary">Unlocking Team Dynamics</span>
        </h1>
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Have You Ever Been Mismanaged?</h2>
        <p className="text-gray-700 text-lg mb-4">
          Mismanagement can significantly impact personal productivity. When employees feel mismanaged, they become disengaged, contributing very little to their assignments’ success. In many work environments, a significant portion of human capital is spent on relationship issues, diverting focus from excelling at work.
        </p>
      </section>

      {/* Disengagement Section */}
      <section className="max-w-3xl mx-auto py-6 px-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Is Your Staff Disengaged?</h2>
        <p className="text-gray-700 text-lg mb-4">
          Disengaged employees can negatively affect other employees and customers. According to recent Gallup studies, employee disengagement costs U.S. employers a staggering $300 billion annually. Properly managed or engaged employees usually take fewer sick days and generate an average of 43% more revenue.
        </p>
      </section>

      {/* Impact of Mismanagement */}
      <section className="max-w-3xl mx-auto py-6 px-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">The Impact of Mismanagement</h2>
        <p className="text-gray-700 text-lg">
          Mismanaged employees feel disempowered and not trusted. Understanding how a person prefers to interact with their environment and their communication preferences is the first step to gaining rapport and trust. Your effectiveness with people will increase dramatically when you have a good understanding of behavior and driving forces.
        </p>
      </section>

      {/* Workshop Section */}
      <section className="max-w-3xl mx-auto py-10 px-4">
        <div className="flex items-center gap-3 mb-4">
          <MdOutlineModelTraining className="h-7 w-7 text-primary" />
          <h2 className="text-2xl font-bold text-gray-800">People Smart Workshop: Unlocking Team Dynamics</h2>
        </div>
        <p className="text-gray-700 text-lg mb-4">
          At our People Smart Tools Unlocking Team Dynamics workshop, we delve into the heart of effective communication and team synergy. Here’s how it works:
        </p>
        <ol className="list-decimal pl-6 text-gray-700 text-lg mb-4 space-y-2">
          <li>
            <span className="font-semibold">Understanding Energies and Stressors:</span> We help you decode what truly energizes and stresses your team members. By uncovering their unique behaviors and driving forces, we pave the way for enhanced productivity and personal growth.
          </li>
          <li>
            <span className="font-semibold">The Talent Insights® Report:</span> As part of the training process, each participant receives a personalized Talent Insights® Report. This report, provided by Target Training International® (TTI), combines two powerful lenses:
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="font-semibold">DISC:</span> Reveals the “how” of an individual—how they communicate, interact, and approach tasks.
              </li>
              <li>
                <span className="font-semibold">12 Driving Forces:</span> Uncovers the “why”—the deeper motivations and values that drive their actions.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">A Wealth of Insights:</span> Your Talent Insights® Report isn’t just a document; it’s a treasure trove of self-awareness and team dynamics:
            <ul className="list-disc pl-6 mt-2">
              <li>Communication Tips: Understand how to connect effectively with others.</li>
              <li>Value to the Organization: Recognize your unique contributions.</li>
              <li>Strengths: Leverage what makes you exceptional.</li>
              <li>Areas for Improvement: Identify growth opportunities.</li>
              <li>Time Wasters: Pinpoint habits that hinder productivity.</li>
            </ul>
          </li>
        </ol>
        <p className="text-gray-700 text-lg">
          Join us on this journey of discovery, where understanding yourself and your colleagues becomes a powerful tool for success. Let’s elevate your team’s communication game!
        </p>
      </section>

      {/* Success Story */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <div className="bg-gray-100 border-l-4 border-primary rounded-lg p-6 mb-4 flex items-start gap-3">
          <FaQuoteLeft className="text-primary h-7 w-7 mt-1" />
          <div>
            <h3 className="text-lg font-bold mb-2 text-primary">Success Story: DISC Training for County Staff</h3>
            <p className="italic text-gray-700 mb-2">
              “I just wanted to drop you this note regarding the Communication Skills Workshop that you did for McCulloch County. We continue to see great results from the program! Immediately after the workshop, we experienced a decrease in workplace tension between employees and between elected officials and staff. Productivity skyrocketed! All of us learned to be more accepting of others’ communication styles and to use our own styles to the best advantage in the organization. Months after the program, we are still reaping the benefits.
            </p>
            <p className="italic text-gray-700 mb-2">
              Jim, I wish every organization, family, church, or team could be exposed to this training. I will certainly recommend you at every opportunity. Thanks for the great job and, more importantly, the great results.”
            </p>
            <p className="font-semibold text-gray-800">— R.Y., McCulloch County Judge</p>
          </div>
        </div>
      </section>

      {/* Understanding Employee Actions and Motivations */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Understanding Employee Actions and Motivations</h2>
        <h3 className="text-lg font-bold mb-2 text-gray-800">Why Learn About Behavior and Driving Forces?</h3>
        <p className="text-gray-700 text-lg mb-4">
          Learning about DISC and Driving Forces helps individuals better understand themselves and others, enhancing personal and professional relationships. Understanding DISC temperament and Driving Forces accomplishes the following:
        </p>
        <ul className="list-disc pl-6 text-gray-700 text-lg mb-4 space-y-1">
          <li>Increased Understanding of Self — Accept Self Without Condemnation</li>
          <li>Increased Understanding of Others — Quit Trying to Change Them</li>
          <li>Decreased Tension — Better Work Focus</li>
          <li>More Effective Communication — Enhanced Relationships</li>
          <li>Increased Productivity — More Collaboration</li>
        </ul>
      </section>

      {/* Immediate Results and Continuous Improvement */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Immediate Results and Continuous Improvement</h2>
        <p className="text-gray-700 text-lg mb-4">
          Employers begin to see positive changes immediately after the training process. People realize that differences are good and can be effectively used to make an organization more successful. The Talent Insights® in-depth Report allows attendees to continually learn about their behavior and Driving Forces, improving their skills both personally and professionally. The benefits of this training process are endless.
        </p>
      </section>

      {/* Applications of DISC and Driving Forces */}
      <section className="max-w-3xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Applications: DISC and Driving Forces</h2>
        <p className="text-gray-700 text-lg mb-4">
          Understanding the interplay between DISC (which reveals communication styles) and Driving Forces (which uncover motivations) creates a win-win scenario. Here’s how it improves various aspects:
        </p>
        <ul className="list-disc pl-6 text-gray-700 text-lg mb-4 space-y-1">
          <li>Personal development</li>
          <li>Performance improvement</li>
          <li>Career motivation</li>
          <li>Strategic planning</li>
          <li>Hiring</li>
          <li>Coaching and advancement</li>
          <li>Conflict resolution</li>
          <li>New employee orientation</li>
          <li>Retention strategies for key employees</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Get Started with Unlocking Team Dynamics
        </h2>
        <p className="text-gray-700 text-lg mb-6 max-w-2xl mx-auto">
          Ready to enhance your team’s communication and productivity? Contact People Smart Tools today to learn more about our Dynamic Communication Training and how it can benefit your organization.
        </p>
        <Button className="px-8 py-4 text-lg font-semibold shadow-lg hover:scale-105 transition" asChild>
          <a href="mailto:info@peoplesmarttools.com">Let’s Chat – Send us an email</a>
        </Button>
      </section>
    </div>
  );
}

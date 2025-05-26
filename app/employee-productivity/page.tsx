import React from "react";
import { Button } from "../../components/ui/button";

export default function EmployeeProductivityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-800">
          Coaching: Employee Productivity
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
          Unlocking Your Team’s Full Potential
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Employee productivity is crucial for the success of any organization. At People Smart Tools, our Employee Productivity Coaching is designed to help you unlock your team’s full potential, enhancing efficiency, engagement, and overall workplace performance.
        </p>
      </section>

      {/* Why Focus on Employee Productivity */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Why Focus on Employee Productivity?
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed mb-4">
          <li>Increased organizational efficiency</li>
          <li>Higher quality of work</li>
          <li>Greater employee satisfaction and retention</li>
          <li>Improved bottom line</li>
        </ul>
        <p className="text-gray-600 text-lg leading-relaxed">
          Focusing on productivity not only benefits the organization but also helps employees achieve their personal and professional goals.
        </p>
      </section>

      {/* Approach Section */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Our Approach to Employee Productivity Coaching
        </h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2 text-gray-700">Initial Assessment</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            We start with a comprehensive assessment of your current productivity levels. This involves understanding your team’s workflow, identifying bottlenecks, and evaluating individual performance metrics.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2 text-gray-700">Customized Coaching Plans</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Based on the assessment, we develop a tailored coaching plan that targets specific productivity challenges within your team. Our plans are designed to address unique organizational needs and goals.
          </p>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2 text-gray-700">Skill Development and Training</h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-2">
            We provide training and development in key areas that impact productivity, such as:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
            <li>Time management and prioritization</li>
            <li>Goal setting and achievement</li>
            <li>Effective communication and collaboration</li>
            <li>Stress management and work-life balance</li>
            <li>Motivation and engagement strategies</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2 text-gray-700">Continuous Improvement</h3>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our coaching includes ongoing support and follow-up sessions to ensure sustained productivity improvements. We offer regular check-ins, progress reviews, and additional resources to help your team maintain high levels of performance.
          </p>
        </div>
      </section>

      {/* Benefits for Employees */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Benefits of Coaching For Employees
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
          <li>Clearer understanding of job expectations</li>
          <li>Enhanced skills for managing workload and time</li>
          <li>Greater job satisfaction and motivation</li>
          <li>Improved career development opportunities</li>
        </ul>
      </section>

      {/* Benefits for Managers and Supervisors */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Benefits of Coaching For Managers and Supervisors
        </h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
          <li>Enhanced ability to drive team performance</li>
          <li>Improved leadership and management skills</li>
          <li>Increased team cohesion and collaboration</li>
          <li>Better alignment of team goals with organizational objectives</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="max-w-3xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Get Started with Employee Productivity Coaching
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Ready to enhance your team’s productivity and achieve greater organizational success? Contact People Smart Tools today to learn more about our Employee Productivity Coaching services and how we can help you achieve your goals.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          For more information on our other coaching and training services, please browse our website or reach out to us directly. We are here to help you achieve your organizational goals.
        </p>
        <Button className="px-10 py-5 text-lg font-semibold shadow-lg hover:scale-105 transition" asChild>
          <a href="mailto:info@peoplesmarttools.com">Let’s Chat – Send us an email</a>
        </Button>
      </section>
    </div>
  );
}

import React from "react";
import { Button } from "../../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ContactUsPage() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4 text-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 uppercase tracking-wide">
        Learn More About Our Coaching
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Jim's Image */}
        <Image
          src="static/Jim.webp"
          alt="Jim - People Smart Tools"
          width={160}
          height={160}
          className="w-40 h-40 object-cover rounded-lg shadow mb-4 md:mb-0"
        />
        {/* Description and Contact */}
        <div className="flex-1">
          <p className="mb-4 text-lg leading-relaxed">
            For over 30 years, Jim has provided personal skills management training, coaching, and consulting to a wide variety of businesses and municipalities. People Smart Tools specializes in helping people work well with people. Owners and managers call on us when they know they are not getting the best out of their team.
          </p>
          <Button asChild>
            <Link href="/contact-us">
              Contact Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

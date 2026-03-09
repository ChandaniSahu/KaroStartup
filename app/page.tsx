"use client";

import {
  Rocket,
  Users,
  Target,
  Briefcase,
  Factory,
  Store,
  ArrowRight
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-[#10211e]">

     <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 px-6">

      {/* Decorative Dots */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-[#fc4139] rounded-full"></div>
      <div className="absolute bottom-24 right-16 w-2 h-2 bg-[#10211e] rounded-full"></div>
      <div className="absolute top-40 right-40 w-3 h-3 bg-orange-300 rounded-full"></div>

      {/* Curved Ribbon */}
      <svg
        className="absolute bottom-0 left-0 w-full opacity-40"
        viewBox="0 0 1000 200"
      >
        <path
          d="M0 150 Q400 0 800 120 T1200 150"
          stroke="#fc4139"
          strokeWidth="4"
          fill="transparent"
        />
      </svg>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-[#10211e]">
            Pitch Your Startup to{" "}
            <span className="text-[#fc4139]">
              India’s Top Investors
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Karo Pitch connects founders from across India with investors,
            giving startups the opportunity to present their ideas and raise
            funding.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">
            <button className="bg-[#fc4139] text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Apply to Pitch
            </button>

            <button className="border border-[#10211e] px-6 py-3 rounded-lg hover:bg-[#10211e] hover:text-white transition">
              Explore Startups
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-12">

            <div>
              <p className="text-2xl font-bold text-[#fc4139]">5000+</p>
              <p className="text-gray-500 text-sm">Startups</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#fc4139]">200+</p>
              <p className="text-gray-500 text-sm">Investors</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-[#fc4139]">10K+</p>
              <p className="text-gray-500 text-sm">Community</p>
            </div>

          </div>

        </div>


        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">

          {/* Gradient Glow */}
          <div className="absolute w-[420px] h-[420px] rounded-full bg-[#fc4139]/20 blur-3xl"></div>

          <div className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-gradient-to-br from-[#fc4139]/30 to-white rounded-full blur-2xl"></div>

          <div className="absolute bottom-0 -left-10 w-[180px] h-[180px] bg-gradient-to-tl from-[#10211e]/10 to-[#fc4139]/20 rounded-full blur-2xl"></div>

          {/* Hero Image */}
          <Image
            src="/heroIllustration.jpg"
            alt="Startup pitching"
            width={500}
            height={500}
            className="relative z-10 w-full max-w-md rounded-tl-3xl rounded-br-3xl shadow-xl hover:scale-105 transition duration-300"
          />

        </div>

      </div>
    </section>

      {/* ABOUT */}
      <section className="py-24 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Karo Pitch</h2>

        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          Thousands of founders across India are building amazing businesses
          but lack access to investors and visibility. Karo Pitch connects
          these founders with investors through curated pitch events and a
          startup discovery platform.
        </p>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50 px-6">
        <h2 className="text-4xl text-center font-bold mb-16">
          How It Works
        </h2>

        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">

          <div className="text-center">
            <Rocket className="mx-auto text-[#fc4139]" size={40}/>
            <h3 className="mt-4 font-semibold text-lg">Apply</h3>
            <p className="text-gray-500 mt-2">Submit your pitch deck.</p>
          </div>

          <div className="text-center">
            <Target className="mx-auto text-[#fc4139]" size={40}/>
            <h3 className="mt-4 font-semibold text-lg">Get Shortlisted</h3>
            <p className="text-gray-500 mt-2">Our team reviews applications.</p>
          </div>

          <div className="text-center">
            <Users className="mx-auto text-[#fc4139]" size={40}/>
            <h3 className="mt-4 font-semibold text-lg">Pitch Live</h3>
            <p className="text-gray-500 mt-2">Present your startup to investors.</p>
          </div>

          <div className="text-center">
            <ArrowRight className="mx-auto text-[#fc4139]" size={40}/>
            <h3 className="mt-4 font-semibold text-lg">Raise Funding</h3>
            <p className="text-gray-500 mt-2">Secure investment and scale.</p>
          </div>

        </div>
      </section>

      {/* WHO CAN APPLY */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl text-center font-bold mb-16">
          Who Can Apply
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
            <Store className="text-[#fc4139]" />
            <h3 className="text-xl font-semibold mt-4">D2C Brands</h3>
            <p className="text-gray-500 mt-2">
              Consumer brands selling directly to customers.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
            <Briefcase className="text-[#fc4139]" />
            <h3 className="text-xl font-semibold mt-4">SaaS Startups</h3>
            <p className="text-gray-500 mt-2">
              Software startups solving real problems.
            </p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition">
            <Factory className="text-[#fc4139]" />
            <h3 className="text-xl font-semibold mt-4">Manufacturing</h3>
            <p className="text-gray-500 mt-2">
              Innovative manufacturing businesses.
            </p>
          </div>

        </div>
      </section>

      {/* INVESTORS */}
      <section className="py-24 bg-gray-50 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Meet Investors Looking for the Next Big Startup
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Angel investors, venture capitalists, and startup mentors attend
          Karo Pitch to discover promising startups.
        </p>

        <div className="flex justify-center gap-10 mt-10 flex-wrap text-gray-500">
          <div className="border px-6 py-3 rounded-lg">Investor Logo</div>
          <div className="border px-6 py-3 rounded-lg">Investor Logo</div>
          <div className="border px-6 py-3 rounded-lg">Investor Logo</div>
        </div>
      </section>

      {/* FEATURED STARTUPS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl text-center font-bold mb-16">
          Featured Startups
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold">GreenCart</h3>
            <p className="text-[#fc4139] text-sm mt-1">D2C Brand</p>
            <p className="text-gray-500 mt-3">
              Sustainable grocery products for modern households.
            </p>
          </div>

          <div className="shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold">Finlytics</h3>
            <p className="text-[#fc4139] text-sm mt-1">SaaS Startup</p>
            <p className="text-gray-500 mt-3">
              AI-powered analytics for businesses.
            </p>
          </div>

          <div className="shadow-md p-6 rounded-xl">
            <h3 className="text-xl font-semibold">BuildMate</h3>
            <p className="text-[#fc4139] text-sm mt-1">Manufacturing</p>
            <p className="text-gray-500 mt-3">
              Smart construction materials.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT KAROSTARTUP */}
      <section className="py-24 bg-gray-50 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">About KaroStartup</h2>

        <p className="text-gray-600 max-w-3xl mx-auto">
          KaroStartup is a startup media platform sharing founder stories,
          startup insights, and ecosystem news across India. It has built a
          strong community of entrepreneurs and innovators.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold">
          Ready to Pitch Your Startup?
        </h2>

        <div className="flex justify-center gap-6 mt-8 flex-wrap">
          <button className="bg-[#fc4139] text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transition">
            Apply Now
          </button>

          <button className="border border-[#10211e] px-8 py-3 rounded-lg hover:bg-[#10211e] hover:text-white transition">
            Partner With Us
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t text-gray-500">
        © 2026 Karo Pitch. All rights reserved.
      </footer>

    </main>
  );
}
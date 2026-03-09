"use client";

import {
  Rocket,
  Users,
  Target,
  Factory,
  Store,
  ArrowRight,
  Leaf,
  Code,
  Map
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  const steps = [
    { title: "Apply", description: "Submit your startup pitch.", icon: Rocket },
    { title: "Get Shortlisted", description: "Our team reviews your application.", icon: Target },
    { title: "Pitch Live", description: "Present your startup to investors.", icon: Users },
    { title: "Raise Funding", description: "Secure investment and scale.", icon: ArrowRight },
  ];

  const categories = [
    { title: "D2C Brands", description: "Brands selling products directly to consumers.", icon: Store },
    { title: "Consumer Startups", description: "Startups focused on consumer services and apps.", icon: Users },
    { title: "MSMEs", description: "Small and medium enterprises looking to scale.", icon: Rocket },
    { title: "SaaS Startups", description: "Software products serving global businesses.", icon: Code },
    { title: "Manufacturing Businesses", description: "Product and industrial manufacturing companies.", icon: Factory },
    { title: "Bharat-focused Startups", description: "Startups building solutions for tier-2 and tier-3 India.", icon: Map },
    { title: "Sustainable Startups", description: "Climate and sustainability focused innovation.", icon: Leaf },
  ];

  const startups = [
    { name: "GreenCart", category: "D2C Brand", description: "Sustainable grocery products for modern households." },
    { name: "Finlytics", category: "SaaS Startup", description: "AI-powered analytics for businesses." },
    { name: "BuildMate", category: "Manufacturing", description: "Smart construction materials." },
  ];

  const investors = ["investor1.svg", "investor2.svg", "investor3.svg"];

  return (
    <main className="bg-white text-[#10211e]">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 px-6">
        <div className="absolute top-20 left-6 w-3 h-3 bg-[#fc4139] rounded-full"></div>
        <div className="absolute bottom-24 right-6 w-2 h-2 bg-[#10211e] rounded-full"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-orange-300 rounded-full"></div>
        <svg className="absolute bottom-0 left-0 w-full opacity-40" viewBox="0 0 1000 200">
          <path d="M0 150 Q400 0 800 120 T1200 150" stroke="#fc4139" strokeWidth="4" fill="transparent" />
        </svg>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#10211e]"
            >
              Pitch Your Startup to <span className="text-[#fc4139]">India’s Top Investors</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 text-lg text-gray-600 max-w-xl"
            >
              Karo Pitch connects founders from across India with investors, giving startups the opportunity to present their ideas and raise funding.
            </motion.p>

            {/* Buttons */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-10 "
            >
            <div className="flex gap-4 mt-8 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(252,65,57,0.5)" }}
                className="bg-[#fc4139] text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Apply to Pitch
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#10211e", color: "#fff" }}
                className="border border-[#10211e] px-8 py-3 rounded-lg transition"
              >
                Explore Startups
              </motion.button>
            </div></motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-10 mt-12"
            >
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
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center items-center">
            <div className="absolute w-64 h-64 md:w-[420px] md:h-[420px] rounded-full bg-[#fc4139]/20 blur-3xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 md:w-[200px] md:h-[200px] bg-gradient-to-br from-[#fc4139]/30 to-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 -left-10 w-36 h-36 md:w-[180px] md:h-[180px] bg-gradient-to-tl from-[#10211e]/10 to-[#fc4139]/20 rounded-full blur-2xl"></div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src="/heroIllustration.jpg"
                alt="Startup pitching"
                width={500}
                height={500}
                className="relative z-10 w-full max-w-xs sm:max-w-md md:max-w-lg rounded-tl-3xl rounded-br-3xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT KARO PITCH */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#10211e]">About Karo Pitch</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Thousands of founders across India are building amazing businesses but lack access to investors and visibility. Karo Pitch connects these founders with investors through curated pitch events and a startup discovery platform.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Image
            src="/pitchKaro.webp"
            alt="Startup pitching"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-[#10211e]"
          >
            How It Works
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="group p-6 sm:p-8 rounded-xl bg-white shadow-md text-center hover:bg-[#fc4139] transition duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="mx-auto text-[#fc4139] group-hover:text-white" size={40} />
                <h3 className="mt-4 font-semibold text-lg group-hover:text-white">{step.title}</h3>
                <p className="text-gray-500 mt-2 group-hover:text-white">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* WHO CAN APPLY */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-[#10211e]"
          >
            Who Can Apply
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                className="bg-white shadow-md p-6 sm:p-8 rounded-xl border border-gray-200 hover:border-red-300 hover:-translate-y-2 transition"
                whileHover={{ scale: 1.03, y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Icon className="text-[#fc4139]" size={32} />
                <h3 className="text-xl font-semibold mt-4">{category.title}</h3>
                <p className="text-gray-500 mt-2">{category.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* INVESTORS */}
      <section className="py-24 bg-gray-50 px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Meet Investors Looking for the Next Big Startup
        </motion.h2>

      <motion.p 
      initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto">
          Angel investors, venture capitalists, and startup mentors attend
          Karo Pitch to discover promising startups.
        </motion.p>
        <motion.div
          className="flex justify-center gap-10 mt-10 flex-wrap text-gray-500"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {investors.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 300, delay: i * 0.1 }}
            >
              <Image src={`/${img}`} width={40} height={40} alt={`Investor ${i + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FEATURED STARTUPS */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl text-center font-bold mb-16"
        >
          Featured Startups
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {startups.map((startup, index) => (
            <motion.div
              key={index}
              className="hover:scale-105 transition shadow-md p-6 rounded-xl"
              style={{ boxShadow: '0 0 6px rgba(252, 65, 57, 0.8), 0 0 10px rgba(252, 65, 57, 0.6)' }}
              whileHover={{ scale: 1.05, y: -3 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold">{startup.name}</h3>
              <p className="text-[#fc4139] text-sm mt-1">{startup.category}</p>
              <p className="text-gray-500 mt-3">{startup.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ABOUT KAROSTARTUP */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">About KaroStartup</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              KaroStartup is a startup media platform sharing founder stories, publishing thousands of startup journeys, and connecting a large community of over 100,000 founders across India.
            </p>
            <div className="flex flex-wrap gap-10 mt-8">
              <div>
                <p className="text-2xl font-bold text-[#fc4139]">5000+</p>
                <p className="text-gray-500 text-sm">Startup Stories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#fc4139]">100K+</p>
                <p className="text-gray-500 text-sm">Community</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Image
              src="/karoStartup.avif"
              alt="KaroStartup community"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-[#10211e] text-white px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Ready to Pitch Your Startup?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-gray-300"
        >
          Join the next Karo Pitch event and showcase your startup.
        </motion.p>


        <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              
            ><div className="flex justify-center gap-6 mt-8 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(252,65,57,0.5)" }}
            className="bg-[#fc4139] text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Apply Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#000" }}
            className="border border-white px-8 py-3 rounded-lg transition"
          >
            Partner With Us
          </motion.button>
        </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center text-gray-500 text-sm border-t">
        © 2025 KaroStartup. All rights reserved.
      </footer>
    </main>
  );
}
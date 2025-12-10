import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
// FIXED: Changed 'Fagavel' to 'FaGavel'

import { FaBullseye, FaShieldAlt ,FaChartLine, FaBalanceScale, FaGavel, FaSearchDollar } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa6";
import logo from "../assets/logo.png"; // Make sure this path points to your actual logo file

// --- Data Configuration ---

const evidencePoints = [
  { 
    icon: <FaBalanceScale />, 
    title: "Zero Visibility", 
    desc: "Your potential clients are searching, but they’re finding your competitors. You’re invisible in the digital courtroom." 
  },
  { 
    icon: <FaSearchDollar />, 
    title: "Bleeding Budget", 
    desc: "Spending thousands on PPC with no ROI? You’re funding Google, not your firm’s growth." 
  },
  { 
    icon: <FaGavel />, 
    title: "Weak Leads", 
    desc: "Your phone rings, but it’s price shoppers and dead ends. You need cases, not conversations." 
  },
];

const whyUsPoints = [
      { 
        icon: <FaShieldAlt />, 
        title: "Build a Strong Brand", 
        desc: "We ensure your firm shows up with authority when people search for legal help." 
      },
      { 
        icon: <FaChartLine />, 
        title: "High-Intent Rankings", 
        desc: "Rank for keywords that drive retainers, not just casual traffic." 
      },
      { 
        icon: <FaBullseye />, 
        title: "Targeted Acquisition", 
        desc: "Run ads that reach the right audience—people who need a lawyer now." 
      },
      { 
        icon: <FaUserCheck />, 
        title: "Client Generator", 
        desc: "Turn your website into a machine that books consultations automatically." 
      },
    ];

export default function CampaignLawFirms() {
  // State for the interactive company name input
  const [company, setCompany] = useState("");

  const scrollToCTA = () => {
    document.getElementById('hunt-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-lime-400 selection:text-black">
      <Helmet>
        <title>Law Firm Growth — Campaign | GrowthShark</title>
        <meta
          name="description"
          content="Get the visibility and paying clients your practice truly deserves. No fluff. Just clarity, direction, and real solutions."
        />
      </Helmet>

      <div className="relative overflow-hidden">
        {/* Global Background Ambience */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(132,204,22,0.15),transparent_30%)] pointer-events-none" />

        <main className="relative max-w-6xl mx-auto px-6 pb-20 pt-16 md:pt-24">
          
          {/* --- HERO SECTION (Updated content) --- */}
          <section className="text-center space-y-8 mb-24">
            {/* Logo / Badge - Kept commented out as in original */}
            {/* <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-2 backdrop-blur hover:bg-white/10 transition cursor-default">
               <img src={logo} alt="GrowthShark" className="h-6 w-auto" /> 
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-lime-300 uppercase">
                Digital Marketing For Elite Law Firms
              </span>
            </div> */}

            <div className="space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                Getting Clients Shouldn’t <br className="hidden md:block" /> Feel Like a{" "}
                <span className="text-[#3bb2ff] ">
                  Court Battle
               
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                How many weeks have passed without a strong client inquiry? How often do you see competitors winning the cases you could handle better? And how many times have you thought, *“I just need the right clients to find me.”*
              </p>
              
              <p className="text-gray-400 italic">
                If you are a lawyer struggling with visibility, referral slowdowns, or pro bono work that is not paying the bills, you are not alone. Today’s legal market is crowded, digital-first, and brutally competitive.
              </p>

              <p className="text-gray-400 italic">
                "The attorneys getting attention are not always the best, they are the ones being found online."
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-white mb-2">Your Expertise Deserves Clients Who Value it.</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  That is where GrowthShark steps in. We help lawyers, solo practitioners, and law firms build an online presence that attracts paying clients, not just casual inquiries. Instead of waiting for referrals or walking into networking events hoping someone remembers you, we make sure your ideal clients <span className="italic text-white">come to you.</span>
                </p>
              </div>

            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
              <button 
                onClick={scrollToCTA}
                className="px-8 py-4 rounded-full bg-lime-400 text-black font-bold text-lg shadow-[0_0_30px_rgba(132,204,22,0.4)] hover:shadow-[0_0_40px_rgba(132,204,22,0.6)] hover:brightness-110 transition transform hover:-translate-y-1"
              >
                Book Consultation
              </button>
              <button 
                onClick={scrollToCTA}
                className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 hover:border-lime-300/50 hover:text-lime-300 transition"
              >
                See The Evidence
              </button>
            </div>
          </section>

          {/* --- EVIDENCE / PAIN POINTS SECTION - No content change needed here, data is correct --- */}
{/*           <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Evidence Against Your Current Strategy</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Most law firms are guilty of wasting budget on invisible campaigns. Is your firm suffering from these symptoms?
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {evidencePoints.map((item, index) => (
                <div
                  key={index}
                  className="group bg-[#0b0f1a] border border-white/10 rounded-2xl p-8 space-y-4 hover:border-[#3bb2ff]/50 transition duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#3bb2ff]/10 blur-[40px] rounded-full group-hover:bg-[#3bb2ff]/20 transition" />
                  
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-white/5 text-[#3bb2ff] text-2xl group-hover:scale-110 transition">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section> */}

          {/* --- SOLUTION / METRICS SECTION (Updated content) --- */}
          <section className="mt-24 bg-gradient-to-b from-[#0e121e] to-black border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-lime-400/5 blur-[100px] pointer-events-none" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded bg-lime-400/10 text-lime-400 text-xs font-bold tracking-widest uppercase">
                  The GrowthShark Advantage
                </div>
                <h3 className="text-3xl md:text-5xl font-bold">
                  Imagine This <span className="text-lime-400">Instead:</span>
                </h3>
                <p className="text-lg text-gray-300">
                  That is the power of smart digital marketing designed specifically for lawyers.
                </p>

                <ul className="space-y-4 mt-4">
                  {/* Directly using the bullet points from the document. The array was already present in the original code, but I'll make sure it matches the document exactly. */}
                  {[
                    "Your firm shows up when people search for legal help",
                    "Clients read about your expertise and trust you before calling",
                    "Your calendar fills with booked consultations, not cold outreach",
                    "Competitors stop eating into your market share"
                  ].map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center">
                        <svg className="w-3 h-3 text-black font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-200">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Dashboard UI - Kept as is */}
              <div className="relative">
                <div className="relative bg-[#000] border border-white/10 rounded-2xl p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Monthly Case Value</p>
                      <div className="flex items-end gap-3">
                        <span className="text-4xl font-bold text-white">₹142,500</span>
                        <span className="text-sm text-lime-400 font-bold bg-lime-400/10 px-2 py-1 rounded">+34%</span>
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Total Inquiries</p>
                      <span className="text-2xl font-bold text-white">248</span>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-6">
                    <ProgressBar label="Your Firm (GrowthShark)" value={85} color="bg-lime-400" />
                    <ProgressBar label="Nearest Competitor" value={45} color="bg-[#3bb2ff]" />
                    <ProgressBar label="Market Average" value={20} color="bg-gray-600" />
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                       <span className="text-gray-300">Live Case Tracking</span>
                    </div>
                    <span className="text-gray-500">Data Source: Client CRM</span>
                  </div>
                </div>
                
                {/* Decorative Elements behind card */}
                <div className="absolute -z-10 -bottom-5 -right-5 w-full h-full border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm"></div>
              </div>
            </div>
          </section>

          {/* --- WHY US SECTION (Updated content) --- */}
          <section className="mt-24 text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Why Do Lawyers Choose GrowthShark?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              We understand the legal world is different. You cannot sound salesy. You cannot make vague claims. You need credibility, authority, clarity, and reputation.
            </p>
            
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {whyUsPoints.map((item, index) => (
    <div
      key={index}
      className="bg-white/5 border border-white/10 rounded-xl p-6 text-left hover:bg-white/[0.07] transition duration-300"
    >
      {/* UPDATED: Displays the icon instead of the bullet point */}
      <div className="text-lime-400 text-3xl mb-4">
        {item.icon}
      </div>
      
      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
    </div>
  ))}
</div>
          </section>

          {/* --- FINAL CTA SECTION (Updated content and ID for scrolling) --- */}
          <section id="hunt-section" className="relative bg-black text-white px-6 py-16 overflow-hidden  max-w-6xl mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
              <div className="w-[300px] h-[300px] bg-sky-400/20 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto text-center">
              
              <p className="text-xl sm:text-2xl font-bold text-white mb-6">
                If you have been thinking, <span className="italic text-lime-400">“I should be getting more cases than this”</span>, then this is your moment.
              </p>

              <p className="text-lg text-gray-300 mb-8">
                A 15-minute call with our team will show you where your funnel is leaking and how to fix it.
              </p>
              
              <p className="text-xl text-white font-semibold mb-10">
                No fluff. Just clarity, direction, and real solutions.
              </p>

              {/* CTA Button - Using a standard link style instead of the interactive input/h2 structure */}
              <a
                href="https://calendly.com/proriterz101/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-lime-400 shadow-lg shadow-black/50 hover:shadow-[0_0_40px_rgba(132,204,22,0.6)] hover:brightness-110 transition transform hover:-translate-y-1 text-black font-bold px-10 py-4 rounded-full text-lg duration-300"
              >
                
                  
                  Book your free 15-minute consultation with GrowthShark today
                
              </a>

              <p className="text-gray-400 text-sm mt-4">
                and let's help your practice get the visibility and paying clients it truly deserves.
              </p>
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
// --- Helper Components ---

function ProgressBar({ label, value, color }) {
  return (
    <div>
      <div className="flex justify-between text-xs uppercase tracking-wider text-gray-400 mb-2">
        <span>{label}</span>
        <span className="text-white font-semibold">{value}%</span>
      </div>
      <div className="w-full h-3 rounded-full bg-gray-800 overflow-hidden">
        <div 
          className={`h-full rounded-full ${color} shadow-[0_0_10px_currentColor] transition-all duration-1000 ease-out`} 
          style={{ width: `${value}%` }} 
        />
      </div>
    </div>
  );
}
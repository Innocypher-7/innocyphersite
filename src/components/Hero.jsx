import React from "react";
import FadeIn from "./common/FadeIn";
import {
  ChevronRight,
  Cpu,
  Binary,
  Network,
  Fingerprint,
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
    >
      {/* Background Tech Gradients & Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>

        <Cpu className="absolute top-[20%] left-[10%] w-16 h-16 text-blue-500/10 animate-[bounce_4s_infinite]" />
        <Binary className="absolute bottom-[20%] right-[15%] w-24 h-24 text-purple-500/10 animate-[pulse_3s_infinite]" />
        <Network className="absolute top-[40%] right-[5%] w-12 h-12 text-blue-400/10 animate-[spin_12s_linear_infinite]" />
        <Fingerprint className="absolute bottom-[30%] left-[5%] w-20 h-20 text-indigo-500/10 animate-[bounce_5s_infinite]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <FadeIn delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 mb-8 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-300">
              INNOCYPHER transforms ideas into powerful digital products
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Build Smart. Scale Fast. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 animate-pulse">
              Grow with INNOCYPHER.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={500}>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
            Transform your business with custom web apps, mobile solutions,
            cloud infrastructure, and AI-powered automation. We deliver
            results faster, smarter, and more affordable — from simple tools
            to complex enterprise systems.
          </p>
        </FadeIn>

        <FadeIn delay={700}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="group w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 hover:-translate-y-1"
            >
              Start Your Project Today{" "}
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 text-white font-medium transition-all text-center hover:-translate-y-1"
            >
              Get a Free Consultation
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;

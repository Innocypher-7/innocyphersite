import React from "react";
import FadeIn from "./common/FadeIn";
import { WHY_CHOOSE_US } from "../../config";
import { Fingerprint, Rocket, Globe, Wifi } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-slate-900/50 relative border-t border-slate-800/50 overflow-hidden"
    >
      <Wifi className="absolute top-10 right-10 w-32 h-32 text-slate-800/20 -rotate-45" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <FadeIn direction="left">
              <h2 className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-3 flex items-center gap-2">
                <Fingerprint className="w-4 h-4" /> Who We Are
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Experienced Engineers who understand real-world business
                challenges.
              </h3>
              <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                We are a specialized software development firm that helps
                companies transform complex business logic into scalable
                digital products. We build the invisible engine behind modern
                businesses—high-performance, secure software and cloud
                integrations that scale.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              <FadeIn delay={200} direction="up">
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-colors group">
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-purple-400 transition-colors">
                    <Rocket className="text-purple-500 w-5 h-5 group-hover:animate-bounce" />{" "}
                    Mission
                  </h4>
                  <p className="text-slate-400 text-sm">
                    To empower startups and businesses by delivering innovative
                    and cost-effective software solutions.
                  </p>
                </div>
              </FadeIn>
              <FadeIn delay={400} direction="up">
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-colors group">
                  <h4 className="text-xl font-bold text-white mb-2 flex items-center gap-2 group-hover:text-blue-400 transition-colors">
                    <Globe className="text-blue-500 w-5 h-5 group-hover:animate-[spin_3s_linear_infinite]" />{" "}
                    Vision
                  </h4>
                  <p className="text-slate-400 text-sm">
                    To become a trusted global technology partner for startups
                    and enterprises.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn direction="right" delay={300}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl transform -rotate-3 animate-[pulse_4s_ease-in-out_infinite]"></div>
              <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-2xl backdrop-blur-md hover:border-blue-500/30 transition-all">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Why Choose INNOCYPHER
                </h3>
                <div className="space-y-4">
                  {WHY_CHOOSE_US.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/50 transition-all group hover:-translate-y-1"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-blue-500/50 shadow-[0_0_10px_rgba(0,0,0,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        {item.icon}
                      </div>
                      <span className="font-medium text-slate-200 group-hover:text-white">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;

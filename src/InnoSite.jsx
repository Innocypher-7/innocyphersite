import React, { useState, useEffect, useRef } from "react";
import {
  NAV_LINKS,
  SERVICES,
  PROCESS_STEPS,
  TECHNOLOGIES,
  INDUSTRIES,
  POC_FEATURES,
  WHY_CHOOSE_US,
  CONTACT_INFO,
  SOCIAL_LINKS,
  SITE_TEXT,
  LEGAL_TEXT,
} from "./config";
import {
  Menu,
  X,
  Globe,
  Rocket,
  Terminal,
  CheckCircle,
  Layout,
  Server,
  Database,
  Cloud,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Cpu,
  Binary,
  Network,
  Wifi,
  Fingerprint,
} from "lucide-react";

// --- COMPONENTS ---

// Custom Hook & Component for Scroll Animations
const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    const current = domRef.current;
    if (current) observer.observe(current);
    return () => current && observer.unobserve(current);
  }, []);

  const getTransform = () => {
    if (isVisible) return "translate-y-0 translate-x-0 scale-100 opacity-100";
    switch (direction) {
      case "up":
        return "translate-y-12 scale-95 opacity-0";
      case "down":
        return "-translate-y-12 scale-95 opacity-0";
      case "left":
        return "translate-x-12 scale-95 opacity-0";
      case "right":
        return "-translate-x-12 scale-95 opacity-0";
      default:
        return "translate-y-12 scale-95 opacity-0";
    }
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Tech Interactive Cursor
const TechCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePos = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Determine if hovering over clickable element
      const target = e.target;
      const isClickable =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button");
      setIsHovering(!!isClickable);
    };
    window.addEventListener("mousemove", updatePos);
    return () => window.removeEventListener("mousemove", updatePos);
  }, []);

  return (
    <>
      <div
        className={`hidden md:block fixed top-0 left-0 w-10 h-10 border rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out mix-blend-screen ${isHovering ? "scale-150 bg-blue-500/20 border-purple-400" : "scale-100 border-blue-500/50"}`}
        style={{ transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)` }}
      />
      <div
        className={`hidden md:block fixed top-0 left-0 w-2 h-2 bg-purple-400 rounded-full pointer-events-none z-[9999] transition-all duration-75 ease-out`}
        style={{ transform: `translate(${pos.x - 4}px, ${pos.y - 4}px)` }}
      />
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer group"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <span className="font-bold text-2xl tracking-tighter text-white">
              INNOCYPHER
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) =>
              link.name === "Start Project" ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 hover:-translate-y-0.5"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-white hover:text-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all text-sm font-medium"
                >
                  {link.name}
                </a>
              ),
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full animate-in slide-in-from-top-4">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default function InnoSite() {
  const [formStatus, setFormStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [legalModal, setLegalModal] = useState(null); // null | "privacy" | "terms"
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormStatus("");

    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL || "http://localhost:5000",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            subject: "Website Inquiry",
            message: formData.message,
          }),
        }
      ).then((res) => res.json());

      if (response.success) {
        setFormStatus(
          "✓ Message sent successfully! We will get back to you soon."
        );
        setFormData({ name: "", email: "", message: "" });
        e.target.reset?.();
      } else {
        setFormStatus(
          response.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus(
        "Error sending message. Please check your connection and try again."
      );
    } finally {
      setIsLoading(false);
      setTimeout(() => setFormStatus(""), 6000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      {/* Global Tech Styles & Cursor Override */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        html { scroll-behavior: smooth; }
        a, button { cursor: crosshair; }
        .text-shadow-glow { text-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
      `,
        }}
      />

      <TechCursor />
      <Navbar />

      {/* HERO SECTION */}
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
                {SITE_TEXT.hero.badge}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-tight">
              {SITE_TEXT.hero.heading} <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 animate-pulse">
                {SITE_TEXT.hero.headingHighlight}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={500}>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
              {SITE_TEXT.hero.description}
            </p>
          </FadeIn>

          <FadeIn delay={700}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="group w-full sm:w-auto px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                {SITE_TEXT.hero.ctaPrimary}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-blue-500/50 text-white font-medium transition-all text-center hover:-translate-y-1"
              >
                {SITE_TEXT.hero.ctaSecondary}
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ABOUT SECTION */}
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
                  {SITE_TEXT.about.title}
                </h3>
                <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                  {SITE_TEXT.about.description} We build the invisible engine
                  behind modern businesses—high-performance, secure software and
                  cloud integrations that scale.
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
                      To empower startups and businesses by delivering
                      innovative and cost-effective software solutions.
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

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold tracking-wider text-purple-500 uppercase mb-3 flex items-center justify-center gap-2">
                <Cpu className="w-4 h-4" /> Our Services
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Software Solutions
              </h3>
              <p className="text-slate-400 text-lg">
                We offer end-to-end development services to bring your vision to
                life, utilizing the latest technologies and best practices.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 150} direction="up">
                <div className="group h-full p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 transform translate-x-1/4 -translate-y-1/4">
                    {service.icon}
                  </div>
                  <div className="mb-6 inline-flex p-3 rounded-2xl bg-slate-950 border border-slate-800 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all">
                    {service.icon}
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h4>
                  <ul className="space-y-3">
                    {service.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-400 group-hover:text-slate-300 transition-colors"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-500/70 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section
        id="process"
        className="py-24 bg-slate-900/50 border-y border-slate-800/50 relative overflow-hidden"
      >
        <Network className="absolute bottom-10 left-10 w-48 h-48 text-blue-900/10 -z-10 animate-[pulse_4s_infinite]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-3 flex justify-center items-center gap-2">
                <Terminal className="w-4 h-4" /> How We Work
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Our Development Process
              </h3>
              <p className="text-slate-400 text-lg">
                A streamlined, transparent approach to ensure your project is
                delivered on time, within budget, and above expectations.
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-purple-500/0">
              <div className="absolute top-0 left-0 h-full w-1/4 bg-blue-400 blur-sm animate-[slide_3s_ease-in-out_infinite] opacity-50"></div>
            </div>

            <style
              dangerouslySetInnerHTML={{
                __html: `
              @keyframes slide {
                0% { left: 0%; transform: translateX(-100%); }
                100% { left: 100%; transform: translateX(100%); }
              }
            `,
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {PROCESS_STEPS.map((step, idx) => (
                <FadeIn key={idx} delay={idx * 200}>
                  <div className="relative z-10 flex flex-col items-center text-center group">
                    <div className="w-24 h-24 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-blue-500 text-slate-400 group-hover:text-blue-400 flex items-center justify-center mb-6 transition-all duration-500 shadow-xl group-hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] group-hover:-translate-y-2 relative">
                      {/* Step Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm border-4 border-slate-950 group-hover:bg-purple-500 transition-colors">
                        {idx + 1}
                      </div>
                      <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform">
                        {React.cloneElement(step.icon, {
                          className: "w-8 h-8",
                        })}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-slate-400 text-sm px-4">{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES & TECH SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeIn direction="left">
                <h2 className="text-sm font-bold tracking-wider text-purple-500 uppercase mb-3 flex items-center gap-2">
                  <Binary className="w-4 h-4" /> Technologies We Use
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Powered by Modern Architecture
                </h3>
                <p className="text-slate-400 text-lg mb-8">
                  We leverage the best tools for the job, focusing on scalable,
                  secure, and maintainable capabilities rather than being tied
                  to a single stack.
                </p>
              </FadeIn>

              <div className="space-y-6">
                {TECHNOLOGIES.map((tech, idx) => (
                  <FadeIn key={idx} delay={idx * 150} direction="left">
                    <div className="flex gap-4 group hover:bg-slate-900/50 p-3 -m-3 rounded-2xl transition-colors cursor-pointer border border-transparent hover:border-slate-800">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 group-hover:text-purple-400 group-hover:border-purple-500/50 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                        {tech.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                          {tech.title}
                        </h4>
                        <p className="text-slate-400">{tech.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn direction="right" delay={300} className="h-full">
              <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center group hover:border-blue-500/30 transition-all shadow-2xl">
                {/* Abstract Tech Graphic */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-950 transition-all duration-700 group-hover:scale-110"></div>

                {/* Animated grid background */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(#334155 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    opacity: 0.2,
                  }}
                ></div>

                <div className="relative z-10 grid grid-cols-2 gap-4 p-8 w-full max-w-md">
                  <div className="aspect-square rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm flex flex-col items-center justify-center gap-3 hover:bg-blue-900/40 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-1 transition-all">
                    <Layout className="w-10 h-10 text-blue-400 animate-pulse" />
                    <span className="text-sm font-medium text-white">
                      Frontend
                    </span>
                  </div>
                  <div className="aspect-square rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm flex flex-col items-center justify-center gap-3 hover:bg-purple-900/40 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:-translate-y-1 transition-all">
                    <Server className="w-10 h-10 text-purple-400 animate-[bounce_3s_infinite]" />
                    <span className="text-sm font-medium text-white">
                      Backend
                    </span>
                  </div>
                  <div className="aspect-square rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm flex flex-col items-center justify-center gap-3 hover:bg-emerald-900/40 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-1 transition-all">
                    <Database className="w-10 h-10 text-emerald-400" />
                    <span className="text-sm font-medium text-white">
                      Database
                    </span>
                  </div>
                  <div className="aspect-square rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm flex flex-col items-center justify-center gap-3 hover:bg-cyan-900/40 hover:border-cyan-500 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-1 transition-all">
                    <Cloud className="w-10 h-10 text-cyan-300 animate-[pulse_4s_infinite]" />
                    <span className="text-sm font-medium text-white">
                      Cloud
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STARTUPS SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-y border-slate-800/50 relative overflow-hidden">
        <Rocket className="absolute -top-10 -left-10 w-40 h-40 text-blue-500/10 rotate-45" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ⭐ Why Choose Innocypher?
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                We understand the fast-paced environment of building a Proof of
                Concept. We act as your technical co-founders, building products
                that scale as you grow.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POC_FEATURES.map((feature, idx) => (
              <FadeIn key={idx} delay={idx * 150} direction="up">
                <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl text-center hover:-translate-y-3 hover:border-purple-500/50 hover:shadow-[0_15px_30px_rgba(168,85,247,0.15)] transition-all duration-300 group h-full flex flex-col">
                  <div className="inline-flex p-4 rounded-full bg-slate-950 mb-4 group-hover:bg-purple-900/30 transition-colors group-hover:scale-110 mx-auto">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES SECTION */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-sm font-bold tracking-wider text-blue-500 uppercase mb-3 flex items-center justify-center gap-2">
                <Globe className="w-4 h-4" /> Industries We Serve
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Empowering Diverse Sectors
              </h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {INDUSTRIES.map((ind, idx) => (
              <FadeIn key={idx} delay={idx * 100} direction="up">
                <div className="flex flex-col items-center p-8 rounded-2xl bg-slate-900/30 border border-slate-800 hover:bg-slate-800 hover:border-blue-500/40 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(59,130,246,0.1)] transition-all text-center group">
                  <div className="transform group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300">
                    {ind.icon}
                  </div>
                  <h4 className="font-medium text-slate-300 group-hover:text-white mt-2">
                    {ind.name}
                  </h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="py-24 relative overflow-hidden bg-slate-900/50 border-t border-slate-800/50"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none animate-[pulse_5s_infinite]"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn direction="left">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Let's build something amazing together.
                </h2>
                <p className="text-slate-400 text-lg mb-10">
                  Send us your idea and we'll turn it into reality. Whether you
                  need a simple tool or a complex enterprise system, our team is
                  ready to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                      <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Email Us</p>
                      <p className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors">
                        {CONTACT_INFO.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                      <Phone className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Call Us</p>
                      <p className="text-lg font-medium text-white group-hover:text-purple-300 transition-colors">
                        {CONTACT_INFO.phone}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all">
                      <MapPin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Location</p>
                      <p className="text-lg font-medium text-white group-hover:text-blue-300 transition-colors">
                        {CONTACT_INFO.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={200}>
              <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden group hover:border-blue-500/30 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] pointer-events-none group-hover:bg-blue-500/20 transition-colors"></div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Send a Message
                </h3>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 relative z-10"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-400 mb-2"
                    >
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-slate-800"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-400 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all hover:bg-slate-800"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-400 mb-2"
                    >
                      Project Details
                    </label>
                    <textarea
                      required
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none hover:bg-slate-800"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/50 flex justify-center items-center gap-2 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <span className="inline-block animate-spin">⚙️</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                  {formStatus && (
                    <div className="animate-in fade-in slide-in-from-bottom-2">
                      <p
                        className={`text-sm text-center mt-4 py-3 rounded-lg border transition-all ${
                          formStatus.includes("successfully")
                            ? "bg-green-500/10 text-green-400 border-green-500/30"
                            : "bg-red-500/10 text-red-400 border-red-500/30"
                        }`}
                      >
                        {formStatus}
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* LEGAL MODAL */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
          <div className="max-w-3xl w-full bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl overflow-auto max-h-[90vh]">
            <div className="flex justify-between items-center px-5 py-4 border-b border-slate-800">
              <h3 className="text-xl font-bold text-white">
                {LEGAL_TEXT[legalModal].title}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="text-slate-400 hover:text-white"
                aria-label="Close legal dialog"
              >
                ✕
              </button>
            </div>
            <div className="px-5 py-4">
              <p className="text-slate-400 mb-2">
                Effective date: {LEGAL_TEXT[legalModal].effectiveDate}
              </p>
              <p className="text-slate-300 mb-4">
                {LEGAL_TEXT[legalModal].overview}
              </p>
              {LEGAL_TEXT[legalModal].sections.map((section) => (
                <div key={section.heading} className="mb-5">
                  <h4 className="text-lg font-semibold text-white mb-1">
                    {section.heading}
                  </h4>
                  <p className="text-slate-400">{section.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div
                className="flex items-center gap-2 mb-4 group cursor-pointer"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all">
                  <span className="text-white font-bold text-xl">I</span>
                </div>
                <span className="font-bold text-2xl tracking-tighter text-white">
                  INNOCYPHER
                </span>
              </div>
              <p className="text-slate-400 text-sm max-w-sm mb-6">
                {SITE_TEXT.footer.description}
              </p>
              {/* Social Placeholders */}
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-slate-800 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(59,130,246,0.3)] transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-blue-400 hover:translate-x-1 inline-block text-sm transition-transform"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="hover:text-blue-400 hover:translate-x-1 inline-block cursor-pointer transition-transform">
                  Mobile App Development
                </li>
                <br />
                <li className="hover:text-blue-400 hover:translate-x-1 inline-block cursor-pointer transition-transform">
                  Web Applications
                </li>
                <br />
                <li className="hover:text-blue-400 hover:translate-x-1 inline-block cursor-pointer transition-transform">
                  Custom Software
                </li>
                <br />
                <li className="hover:text-blue-400 hover:translate-x-1 inline-block cursor-pointer transition-transform">
                  POC MVP Dev
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              {SITE_TEXT.footer.copyrightTemplate.replace(
                "{year}",
                new Date().getFullYear(),
              )}
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <button
                type="button"
                onClick={() => setLegalModal("privacy")}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setLegalModal("terms")}
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

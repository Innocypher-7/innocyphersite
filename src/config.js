import React from "react";
import {
  Smartphone,
  Globe,
  Code,
  Monitor,
  Rocket,
  Search,
  PenTool,
  Terminal,
  CheckCircle,
  Headphones,
  Layout,
  Server,
  Database,
  Cloud,
  Lightbulb,
  ShoppingCart,
  Activity,
  BookOpen,
  DollarSign,
  Truck,
  Zap,
  Handshake,
  Clock,
  Layers,
  Lock,
} from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
  { name: "Start Project", href: "#contact" },
];

export const SERVICES = [
  {
    title: "Mobile App Development",
    icon: <Smartphone className="w-8 h-8 text-blue-400" />,
    items: ["Android", "iOS", "Cross-platform solutions"],
  },
  {
    title: "Web Application Development",
    icon: <Globe className="w-8 h-8 text-purple-400" />,
    items: ["Business websites", "Admin dashboards", "SaaS platforms"],
  },
  {
    title: "Software Solutions",
    icon: <Code className="w-8 h-8 text-blue-400" />,
    items: [
      "Custom business software",
      "CRM systems",
      "ERP systems",
      "Workflow automation",
    ],
  },
  {
    title: "System / Desktop Applications",
    icon: <Monitor className="w-8 h-8 text-purple-400" />,
    items: ["Windows software", "Automation tools", "Enterprise systems"],
  },
  {
    title: "Technical PoC Development",
    icon: <Rocket className="w-8 h-8 text-green-400" />,
    items: [
      "Feasibility Analysis",
      "Rapid Prototyping",
      "Technical De-risking",
      "Core Logic Validation",
    ],
  },
];

export const PROCESS_STEPS = [
  {
    title: "Requirement Analysis",
    desc: "Understanding business goals",
    icon: <Search />,
  },
  {
    title: "Planning & Design",
    desc: "Creating roadmap and UI/UX",
    icon: <PenTool />,
  },
  {
    title: "Development",
    desc: "Building with modern technologies",
    icon: <Terminal />,
  },
  {
    title: "Testing",
    desc: "Ensuring performance and reliability",
    icon: <CheckCircle />,
  },
  {
    title: "Launch & Support",
    desc: "Deployment and ongoing support",
    icon: <Headphones />,
  },
];

export const TECHNOLOGIES = [
  {
    title: "Frontend Experiences",
    desc: "Modern and scalable frontend technologies for seamless user experiences.",
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: "Backend Systems",
    desc: "High-performance backend systems built for reliability and speed.",
    icon: <Server className="w-6 h-6" />,
  },
  {
    title: "Database Architectures",
    desc: "Secure and optimized database architectures.",
    icon: <Database className="w-6 h-6" />,
  },
  {
    title: "Mobile Capabilities",
    desc: "Cross-platform mobile development capabilities.",
    icon: <Smartphone className="w-6 h-6" />,
  },
  {
    title: "Cloud Infrastructure",
    desc: "Cloud-based infrastructure ensuring scalability and availability.",
    icon: <Cloud className="w-6 h-6" />,
  },
];

export const INDUSTRIES = [
  {
    name: "POCs",
    icon: <Lightbulb className="w-8 h-8 mb-4 text-yellow-400" />,
  },
  {
    name: "E-commerce",
    icon: <ShoppingCart className="w-8 h-8 mb-4 text-blue-400" />,
  },
  {
    name: "Healthcare",
    icon: <Activity className="w-8 h-8 mb-4 text-red-400" />,
  },
  {
    name: "Education",
    icon: <BookOpen className="w-8 h-8 mb-4 text-green-400" />,
  },
  {
    name: "Finance",
    icon: <DollarSign className="w-8 h-8 mb-4 text-emerald-400" />,
  },
  {
    name: "Logistics",
    icon: <Truck className="w-8 h-8 mb-4 text-orange-400" />,
  },
];

export const POC_FEATURES = [
  {
    title: "Full-Stack Expertise",
    desc: "Web, mobile, cloud, and AI all under one roof. No subcontractors, faster execution.",
    icon: <Layers className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Cost-Effective Solutions",
    desc: "Premium quality at 40–50% less than Western agencies. Great value without compromise.",
    icon: <DollarSign className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Agile & Fast Delivery",
    desc: "Rapid prototyping, quick turnarounds, and flexible scaling to move at the speed of your business.",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Long-Term Partnership",
    desc: "We grow with you. From MVP to scale, we're invested in your success.",
    icon: <Handshake className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "Transparent Communication",
    desc: "Regular updates, clear roadmaps, no hidden surprises. You're always in the loop.",
    icon: <Headphones className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "Security First Approach",
    desc: "Data integrity is our priority. We implement industry-standard security protocols to protect your intellectual property and user data from day one.",
    icon: <Lock className="w-6 h-6 text-purple-400" />,
  },
];

export const WHY_CHOOSE_US = [
  {
    text: "Experienced Team",
    icon: <Terminal className="w-5 h-5 text-blue-400" />,
  },
  {
    text: "POC Friendly",
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
  },
  {
    text: "Scalable Solutions",
    icon: <Layers className="w-5 h-5 text-blue-400" />,
  },
  {
    text: "Affordable Pricing",
    icon: <DollarSign className="w-5 h-5 text-purple-400" />,
  },
  {
    text: "On-time Delivery",
    icon: <Clock className="w-5 h-5 text-blue-400" />,
  },
];

export const CONTACT_INFO = {
  email: "contact@innocypher.com",
  phone: "+91 XXXXX XXXXX",
  location: "India",
};

export const SOCIAL_LINKS = [
  { name: "LinkedIn", href: "#", icon: <Globe className="w-4 h-4" /> },
  { name: "Twitter", href: "#", icon: <Globe className="w-4 h-4" /> },
  { name: "Github", href: "#", icon: <Globe className="w-4 h-4" /> },
];

export const SITE_TEXT = {
  brandName: "INNOCYPHER",
  hero: {
    badge: "INNOCYPHER transforms ideas into powerful digital products",
    heading: "Build Smart. Scale Fast.",
    headingHighlight: "Grow with INNOCYPHER.",
    description:
      "Transform your business with custom web apps, mobile solutions, cloud infrastructure, and AI-powered automation.",
    ctaPrimary: "Start Your Project Today",
    ctaSecondary: "Get a Free Consultation",
  },
  about: {
    title:
      "Experienced Engineers who understand real-world business challenges.",
    description:
      "We are a specialized software development firm that helps companies transform complex business logic into scalable digital products.",
  },
  footer: {
    description:
      "Powering Your Ideas into Reality. We are your trusted partner for high-quality software solutions and digital products.",
    copyrightTemplate: "© {year} INNOCYPHER. All rights reserved.",
  },
};

export const LEGAL_TEXT = {
  privacy: {
    title: "Privacy Policy",
    effectiveDate: "March 27, 2026",
    overview:
      "INNOCYPHER is committed to protecting your privacy. This Privacy Policy explains what personal information we collect, how we use it, and how we protect it.",
    sections: [
      {
        heading: "1. Information We Collect",
        content:
          "We collect data you provide directly, including contact form messages and email communications. We also automatically collect non-personal information when you visit our site (e.g., IP address, browser type, device details and pages viewed).",
      },
      {
        heading: "2. Use of Information",
        content:
          "We use your information to respond to inquiries, fulfill service requests, improve the website experience, and send updates if you explicitly subscribe. We do not sell or rent personal information to third parties.",
      },
      {
        heading: "3. Data Security",
        content:
          "We use industry-standard controls to protect your information. However, no method is 100% secure; we cannot guarantee absolute security.",
      },
      {
        heading: "4. Cookies and Tracking",
        content:
          "We use cookies and similar technologies to improve site performance and analytics. You may disable cookies through your browser settings, but site functionality may be affected.",
      },
      {
        heading: "5. Changes to this Policy",
        content:
          "We may update this policy when needed. The effective date is displayed at the top. Continued use of the site indicates acceptance of changes.",
      },
    ],
  },
  terms: {
    title: "Terms and Conditions",
    effectiveDate: "March 27, 2026",
    overview:
      "These Terms and Conditions govern your use of the INNOCYPHER website. By accessing the site, you agree to these terms.",
    sections: [
      {
        heading: "1. Use of Website",
        content:
          "You may use the website for lawful purposes only. You must not use the site in a way that disrupts services or obtains unauthorized access to other systems.",
      },
      {
        heading: "2. Intellectual Property",
        content:
          "All content on this site, including text, graphics, and logos, is owned by INNOCYPHER or licensed to us. You may not reproduce or distribute content without written permission.",
      },
      {
        heading: "3. User Content",
        content:
          "By submitting information through contact forms, you grant us permission to use that content for business purposes while respecting privacy commitments.",
      },
      {
        heading: "4. Limitation of Liability",
        content:
          "INNOCYPHER is not liable for indirect or consequential damages arising from site use. We provide the site 'as is' without warranties unless stated otherwise.",
      },
      {
        heading: "5. Governing Law",
        content:
          "These terms are governed by the laws of the jurisdiction where INNOCYPHER operates. Disputes arising from these terms should be resolved in that jurisdiction.",
      },
    ],
  },
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, MessageCircle, Facebook, Cpu, Wifi, Settings, Globe, ShieldCheck, User, GraduationCap } from 'lucide-react';

export default function App() {
  const name = "Mubin Islam";
  const role = "Student";
  const domain = "mubin.pro.bd";
  const email = "mubinislam2455@gmail.com";
  const whatsapp = "8801837872529";
  const facebookUrl = "https://www.facebook.com/share/1AyZatHuVw/";

  return (
    <div className="min-h-screen bg-[#0a0c14] text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Navigation - Minimal */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0c14]/80 backdrop-blur-md border-b border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold tracking-tight text-white font-display">{domain}</span>
          <div className="hidden sm:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 font-display">
              {name}
            </h1>
            <p className="text-xl md:text-2xl text-indigo-400 font-medium mb-8">
              {role} | Networking & ESP8266 Enthusiast
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl">
              I am a student passionate about building practical technical solutions. 
              From configuring robust WiFi networks to developing IoT projects with ESP8266, 
              I focus on real-world problem solving that is both simple and effective.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-all shadow-lg shadow-indigo-500/20"
              >
                <Mail size={18} />
                Email Me
              </a>
              <a 
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-full font-semibold transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a 
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-full font-semibold transition-all"
              >
                <Facebook size={18} />
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3 font-display">
                <User className="text-indigo-400" />
                About Me
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I am a student with a deep interest in the world of networking and hardware. 
                  My journey in technology is driven by a curiosity for how things connect and 
                  a desire to make those connections better.
                </p>
                <p>
                  I specialize in practical, real-life problem solving. Whether it's optimizing 
                  a home network or building a custom IoT device, I prefer solutions that are 
                  straightforward, useful, and technically sound.
                </p>
                <p>
                  My approach is simple: understand the problem, find the most efficient tool 
                  for the job, and implement a solution that works reliably in the real world.
                </p>
              </div>
            </div>
            <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50">
              <h3 className="text-xl font-semibold text-white mb-6 font-display">Quick Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Name</p>
                    <p className="text-slate-200">{name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <GraduationCap size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Role</p>
                    <p className="text-slate-200">{role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Domain</p>
                    <p className="text-slate-200">{domain}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Email</p>
                    <p className="text-slate-200 break-all">{email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interests / Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center font-display">Interests & Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Networking", icon: <Globe size={24} />, desc: "Designing and managing efficient network architectures." },
              { title: "WiFi Setup", icon: <Wifi size={24} />, desc: "Optimizing wireless coverage and performance." },
              { title: "Router Config", icon: <Settings size={24} />, desc: "Advanced configuration for security and speed." },
              { title: "DNS Settings", icon: <ShieldCheck size={24} />, desc: "Managing domain resolution and security." },
              { title: "NodeMCU / ESP8266", icon: <Cpu size={24} />, desc: "Building IoT projects and hardware prototypes." },
              { title: "Troubleshooting", icon: <Settings size={24} />, desc: "Practical, real-life technical problem solving." },
            ].map((skill, index) => (
              <div key={index} className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/50 hover:border-indigo-500/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 font-display">{skill.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-indigo-600/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-display">Get In Touch</h2>
          <p className="text-slate-400 mb-10">
            Feel free to reach out for networking advice, IoT projects, or just to say hi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`mailto:${email}`}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-bold transition-all"
            >
              <Mail size={20} />
              Send an Email
            </a>
            <a 
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl font-bold transition-all"
            >
              <MessageCircle size={20} />
              WhatsApp Me
            </a>
            <a 
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 border border-slate-700 hover:border-slate-500 text-slate-300 rounded-2xl font-bold transition-all"
            >
              <Facebook size={20} />
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800/50 text-center">
        <div className="max-w-5xl mx-auto">
          <p className="text-slate-500 text-sm">
            &copy; 2026 {name}. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs mt-2">
            Built with simplicity and precision.
          </p>
        </div>
      </footer>
    </div>
  );
}

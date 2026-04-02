import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Hapus Instagram & Github dari import agar tidak error
import { MapPin, GraduationCap, Briefcase, Code2, Layout, Terminal, Cpu, ArrowLeft, X } from 'lucide-react';
import fotoDean from '../assets/profil.jpg';

// --- BUAT ICON MANUAL (SVG) AGAR TIDAK ERROR ---
const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const GithubIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
// -----------------------------------------------

const Dean = () => {
  const navigate = useNavigate();
  const techStackRef = useRef(null);
  const [showContact, setShowContact] = useState(false);

  const scrollToTechStack = () => {
    techStackRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const userData = {
    namaLengkap: "Dean Adiba Anugrah",
    kelas: "T2F",
    jurusan: "Teknologi Informasi",
    domisili: "Padang, Sumatera Barat, Indonesia",
    tentangDiri: "Saya Dean Adiba Anugrah, mahasiswa Teknologi Informasi Universitas Brawijaya semester 2 yang berdedikasi sebagai Fullstack Developer. Dengan keahlian teknis dalam ekosistem React.js, HTML, dan CSS, saya fokus membangun aplikasi web yang responsif serta fungsional menggunakan workflow modern di Visual Studio Code. Sebagai mahasiswa yang aktif mengikuti perkembangan teknologi, saya mengombinasikan pemahaman akademis yang kuat dengan praktik coding yang disiplin untuk menciptakan solusi digital yang efisien, rapi, dan mudah dikembangkan di masa depan."
  };

  const techStack = [
    { name: "React.js", icon: <Layout className="text-blue-400" />, level: "Intermediate" },
    { name: "Vite", icon: <Cpu className="text-purple-500" />, level: "Advanced" },
    { name: "Tailwind CSS", icon: <Layout className="text-cyan-500" />, level: "Advanced" },
    { name: "Bootstrap", icon: <Layout className="text-purple-700" />, level: "Intermediate" },
    { name: "HTML5", icon: <Code2 className="text-orange-600" />, level: "Expert" },
    { name: "CSS3", icon: <Code2 className="text-blue-600" />, level: "Expert" },
    { name: "VS Code", icon: <Terminal className="text-blue-500" />, level: "Daily Tool" }
  ];

  // Data kontak memakai icon manual yang sudah dibuat di atas
  const contactLinks = [
    {
      name: "Instagram",
      username: "@deanadb_",
      url: "https://www.instagram.com/deanadb_/?hl=en",
      icon: <InstagramIcon size={28} />,
      color: "bg-gradient-to-br from-pink-500 to-purple-600",
      hoverShadow: "hover:shadow-pink-200"
    },
    {
      name: "GitHub",
      username: "deanadibaanugrah",
      url: "https://github.com/deanadibaanugrah",
      icon: <GithubIcon size={28} />,
      color: "bg-gradient-to-br from-gray-700 to-gray-900",
      hoverShadow: "hover:shadow-gray-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased pb-20">
      {/* Tombol Back */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-sm text-gray-700 font-semibold rounded-xl shadow-lg border border-gray-200 hover:bg-gray-100 hover:shadow-xl transition-all duration-300 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="hidden sm:inline">Kembali</span>
      </button>

      {/* Banner */}
      <div className="h-60 bg-gradient-to-r from-[#210201] via-[#4F1312] to-[#210201] border-b border-gray-800 shadow-lg"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-visible">
          <div className="relative px-8 pb-8">
            <div className="relative flex justify-start -mt-20 mb-6">
              <div className="bg-[#2D0F0A] p-1.5 rounded-2xl shadow-2xl z-20 border border-gray-700">
                <div className="w-48 h-60 rounded-xl overflow-hidden bg-[#210201] flex items-center justify-center">
                  <img 
                    src={fotoDean} 
                    alt={userData.namaLengkap} 
                    className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/192x240?text=Foto+Dean"; }}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">{userData.namaLengkap}</h1>
              <p className="text-2xl text-blue-600 font-semibold uppercase tracking-wide">{userData.jurusan}</p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-6 text-gray-600">
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <GraduationCap size={20} className="text-blue-600" />
                <span className="font-medium">{userData.kelas}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                <MapPin size={20} className="text-red-500" />
                <span className="font-medium">{userData.domisili}</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button onClick={scrollToTechStack} className="px-10 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 hover:shadow-blue-200 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                Open to work
              </button>
              <button 
                onClick={() => setShowContact(!showContact)} 
                className={`px-10 py-3 border-2 font-bold rounded-xl transition duration-300 transform hover:-translate-y-1 ${
                  showContact 
                    ? 'border-blue-500 bg-blue-50 text-blue-600' 
                    : 'border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
              >
                Contact Info
              </button>
            </div>

            {/* BAGIAN KONTAK YANG MUNCUL SAAT TOMBOL DITEKAN */}
            {showContact && (
              <div className="mt-6 animate-fadeIn">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 shadow-inner">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                      <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
                      Hubungi Saya
                    </h3>
                    <button 
                      onClick={() => setShowContact(false)}
                      className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                    >
                      <X size={18} className="text-gray-500" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {contactLinks.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group flex items-center gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg ${contact.hoverShadow} transition-all duration-300 transform hover:-translate-y-1`}
                      >
                        <div className={`flex-shrink-0 w-14 h-14 ${contact.color} rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
                          {contact.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-900 text-lg">{contact.name}</p>
                          <p className="text-gray-500 text-sm truncate group-hover:text-gray-700 transition-colors">{contact.username}</p>
                        </div>
                        <div className="ml-auto flex-shrink-0">
                          <svg className="w-5 h-5 text-gray-300 group-hover:text-gray-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tentang */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
            Tentang
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg text-justify first-letter:text-5xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
            {userData.tentangDiri}
          </p>
        </div>

        {/* Tech Stack */}
        <div ref={techStackRef} className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-purple-600 rounded-full"></span>
            Tech Stack & Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="group p-6 border border-gray-100 rounded-2xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 shadow-sm flex flex-col items-center text-center">
                <div className="mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {React.cloneElement(tech.icon, { size: 40 })}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{tech.name}</h3>
                <span className="text-xs font-medium text-gray-400 mt-1 uppercase tracking-widest">{tech.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pendidikan */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-2 h-8 bg-green-600 rounded-full"></span>
            Pendidikan
          </h2>
          <div className="flex gap-6 items-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="bg-white p-4 rounded-xl shadow-md">
              <Briefcase size={40} className="text-blue-600" />
            </div>
            <div>
              <h3 className="font-extrabold text-gray-900 text-xl">{userData.jurusan}</h3>
              <p className="text-gray-700 font-medium text-lg italic">Universitas Brawijaya</p>
              <div className="mt-2 inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-bold rounded-md">
                2025 - Sekarang
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Dean;
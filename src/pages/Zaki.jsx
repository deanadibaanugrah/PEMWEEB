import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Briefcase, Code2, Layout, ArrowLeft, Users, Link2 } from 'lucide-react';
import fotoZaki from '../assets/zaki.jpg';

// Manual SVG Icons
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

const LinkedInIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Zaki = () => {
  const navigate = useNavigate();
  const techStackRef = useRef(null);
  const [showContact, setShowContact] = useState(false);

  const scrollToTechStack = () => {
    techStackRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const userData = {
    namaLengkap: "Muhammad Muzakky",
    jabatan: "UI/UX Designer | Mahasiswa Teknologi Informasi",
    perusahaan: "Universitas Brawijaya",
    lokasi: "Pasuruan, Jawa Timur, Indonesia",
    koneksi: "100 Koneksi",
    tentangDiri: "Mahasiswa Teknologi Informasi semester 2 di Universitas Brawijaya yang bersemangat dalam pengembangan web fullstack. Mahir dalam React.js, Tailwind CSS, Vite, dan modern web development workflow. Aktif berkontribusi di GitHub dan terus belajar teknologi terbaru untuk membangun solusi digital yang impactful.",
    pengalaman: "1 tahun pengalaman freelance web development"
  };

  const techStack = [
    { name: "React.js", level: "Intermediate", category: "Frontend" },
    { name: "Vite", level: "Advanced", category: "Build Tool" },
    { name: "Tailwind CSS", level: "Advanced", category: "Styling" },
    { name: "Bootstrap", level: "Intermediate", category: "Styling" },
    { name: "HTML5", level: "Expert", category: "Core" },
    { name: "CSS3", level: "Expert", category: "Core" },
    { name: "VS Code", level: "Power User", category: "Tools" }
  ];

  const contactLinks = [
    {
      name: "Instagram",
      username: "@mmzakky161006",
      url: "https://www.instagram.com/mmzakky161006/",
      icon: <InstagramIcon size={20} />,
      color: "bg-gradient-to-r from-pink-500 to-purple-500"
    },
    {
      name: "GitHub",
      username: "Muhammad Muzakky",
      url: "https://github.com/muhammadmuzakky161006",
      icon: <GithubIcon size={20} />,
      color: "bg-gray-800"
    },
    {
      name: "LinkedIn",
      username: "Muhammad Muzakky",
      url: "https://www.linkedin.com/in/muhammad-muzakky-b3880a377/",
      icon: <LinkedInIcon size={20} />,
      color: "bg-[#0073b1]"
    }
  ];

  const experiences = [
    {
      title: "Mahasiswa Teknologi Informasi",
      company: "Universitas Brawijaya",
      period: "2024 - Present",
      description: "Mempelajari pengembangan web fullstack, algoritma, dan struktur data."
    },
    {
      title: "UI/UX Designer (Freelance)",
      company: "Self-employed",
      period: "2023 - Present",
      description: "Membangun aplikasi web responsif untuk klien lokal menggunakan React.js dan Tailwind CSS."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Import Google Font Montserrat */}
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap" rel="stylesheet" />
      
      {/* Navbar / Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Kembali</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Profile Card Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          
          {/* Banner Blue - Height 48 (192px) */}
          <div className="h-48 bg-gradient-to-r from-blue-600 to-blue-400"></div>
          
          {/* Profile Content - Center Horizontal Alignment */}
          <div className="relative -mt-24 px-4 pb-10 flex flex-col items-center">
            
            {/* 1. Circular Profile Picture */}
            <div className="mb-4">
              <div className="w-40 h-40 bg-white rounded-full shadow-xl border-4 border-white overflow-hidden">
                <img 
                  src={fotoZaki} 
                  alt={userData.namaLengkap} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/160x160?text=ZK"; }}
                />
              </div>
            </div>

            {/* 2. Profile Info - Text Centered & White for Name */}
            <div className="text-center w-full max-w-3xl">
              <h1 
                className="text-4xl font-bold text-white mb-2 drop-shadow-lg"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {userData.namaLengkap}
              </h1>
              <p className="text-xl text-white/90 mb-1 font-bold tracking-tight bg-black/25 inline-block px-3 py-1 rounded-lg">
                {userData.jabatan}
              </p>
              <p className="text-sm text-white/90 mb-6 font-bold tracking-tight bg-black/25 inline-block px-3 py-1 rounded-lg">
                {userData.perusahaan} • {userData.lokasi}
              </p>
              
              {/* 3. Action Buttons - Centered Vertically */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-3 py-1">
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-700 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md border border-blue-200">
                  <Users size={18} className="text-blue-600" />
                  {userData.koneksi}
                </div>
                <button 
                  onClick={scrollToTechStack}
                  className="px-8 py-2 bg-white text-blue-600 text-sm font-bold rounded-xl hover:bg-blue-50 transition-all shadow-md active:scale-95"
                >
                  Lihat Skill
                </button>
                <button 
                  onClick={() => setShowContact(!showContact)}
                  className="px-8 py-2 border-2 border-white text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-all active:scale-95"
                >
                  {showContact ? 'Tutup Kontak' : 'Hubungi'}
                </button>
              </div>

              {/* 4. Social Media Pop-out - Centered */}
              {showContact && (
                <div className="mt-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 animate-slideDown inline-block shadow-inner">
                  <div className="flex gap-6">
                    {contactLinks.map((contact, index) => (
                      <a
                        key={index}
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-2"
                      >
                        <div className={`w-12 h-12 ${contact.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-all`}>
                          {contact.icon}
                        </div>
                        <span className="text-[10px] text-white font-semibold uppercase tracking-wider">{contact.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Info (Left) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* About Section */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{userData.tentangDiri}</p>
              <div className="mt-4 inline-block px-3 py-1 bg-blue-50 text-blue-700 text-sm font-semibold rounded-lg">
                {userData.pengalaman}
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-8 py-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <Briefcase size={24} className="text-blue-600" />
                  Pengalaman
                </h2>
              </div>
              <div className="divide-y divide-gray-100">
                {experiences.map((exp, index) => (
                  <div key={index} className="p-8 hover:bg-gray-50 transition-colors">
                    <h3 className="font-bold text-gray-900 text-xl">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 mt-1 mb-3">{exp.period}</p>
                    <p className="text-gray-700">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Section */}
            <div ref={techStackRef} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Code2 size={24} className="text-green-600" />
                Skill & Tools
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-transparent hover:border-blue-200 transition-all">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                      <Layout size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{tech.name}</p>
                      <p className="text-xs text-gray-500">{tech.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info (Right) */}
          <div className="space-y-6">
            
            {/* Education Box */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <GraduationCap size={20} className="text-blue-600" />
                Pendidikan
              </h3>
              <div className="p-4 bg-blue-50 rounded-2xl">
                <h4 className="font-bold text-gray-900">Teknologi Informasi</h4>
                <p className="text-sm text-gray-600">Universitas Brawijaya</p>
                <p className="text-xs text-gray-500 mt-1 font-medium">2024 - 2028</p>
              </div>
            </div>

            {/* Social Links Sidebar */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Tautan</h3>
              <div className="space-y-3">
                {contactLinks.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded-xl transition-all group border border-transparent hover:border-gray-200"
                  >
                    <div className={`w-10 h-10 ${contact.color} rounded-lg flex items-center justify-center text-white`}>
                      {contact.icon}
                    </div>
                    <span className="font-semibold text-gray-700 group-hover:text-blue-600 text-sm">{contact.name}</span>
                    <Link2 size={14} className="ml-auto text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown { animation: slideDown 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Zaki;
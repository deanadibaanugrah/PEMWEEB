import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, GraduationCap, Briefcase, Code2, Layout, Terminal, Cpu, ArrowLeft } from 'lucide-react';
import fotoDean from '../assets/profil.jpg';

const Dean = () => {
  const navigate = useNavigate();
  const techStackRef = useRef(null);

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
              <button className="px-10 py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition duration-300">
                Contact Info
              </button>
            </div>
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
    </div>
  );
};

export default Dean;
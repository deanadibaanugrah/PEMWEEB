import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, GraduationCap, Briefcase, Code2, Layout, Terminal, Cpu, ArrowLeft, X } from 'lucide-react';
import fotoMifta from '../assets/mifta.jpeg';

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

const Mifta = () => {
  const navigate = useNavigate();
  const techStackRef = useRef(null);
  const [showContact, setShowContact] = useState(false);

  const scrollToTechStack = () => {
    techStackRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const userData = {
    namaLengkap: "Mifta Annisa",
    kelas: "T2F",
    jurusan: "Teknologi Informasi",
    domisili: "Malang,Jawa Timur,Indonesia",
    tentangDiri: "Saya Mifta Annisa Rabbani, mahasiswa Teknologi Informasi Universitas Brawijaya yang menaruh hati besar di dunia pengembangan web. Perjalanan saya di bidang ini bukan sekadar menjalankan perkuliahan, melainkan sebuah eksplorasi mendalam terhadap bagaimana teknologi mampu menyelesaikan persoalan nyata di sekitar saya. Setiap baris kode yang saya tulis adalah bentuk keingintahuan yang saya wujudkan menjadi solusi nyata — mulai dari membangun logika server yang tangguh hingga merancang arsitektur sistem yang mampu menahan beban pengguna secara optimal. Di luar kode, saya percaya bahwa sebuah produk digital yang hebat bukan hanya soal kecanggihan teknis, tetapi juga tentang seberapa besar dampak yang diciptakannya bagi pengguna. Itulah mengapa saya selalu berusaha menyatukan aspek fungsionalitas, performa, dan pengalaman pengguna dalam setiap proyek yang saya kerjakan. Dengan semangat belajar yang tak pernah padam dan ketekunan yang saya bangun secara konsisten, saya berkomitmen untuk terus bertumbuh sebagai developer yang tidak hanya mahir secara teknis, tetapi juga memiliki empati terhadap kebutuhan pengguna dan visi untuk menghadirkan solusi digital yang benar-benar bermakna."
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

  const contactLinks = [
    {
      name: "Instagram",
      username: "@miftaannisa",
      url: "https://www.instagram.com/miftannisa__/",
      icon: <InstagramIcon size={28} />,
      color: "bg-gradient-to-br from-pink-500 to-orange-400",
      hoverShadow: "hover:shadow-pink-200"
    },
    {
      name: "GitHub",
      username: "miftaannisaannisa-hue",
      url: "https://github.com/miftaannisaannisa-hue",
      icon: <GithubIcon size={28} />,
      color: "bg-gradient-to-br from-gray-800 to-black",
      hoverShadow: "hover:shadow-gray-300"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-sans antialiased pb-20">
      {/* Tombol Back */}
      <button
        onClick={() => navigate('/')}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 font-semibold rounded-full shadow-lg border border-gray-200 hover:bg-gray-800 hover:text-white hover:shadow-xl transition-all duration-300 group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="hidden sm:inline text-sm">Kembali</span>
      </button>

      {/* Banner - beda gradient & tinggi */}
      <div className="h-72 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-violet-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-5 right-20 w-48 h-48 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-200 rounded-full blur-2xl"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-36">
        {/* Profile Card - beda style */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/50 overflow-visible">
          <div className="relative px-8 pb-8">
            {/* Foto beda posisi: center + bentuk lingkaran */}
            <div className="relative flex justify-center -mt-24 mb-6">
              <div className="relative z-20">
                <div className="w-44 h-44 rounded-full overflow-hidden bg-white p-1 shadow-2xl ring-4 ring-fuchsia-500/30">
                  <img 
                    src={fotoMifta} 
                    alt={userData.namaLengkap} 
                    className="h-full w-full rounded-full object-cover hover:scale-110 transition-transform duration-700"
                    onError={(e) => { e.target.src = "https://via.placeholder.com/176x176?text=Mifta"; }}
                  />
                </div>
                {/* Status dot */}
                <div className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-400 rounded-full border-4 border-white shadow-md"></div>
              </div>
            </div>

            {/* Nama beda layout: center */}
            <div className="space-y-2 text-center">
              <h1 className="text-4xl font-black text-gray-900 tracking-tight">{userData.namaLengkap}</h1>
              <p className="text-xl text-fuchsia-600 font-bold uppercase tracking-widest">{userData.jurusan}</p>
            </div>
            
            {/* Badge beda style: pill merah muda */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 bg-fuchsia-50 border border-fuchsia-200 px-5 py-2.5 rounded-full">
                <GraduationCap size={18} className="text-fuchsia-600" />
                <span className="font-semibold text-fuchsia-800 text-sm">{userData.kelas}</span>
              </div>
              <div className="flex items-center gap-2 bg-violet-50 border border-violet-200 px-5 py-2.5 rounded-full">
                <MapPin size={18} className="text-violet-600" />
                <span className="font-semibold text-violet-800 text-sm">{userData.domisili}</span>
              </div>
            </div>

            {/* Tombol beda style */}
            <div className="mt-8 flex justify-center gap-4">
              <button onClick={scrollToTechStack} className="px-10 py-3 bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white font-bold rounded-full hover:from-fuchsia-600 hover:to-violet-700 hover:shadow-fuchsia-300 hover:shadow-xl transition duration-300 transform hover:-translate-y-1 text-sm tracking-wide">
                Open to Work
              </button>
              <button 
                onClick={() => setShowContact(!showContact)} 
                className={`px-10 py-3 border-2 font-bold rounded-full transition duration-300 transform hover:-translate-y-1 text-sm tracking-wide ${
                  showContact 
                    ? 'border-fuchsia-500 bg-fuchsia-50 text-fuchsia-600' 
                    : 'border-gray-200 text-gray-600 hover:border-fuchsia-300 hover:text-fuchsia-600'
                }`}
              >
                Contact Info
              </button>
            </div>

            {/* Kontak */}
            {showContact && (
              <div className="mt-6 animate-fadeIn">
                <div className="bg-gradient-to-br from-fuchsia-50 via-white to-violet-50 rounded-2xl p-6 border border-fuchsia-100 shadow-inner">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                      <span className="w-2 h-6 bg-fuchsia-500 rounded-full"></span>
                      Hubungi Saya
                    </h3>
                    <button 
                      onClick={() => setShowContact(false)}
                      className="p-2 hover:bg-fuchsia-100 rounded-lg transition-colors"
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
                        className={`group flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg ${contact.hoverShadow} transition-all duration-300 transform hover:-translate-y-1`}
                      >
                        <div className={`flex-shrink-0 w-14 h-14 ${contact.color} rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          {contact.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-gray-900">{contact.name}</p>
                          <p className="text-gray-400 text-sm truncate group-hover:text-gray-600 transition-colors">{contact.username}</p>
                        </div>
                        <div className="ml-auto flex-shrink-0">
                          <svg className="w-5 h-5 text-gray-300 group-hover:text-fuchsia-500 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Tentang - beda style */}
        <div className="mt-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8 border border-white/50">
          <h2 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-3">
            <span className="w-10 h-1 bg-gradient-to-r from-fuchsia-500 to-violet-500 rounded-full"></span>
            Tentang
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg text-justify">
            {userData.tentangDiri}
          </p>
        </div>

        {/* Tech Stack - beda style: horizontal scroll di mobile, grid di desktop */}
        <div ref={techStackRef} className="mt-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8 border border-white/50">
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-10 h-1 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full"></span>
            Tech Stack & Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="group p-5 bg-gradient-to-br from-slate-50 to-white rounded-2xl border border-gray-100 hover:border-fuchsia-400 hover:from-fuchsia-50 hover:to-violet-50 transition-all duration-300 shadow-sm flex flex-col items-center text-center">
                <div className="mb-3 transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                  {React.cloneElement(tech.icon, { size: 36 })}
                </div>
                <h3 className="font-bold text-gray-900 text-sm">{tech.name}</h3>
                <span className="text-[10px] font-semibold text-fuchsia-500 mt-1 uppercase tracking-widest">{tech.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pendidikan - beda style */}
        <div className="mt-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-lg p-8 border border-white/50">
          <h2 className="text-2xl font-black text-gray-900 mb-8 flex items-center gap-3">
            <span className="w-10 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></span>
            Pendidikan
          </h2>
          <div className="relative p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="relative flex gap-5 items-center">
              <div className="bg-white p-4 rounded-2xl shadow-md border border-emerald-100">
                <Briefcase size={36} className="text-emerald-600" />
              </div>
              <div>
                <h3 className="font-extrabold text-gray-900 text-xl">{userData.jurusan}</h3>
                <p className="text-gray-600 font-medium text-lg">Universitas Brawijaya</p>
                <div className="mt-2 inline-block px-4 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full tracking-wide">
                  2025 — Sekarang
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center pb-4">
          <p className="text-gray-400 text-sm">© 2025 {userData.namaLengkap}. All rights reserved.</p>
        </div>
      </div>

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

export default Mifta;
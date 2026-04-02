import { useNavigate } from 'react-router-dom';
import { MapPin, GraduationCap, ArrowRight, Sparkles, Users } from 'lucide-react';
import fotoDean from '../assets/profil.jpg';

const anggota = [
  {
    path: '/dean',
    namaLengkap: 'Dean Adiba Anugrah',
    kelas: 'T2F',
    jurusan: 'Teknologi Informasi',
    domisili: 'Padang, Sumatera Barat',
    role: 'Fullstack Developer',
    foto: fotoDean,
    singkat: 'Mahasiswa semester 2 yang fokus membangun aplikasi web responsif dengan ekosistem React.js dan workflow modern.',
    skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    accent: 'from-[#210201] via-[#4F1312] to-[#210201]',
  },
//   {
//     path: '/mifta',
//     namaLengkap: 'mifta annisa rabbani',
//     kelas: 'T2F',
//     jurusan: 'Teknologi Informasi',
//     domisili: 'Malang, Jawa Timur',
//     role: 'Backend Developer',
//     foto: null,
//     singkat: 'Mahasiswa yang memiliki ketertarikan besar pada pengembangan server-side dan arsitektur sistem yang scalable.',
//     skills: ['Node.js', 'Express', 'MongoDB', 'REST API'],
//     accent: 'from-[#0B1E3D] via-[#1A3A6B] to-[#0B1E3D]',
//   },
//   {
//     path: '/sinta',
//     namaLengkap: 'Sinta Maharani Putri',
//     kelas: 'T2F',
//     jurusan: 'Teknologi Informasi',
//     domisili: 'Surabaya, Jawa Timur',
//     role: 'UI/UX Designer',
//     foto: null,
//     singkat: 'Kreatif dalam merancang antarmuka pengguna yang intuitif dengan pendekatan user-centered design dan prototyping.',
//     skills: ['Figma', 'UI Design', 'Prototyping', 'Wireframe'],
//     accent: 'from-[#1A0A2E] via-[#3D1F6D] to-[#1A0A2E]',
//   },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[128px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full border border-white/10 mb-8">
            <Sparkles size={16} className="text-yellow-400" />
            <span className="text-white/80 text-sm font-medium">Kelompok Project — Teknologi Informasi</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Tiga mahasiswa Teknologi Informasi Universitas Brawijaya yang berkolaborasi membangun solusi digital inovatif.
          </p>

          <div className="mt-10 flex justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">3</div>
              <div className="text-sm text-white/50 mt-1">Anggota</div>
            </div>
            <div className="w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">T2F</div>
              <div className="text-sm text-white/50 mt-1">Kelas</div>
            </div>
            <div className="w-px bg-white/10"></div>
            <div className="text-center">
              <div className="text-3xl font-extrabold text-white">2025</div>
              <div className="text-sm text-white/50 mt-1">Tahun</div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {anggota.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              onClick={() => navigate(member.path)}
            >
              {/* Mini Banner */}
              <div className={`h-28 bg-gradient-to-r ${member.accent} relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute -bottom-12 left-6 z-20">
                  <div className="bg-[#2D0F0A] p-1 rounded-xl shadow-xl border border-gray-700">
                    <div className="w-24 h-32 rounded-lg overflow-hidden bg-[#210201] flex items-center justify-center">
                      {member.foto ? (
                        <img
                          src={member.foto}
                          alt={member.namaLengkap}
                          className="h-full w-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className={`${member.foto ? 'hidden' : 'flex'} items-center justify-center w-full h-full`}>
                        <Users size={36} className="text-white/30" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-16 px-6 pb-6">
                <h3 className="text-xl font-extrabold text-gray-900 tracking-tight leading-snug">
                  {member.namaLengkap}
                </h3>
                <p className="text-sm font-semibold text-blue-600 mt-1 uppercase tracking-wide">
                  {member.role}
                </p>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <GraduationCap size={14} className="text-blue-500 shrink-0" />
                    <span>{member.kelas} — {member.jurusan}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin size={14} className="text-red-400 shrink-0" />
                    <span>{member.domisili}</span>
                  </div>
                </div>

                <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {member.singkat}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {member.skills.map((skill, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                <button className="mt-6 w-full flex items-center justify-center gap-2 px-5 py-3 bg-gray-900 text-white font-bold rounded-xl group-hover:bg-blue-600 transition-all duration-300 text-sm">
                  Lihat Profil
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Klik salah satu kartu di atas untuk melihat profil lengkap anggota.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
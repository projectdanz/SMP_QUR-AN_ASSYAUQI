import Festival1 from "../assets/image/Documentasi_kegiatan/FestivalMusabaqoh-1.jpeg";
import Festival2 from "../assets/image/Documentasi_kegiatan/FestivalMusabaqoh-2.jpeg";
import Festival3 from "../assets/image/Documentasi_kegiatan/FestivalMusabaqoh-3.jpeg";
import Festival4 from "../assets/image/Documentasi_kegiatan/FestivalMusabaqoh-4.jpeg";
import Festival5 from "../assets/image/Documentasi_kegiatan/FestivalMusabaqoh-5.jpeg";
import Festival6 from "../assets/image/Documentasi_kegiatan/FestivalMusabaqoh-6.jpeg";

import Horsebow1 from "../assets/image/Documentasi_kegiatan/KegiatanHorseBow-1.jpeg";
import Horsebow2 from "../assets/image/Documentasi_kegiatan/KegiatanHorseBow-2.jpeg";
import Horsebow3 from "../assets/image/Documentasi_kegiatan/KegiatanHorseBow-3.jpeg";
import Horsebow4 from "../assets/image/Documentasi_kegiatan/KegiatanHorseBow-4.jpeg";
import Horsebow5 from "../assets/image/Documentasi_kegiatan/KegiatanHorseBow-5.jpeg";
import Horsebow6 from "../assets/image/Documentasi_kegiatan/KegiatanHorseBow-6.jpeg";

import JuaraHorsebow1 from "../assets/image/Documentasi_kegiatan/KejuaraanHorseBow-1.jpeg";
import JuaraHorsebow2 from "../assets/image/Documentasi_kegiatan/KejuaraanHorseBow-2.jpeg";
import JuaraHorsebow3 from "../assets/image/Documentasi_kegiatan/KejuaraanHorseBow-3.jpeg";
import JuaraHorsebow4 from "../assets/image/Documentasi_kegiatan/KejuaraanHorseBow-4.jpeg";

import LombaAdzan from "../assets/image/Documentasi_kegiatan/LombaAdzan.jpeg";

import Peserta1 from "../assets/image/Documentasi_kegiatan/PesertaLombaMHQdanAdzan-2.jpeg";
import Peserta2 from "../assets/image/Documentasi_kegiatan/PesertaLombaMHQdanAdzan-1.jpeg";

import Card from "../component/Card";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";

const Documentation = () => {
  const DocumentationMhq = [
    {
      id: 1,
      link: Festival1,
      title: "Festival Musabaqoh",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 2,
      link: Festival2,
      title: "Festival Musabaqoh",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 3,
      link: Festival3,
      title: "Festival Musabaqoh",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 4,
      link: Festival4,
      title: "Festival Musabaqoh",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 5,
      link: Festival5,
      title: "Festival Musabaqoh",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 6,
      link: Festival6,
      title: "Festival Musabaqoh",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 7,
      link: LombaAdzan,
      title: "Lomba Adzan",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 8,
      link: Peserta1,
      title: "Peserta Lomba MHQ dan Adzan",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 9,
      link: Peserta2,
      title: "Peserta Lomba MHQ dan Adzan",
      date: "-",
      location: "-",
      caption: "-",
    },
  ];

  const DocumentationHorsebow = [
    {
      id: 1,
      link: Horsebow1,
      title: "Horsebow",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 2,
      link: Horsebow2,
      title: "Horsebow",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 3,
      link: Horsebow3,
      title: "Horsebow",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 4,
      link: Horsebow4,
      title: "Horsebow",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 5,
      link: Horsebow5,
      title: "Horsebow",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 6,
      link: Horsebow6,
      title: "Horsebow",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 7,
      link: JuaraHorsebow1,
      title: "Juara Horsebow",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 8,
      link: JuaraHorsebow2,
      title: "Juara Horsebow",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 9,
      link: JuaraHorsebow3,
      title: "Juara Horsebow",
      date: "-",
      location: "-",
      caption: "-",
    },
    {
      id: 10,
      link: JuaraHorsebow4,
      title: "Juara Horsebow",
      date: "-",
      location: "-",
      caption: "-",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white min-h-screen relative overflow-hidden">
      {/* Decorative background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#006DB8] mb-6 tracking-tight">
            Dokumentasi <span className="text-[#006DB8]">Kegiatan</span>
          </h2>
          <div className="w-24 h-1.5 bg-[#006DB8] mx-auto rounded-full mb-8" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Melihat kembali momen-momen berharga dan prestasi santri SMP Quran
            Assyauqi dalam berbagai kegiatan yang penuh inspirasi.
          </p>
        </div>

        <div className="space-y-24">
          {/* MHQ Section */}
          <div id="acara-mhq" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold text-[#006DB8]">
                Festival MHQ
              </h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 gap-8">
              {DocumentationMhq.map((data) => (
                <Card
                  key={`mhq-${data.id}`}
                  image={data.link}
                  title={data.title}
                  caption={data.caption}
                  date={data.date}
                  location={data.location}
                  targetId={`mhq-${data.id}`}
                />
              ))}
            </div>
          </div>

          {/* Horsebow Section */}
          <div id="horsebow" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold text-[#006DB8]">
                Kegiatan Horsebow
              </h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
              {DocumentationHorsebow.map((data) => (
                <Card
                  key={`horsebow-${data.id}`}
                  image={data.link}
                  title={data.title}
                  caption={data.caption}
                  date={data.date}
                  location={data.location}
                  targetId={`horsebow-${data.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modern Fixed Bottom Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full px-4 flex justify-center">
        <motion.a
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/"
          className="flex items-center gap-3 px-6 py-3 bg-[#006DB8] text-white rounded-full shadow-2xl shadow-teal-200 hover:bg-[#067ED0] transition-all duration-300 backdrop-blur-md bg-opacity-90 active:bg-teal-800 group"
        >
          <FaArrowLeft />
          <span className="font-semibold tracking-wide">
            Kembali ke Beranda
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default Documentation;

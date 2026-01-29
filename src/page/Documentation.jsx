import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Card from "../component/Card";
import {
  documentationMhq,
  documentationHorsebow,
  documentationBerenang,
} from "../data/documentationData";

const Documentation = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

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
              {documentationMhq.map((data) => (
                <Card
                  key={`mhq-${data.id}`}
                  images={data.images}
                  title={data.title}
                  caption={data.caption}
                  date={data.date}
                  location={data.location}
                  targetId={`mhq-${data.id}`}
                  navId={data.id}
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
              {documentationHorsebow.map((data) => (
                <Card
                  key={`horsebow-${data.id}`}
                  images={data.images}
                  title={data.title}
                  caption={data.caption}
                  date={data.date}
                  location={data.location}
                  targetId={`horsebow-${data.id}`}
                  navId={data.id}
                />
              ))}
            </div>
          </div>

          {/* Berenang Section */}
          <div id="berenang" className="scroll-mt-32">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold text-[#006DB8]">
                Kegiatan Berenang
              </h2>
              <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
              {documentationBerenang.map((data) => (
                <Card
                  key={`berenang-${data.id}`}
                  images={data.images}
                  title={data.title}
                  caption={data.caption}
                  date={data.date}
                  location={data.location}
                  targetId={`berenang-${data.id}`}
                  navId={data.id}
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
          className="flex items-center gap-3 px-6 py-3 bg-[#006DB8] text-white rounded-full shadow-2xl shadow-blue-200 hover:bg-[#067ED0] transition-all duration-300 backdrop-blur-md bg-opacity-90 active:bg-blue-800 group"
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

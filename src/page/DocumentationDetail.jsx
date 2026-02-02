import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaHome,
} from "react-icons/fa";
import { allDocumentation } from "../data/documentationData";
import { useEffect } from "react";

const DocumentationDetail = () => {
  const { id } = useParams();
  const data = allDocumentation.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Dokumentasi Tidak Ditemukan
        </h2>
        <Link
          to="/documentation"
          className="text-primary hover:underline flex items-center gap-2"
        >
          <FaArrowLeft /> Kembali ke Dokumentasi
        </Link>
      </div>
    );
  }

  return (
    <main className="py-20 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link
          to="/documentation"
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-100 dark:shadow-blue-500/20 group"
          title="Kembali ke Dokumentasi"
        >
          <FaArrowLeft className="text-2xl" />
          <span className="absolute right-full mr-4 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Kembali ke Dokumentasi
          </span>
        </Link>

        {/* Header Section */}
        <article className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-900/5 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-50 text-primary text-xs font-bold rounded-full uppercase tracking-widest border border-blue-100">
                  Detail Dokumentasi
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#061E29] leading-tight">
                {data.title}
              </h1>
            </div>
            <div className="flex flex-wrap gap-6 text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-primary" />
                {data.date}
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-primary" />
                {data.location || "SMP Quran Assyauqi"}
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-gray-100 mb-8" />

          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl whitespace-pre-line">
            {data.caption}
          </p>
        </article>

        {/* Full Image Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden bg-gray-200 shadow-lg cursor-pointer"
            >
              <img
                src={img}
                alt={`Dokumentasi ${data.title} - Foto ${index + 1}`}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default DocumentationDetail;

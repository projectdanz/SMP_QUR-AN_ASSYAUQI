import React from "react";
import sertifikatImg from "../../assets/image/sertifikat.png";

const Seaction__sertifikasi = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-r from-primary to-blue-600 rounded-3xl p-8 md:p-12 shadow-2xl text-white relative overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">
                TERAKREDITASI
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                SMP UNGGULAN <br />
                TERSERTIFIKASI RESMI
              </h2>
              <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
                SMP Qur'an Assyauqi telah tersertifikasi Resmi NPSN (Nomer Pokok
                Sekolah Nasional){" "}
                <span className="font-bold text-amber-300">70054917</span>, No.
                3574/G4/KL/2009 Tahun 2009. Hingga saat ini.
              </p>
            </div>

            <div className="shrink-0 relative group perspective-1000">
              <div className="w-48 md:w-64 bg-white p-3 rounded-xl shadow-2xl transform rotate-3 transition-all duration-500 group-hover:rotate-0 group-hover:scale-105 relative z-10">
                <div className="relative overflow-hidden rounded-lg border border-gray-100">
                  <img
                    src={sertifikatImg}
                    alt="Sertifikat Resmi SMP Qur'an Assyauqi"
                    className="w-full h-auto object-cover"
                  />
                  {/* Sheen effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-white/20 rounded-xl blur-2xl transform scale-110 -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seaction__sertifikasi;

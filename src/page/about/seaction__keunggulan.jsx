import { motion as Motion } from "framer-motion";
import Button from "../../component/Button";

const Seaction__keunggulan = () => {
  const stats = [
    {
      value: "#1",
      label: "Prestasi",
      desc: "Pondok Pesantren bergengsi di setiap Perlombaan Hafiz",
    },
    {
      value: "P2",
      label: "Kurikulum",
      desc: "Pengetahuan Al-Qur’an dan Pengetahuan Umum",
    },
    {
      value: "15 Juz",
      label: "Target Hafalan",
      desc: "Minimal Hafalan Setelah Lulus",
    },
    {
      value: "2022",
      label: "Berdiri",
      desc: "Tahun didirikannya Pondok Pesantren",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden rounded-2xl">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Kenapa Harus Bergabung Dengan Kami?
            </h2>
            <p className="text-white/80 text-lg">
              Kami menawarkan lingkungan belajar yang kondusif dengan metode
              pembelajaran modern yang terintegrasi dengan nilai-nilai
              keislaman.
            </p>
          </Motion.div>
          <Motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeiVbj1oUbye_KVPuX1ln60Jt8aTkC3JCmzb943GMXLpIrthA/viewform?usp=publish-editor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                className="bg-white text-primary hover:bg-slate-100 px-8 py-4 shadow-lg"
              >
                Daftar Sekarang
              </Button>
            </a>
          </Motion.div>
        </div>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <Motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 transition-colors duration-300 group"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform origin-left">
                {stat.value}
              </h3>
              <h4 className="text-xl font-bold mb-3">{stat.label}</h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {stat.desc}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Seaction__keunggulan;

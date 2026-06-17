import { motion as Motion } from "framer-motion";
import bahasaArab from "../../assets/image/bahasaArab.jpg";
import kitabKuning from "../../assets/image/kitabKuning.jpg";
import metodeJariQuran from "../../assets/image/metodeJariQuran.jpg";

const ProgramUnggulan = () => {
  const programs = [
    { title: "Metode Jari Qur’an", image: metodeJariQuran },
    { title: "Kitab Kuning", image: kitabKuning },
    { title: "Bahasa Arab", image: bahasaArab },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-primary text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block border-b-4 border-amber-500 pb-2">
            Program Unggulan
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            Kami menyediakan berbagai program unggulan untuk menunjang
            pembelajaran santri
          </p>
        </Motion.div>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <Motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 shadow-lg border border-white/10"
            >
              <div className="h-64 overflow-hidden relative">
                <Motion.img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-white group-hover:text-gray-300 transition-colors">
                  {program.title}
                </h3>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default ProgramUnggulan;

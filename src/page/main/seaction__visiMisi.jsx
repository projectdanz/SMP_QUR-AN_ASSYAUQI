import { motion as Motion } from "framer-motion";
import image__saung from "../../assets/image/saungPondok.jpg";

const VisiMisi = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-16 px-4 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
        >
          {/* Image Section (Left) */}
          <Motion.div
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="w-full md:w-1/2 h-64 md:h-auto relative"
          >
            <img
              src={image__saung}
              alt="Saung Pondok"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/10"></div>
          </Motion.div>

          {/* Content Section (Right) */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <Motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-primary mb-4 border-b-2 border-amber-500 inline-block pb-2">
                Visi
              </h2>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "Mendidik Generasi Qur’ani Yang Terbangun Jiwa Leadership Dan
                Enterpreneurship"
              </p>
            </Motion.div>

            <div>
              <Motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-3xl font-bold text-primary mb-4 border-b-2 border-amber-500 inline-block pb-2"
              >
                Misi
              </Motion.h2>
              <Motion.ol
                variants={listVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                <Motion.li variants={itemVariants} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">
                    1
                  </span>
                  <p className="text-gray-700">
                    Menyelenggaraan pesantren leaderpreneurship secara formal
                    maupun non formal
                  </p>
                </Motion.li>
                <Motion.li variants={itemVariants} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">
                    2
                  </span>
                  <p className="text-gray-700">
                    Menyiapkan wiyata mandala qur’ani nuansa asri, nyaman dan
                    berseri
                  </p>
                </Motion.li>
                <Motion.li variants={itemVariants} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">
                    3
                  </span>
                  <p className="text-gray-700">
                    Membekali peserta didik untuk berjiwa pemimpin dan bermental
                    wirausaha
                  </p>
                </Motion.li>
              </Motion.ol>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default VisiMisi;

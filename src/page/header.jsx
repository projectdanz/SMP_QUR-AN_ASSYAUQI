import { motion as Motion } from "framer-motion";
import image__school from "../assets/image/image__school.jpg";
import image__school__mobile from "../assets/mobile/image__school.jpg";
import Button from "../component/Button";

const Header = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <Motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <picture>
          <source srcSet={image__school__mobile} media="(max-width: 768px)" />
          <img
            src={image__school}
            alt="School Background"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-black/50"></div>
      </Motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <Motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 tracking-wide drop-shadow-lg"
        >
          SMP QUR'AN ASSYAUQI BOARDING SCHOOL
        </Motion.h1>

        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md"
        >
          “Mendidik Generasi Qur’ani Yang Terbangun Jiwa Leadership Dan
          Enterpreneurship”
        </Motion.p>

        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeiVbj1oUbye_KVPuX1ln60Jt8aTkC3JCmzb943GMXLpIrthA/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="primary"
              className="bg-amber-600 hover:bg-amber-700"
            >
              Daftar Sekarang
            </Button>
          </a>
        </Motion.div>
      </div>
    </div>
  );
};

export default Header;

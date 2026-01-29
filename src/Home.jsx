import Header from "./page/header";
import VisiMisi from "./page/main/seaction__visiMisi";
import ProgramUnggulan from "./page/main/seaction__programUnggulan";
import Fasilitas from "./page/main/seaction__fasilitas";
import DocumentationCard from "./component/DocumentationCard";
import Testimoni from "./page/main/seaction__testimoni";
import Footer from "./page/footer";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./component/Button";

import Festival2 from "./assets/image/Documentasi_kegiatan/FestivalMusabaqoh-2.jpeg";
import Festival1 from "./assets/image/Documentasi_kegiatan/FestivalMusabaqoh-1.jpeg";
import Festival6 from "./assets/image/Documentasi_kegiatan/FestivalMusabaqoh-6.jpeg";

import JuaraHorsebow3 from "./assets/image/Documentasi_kegiatan/KejuaraanHorseBow-3.jpeg";
import Horsebow4 from "./assets/image/Documentasi_kegiatan/KegiatanHorseBow-4.jpeg";
import Horsebow5 from "./assets/image/Documentasi_kegiatan/KegiatanHorseBow-5.jpeg";




const Home = () => {
  const imagesMHQ = [
    Festival1,
    Festival2,
    Festival6,
  ];

  const imagesPanahan = [
    Horsebow4,
    JuaraHorsebow3,
    Horsebow5,
  ];

  return (
    <>
      <Header />
      <VisiMisi />
      <ProgramUnggulan />
      <Fasilitas />
      <div className="flex justify-center pb-8">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeiVbj1oUbye_KVPuX1ln60Jt8aTkC3JCmzb943GMXLpIrthA/viewform?usp=publish-editor"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-64 py-4">Daftar Sekarang</Button>
        </a>
      </div>
      {/* Documentation Card Section */}
      <section className="py-20 px-4 bg-gray-50 my-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            Dokumentasi Kegiatan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DocumentationCard
              images={imagesMHQ}
              title="Kegiatan Acara MHQ"
              date="20 Desember 2025"
              targetId="acara-mhq"
            />
            <DocumentationCard
              images={imagesPanahan}
              title="Kegiatan Horsebow"
              date="28 Desember 2025"
              targetId="horsebow"
            />
          </div>
        </div>
      </section>
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/6282297855589?text=Halo%20Saya%20ingin%20bertanya%20mengenai%20penerimaan%20santri/santriwati%20SMP%20Quran%20Asy%20Syauqi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#0390F1] text-white rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={32} color="#ffffffff" />
      </a>
    </>
  );
};

export default Home;

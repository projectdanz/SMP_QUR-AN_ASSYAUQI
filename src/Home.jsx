import Header from "./page/header";
import VisiMisi from "./page/main/seaction__visiMisi";
import ProgramUnggulan from "./page/main/seaction__programUnggulan";
import Fasilitas from "./page/main/seaction__fasilitas";
import DocumentationCard from "./component/DocumentationCard";
import Testimoni from "./page/main/seaction__testimoni";
import Footer from "./page/footer";
import { FaWhatsapp } from "react-icons/fa";
import Button from "./component/Button";
import Documentasi1 from "./assets/image/Documentasi_kegiatan/documentasi1.jpeg";
import Documentasi2 from "./assets/image/Documentasi_kegiatan/documentasi2.jpeg";
import Documentasi3 from "./assets/image/Documentasi_kegiatan/documentasi3.jpeg";
import Documentasi4 from "./assets/image/Documentasi_kegiatan/documentasi4.jpeg";
import Documentasi5 from "./assets/image/Documentasi_kegiatan/documentasi5.jpeg";
import Documentasi6 from "./assets/image/Documentasi_kegiatan/documentasi6.jpeg";
import Documentasi7 from "./assets/image/Documentasi_kegiatan/documentasi7.jpeg";
import Documentasi8 from "./assets/image/Documentasi_kegiatan/documentasi8.jpeg";
import Documentasi9 from "./assets/image/Documentasi_kegiatan/documentasi9.jpeg";
import Documentasi10 from "./assets/image/Documentasi_kegiatan/documentasi10.jpeg";
import Documentasi11 from "./assets/image/Documentasi_kegiatan/documentasi11.jpeg";
import Documentasi12 from "./assets/image/Documentasi_kegiatan/documentasi12.jpeg";
import Documentasi13 from "./assets/image/Documentasi_kegiatan/documentasi13.jpeg";
import Documentasi14 from "./assets/image/Documentasi_kegiatan/documentasi14.jpeg";
import Documentasi15 from "./assets/image/Documentasi_kegiatan/documentasi15.jpeg";
import Documentasi16 from "./assets/image/Documentasi_kegiatan/documentasi16.jpeg";
import Documentasi17 from "./assets/image/Documentasi_kegiatan/documentasi17.jpeg";
import Documentasi18 from "./assets/image/Documentasi_kegiatan/documentasi18.jpeg";
import Documentasi19 from "./assets/image/Documentasi_kegiatan/documentasi19.jpeg";

const Home = () => {
  const imagesMHQ = [
    Documentasi1,
    Documentasi2,
    Documentasi3,
    Documentasi4,
    Documentasi5,
    Documentasi6,
    Documentasi7,
    Documentasi8,
    Documentasi18,
  ];
  
  const imagesPanahan = [
    Documentasi9,
    Documentasi10,
    Documentasi11,
    Documentasi12,
    Documentasi13,
    Documentasi14,
    Documentasi15,
    Documentasi16,
    Documentasi17,
    Documentasi19,
  ];

  return (
    <>
      <Header />
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
              title="Horsebow"
              date="28 Desember 2025"
              targetId="horsebow"
            />
          </div>
        </div>
      </section>
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
      {/* Documentation Gallery Sections */}
      <section id="acara-mhq" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 md:mb-12 text-center">
            Dokumentasi Kegiatan MHQ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {imagesMHQ.map((img, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={img}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  alt={`Dokumentasi MHQ ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="panahan" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 md:mb-12 text-center">
            Dokumentasi Kegiatan Panahan
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {imagesPanahan.map((img, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={img}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  alt={`Dokumentasi Kegiatan Panahan ${i + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <Testimoni /> */}
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

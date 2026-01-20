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

const Home = () => {
  const images = [
    Documentasi1,
    Documentasi2,
    Documentasi3,
    Documentasi4,
    Documentasi5,
  ];

  return (
    <>
      <Header />
      {/* Documentation Card Section */}
      <section className="flex justify-center py-10 px-4 bg-gray-50 my-20">
        <div className="max-w-6xl mx-auto">
          <DocumentationCard
            images={images}
            title="Kegiatan Acara MHQ"
            date="20 Desember 2025"
            targetId="acara-mhq"
          />
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
      {/* Documentation Gallery Section */}
      <section id="acara-mhq" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 md:mb-12 text-center">
            Dokumentasi Kegiatan SMP QUR'AN ASSYAUQI
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {images.map((img, i) => (
              <div
                key={i}
                className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img
                  src={img}
                  className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  alt={`Dokumentasi Bakti Sosial ${i + 1}`}
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

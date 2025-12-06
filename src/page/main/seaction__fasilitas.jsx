import Kelas from "../../assets/image/kelasAC.png";
import LabKomp from "../../assets/image/labKomp.png";
import Asrama from "../../assets/image/asramaAC.png";

const Fasilitas = () => {
    const facilities = [
        {
            image: LabKomp,
            title: "Laboratorium Komputer AC",
            description: "Dilengkapi dengan akses internet berkecepatan tinggi untuk menunjang pembelajaran digital.",
        },
        {
            image: Kelas,
            title: "Ruang Kelas AC",
            description: "Ruang belajar yang nyaman dan kondusif dengan pendingin ruangan di setiap kelas.",
        },
        {
            image: Asrama,
            title: "Asrama AC",
            description: "Fasilitas asrama terpisah untuk putra dan putri dengan kenyamanan pendingin ruangan.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-4">Fasilitas Unggulan</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        Kami menyediakan fasilitas terbaik untuk menunjang kegiatan belajar mengajar dan kenyamanan siswa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {facilities.map((item, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                        >
                            <div className="relative overflow-hidden h-56">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Fasilitas;

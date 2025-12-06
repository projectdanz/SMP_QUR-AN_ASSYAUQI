import image__saung from "../../assets/image/saungPondok.jpg";

const visiMisi = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Image Section (Left) */}
                    <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                        <img 
                            src={image__saung} 
                            alt="Saung Pondok" 
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-primary/10"></div>
                    </div>

                    {/* Content Section (Right) */}
                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-primary mb-4 border-b-2 border-amber-500 inline-block pb-2">Visi</h2>
                            <p className="text-lg text-gray-700 italic leading-relaxed">
                                "Mendidik Generasi Qur’ani Yang Terbangun Jiwa Leadership Dan Enterpreneurship"
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-primary mb-4 border-b-2 border-amber-500 inline-block pb-2">Misi</h2>
                            <ol className="space-y-4">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">1</span>
                                    <p className="text-gray-700">Menyelenggaraan pesantren leaderpreneurship secara formal maupun non formal</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">2</span>
                                    <p className="text-gray-700">Menyiapkan wiyata mandala qur’ani nuansa asri, nyaman dan berseri</p>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold mr-3 mt-1">3</span>
                                    <p className="text-gray-700">Membekali peserta didik untuk berjiwa pemimpin dan bermental wirausaha</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default visiMisi;
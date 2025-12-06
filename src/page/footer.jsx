import Navbar from "../component/navbar";
import SchoolLogo from "../assets/icon/iconPondok.png";

const Footer = () => {
    const navLinks = [
        { href: "#", label: "Home" },
        { href: "#", label: "About Us" },
        { href: "#", label: "Contact Us" },
    ];

    return (
        <footer className="bg-secondary text-white py-16">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left Column: Info & Links */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <img src={SchoolLogo} alt="Logo" className="h-12 w-auto" />
                                <h3 className="text-2xl font-bold tracking-wide">SMP QUR'AN ASY SYAUQI</h3>
                            </div>
                            <p className="text-gray-400 text-sm">
                                Membentuk Generasi Qur'ani yang Berakhlak Mulia dan Berprestasi.
                            </p>
                        </div>
                        
                        <div>
                            <Navbar links={navLinks} variant="footer" />
                        </div>

                        <div className="text-gray-400 text-sm space-y-2">
                            <p>Jl. Raya Indramayu No. 123, Jawa Barat</p>
                            <p>Email: info@asy-syauqi.sch.id</p>
                            <p>Telp: (0234) 123456</p>
                        </div>
                    </div>

                    {/* Right Column: Map */}
                    <div className="w-full h-72 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                        <iframe 
                            src="https://maps.google.com/maps?q=SMP+QUR'AN+ASY+SYAUQI+Indramayu&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy"
                            title="Lokasi Sekolah"
                        ></iframe>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} SMP Qur'an Asy Syauqi. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
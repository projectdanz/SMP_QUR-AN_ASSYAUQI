import { useState, useEffect } from 'react';
import SchoolLogo from "../assets/icon/iconPondok.png";

const Navbar = ({ links = [], className = "", variant = "fixed" }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        if (variant !== "fixed") return;

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [variant]);

    if (variant === "footer") {
        return (
            <div className={`flex flex-col gap-4 ${className}`}>
                {links.map((link, index) => (
                    <a 
                        key={index} 
                        href={link.href} 
                        className="text-gray-300 hover:text-white transition-colors font-medium text-sm md:text-base"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        );
    }

    return (
        <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary shadow-md py-4" : "bg-transparent py-6"} ${className}`}>
            <div className="container mx-auto flex justify-between items-center px-6">
                {/* Logo / Brand Name - Visible only when scrolled */}
                <div className={`flex items-center gap-3 transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}>
                    <img src={SchoolLogo} alt="Logo" className="h-10 w-auto" />
                    <div className="text-md font-bold text-white">
                        SMP QUR'AN ASY SYAUQI
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex gap-10 text-white">
                    {links.map((link, index) => (
                        <a key={index} href={link.href} className="hover:text-gray-300 transition-colors font-medium">
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
const Testimoni = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        Sambutan dari Bpk. Wakil Bupati Indramayu
                    </h2>
                    <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
                </div>
                
                <div className="relative w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-gray-100">
                    {/* Video Element */}
                    <video 
                        src="" 
                        controls 
                        className="w-full h-full object-cover"
                        poster="https://placehold.co/1920x1080/1a1a1a/ffffff?text=Video+Sambutan"
                    >
                        Your browser does not support the video tag.
                    </video>

                    {/* Fallback/Placeholder Overlay (Visible if no video src or poster fails) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimoni;
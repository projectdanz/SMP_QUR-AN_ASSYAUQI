const Testimoni = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Dokumentasi Pelaksanaan Akreditasi Sekolah
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* 
          Penyesuaian untuk Video Vertikal (9:16):
          - Menggunakan max-w-md (atau max-w-sm) agar video portrait tidak terlalu raksasa di layar desktop.
          - Mengubah aspect-video (16:9) menjadi aspect-[9/16] agar frame pas dengan bentuk video.
        */}
        <div className="relative w-full max-w-md mx-auto aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-gray-100">
          {/* Video Element */}
          <video
            src="/video-akreditasi.mp4" /* Mengarah langsung ke public/video-akreditasi.mp4 */
            controls
            playsInline /* Bagus untuk iOS agar video tidak otomatis full screen saat di-play */
            className="w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;

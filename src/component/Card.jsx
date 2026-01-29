import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Card({
  image,
  title,
  date,
  location,
  targetId,
  caption,
}) {
  return (
    <div
      id={targetId}
      className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] transition-all duration-500 group max-w-5xl mx-auto mb-10"
    >
      <div className="flex flex-col md:flex-row min-h-[320px]">
        {/* Image Section */}
        <div className="w-full md:w-[45%] relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[55%] p-8 md:p-10 flex flex-col justify-between bg-white">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="px-3 py-1 bg-blue-50 text-[#006DB8] text-[10px] font-bold rounded-full uppercase tracking-widest border border-blue-100/50">
                Dokumentasi
              </span>
              <div className="h-1 w-1 bg-gray-300 rounded-full" />
              <span className="text-[10px] text-gray-400 font-medium uppercase tracking-widest">
                {date}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#061E29] mb-4 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-500 leading-relaxed mb-8 text-base font-light">
              {caption ? caption : "-"}
            </p>
          </div>

          <div className="space-y-4 pt-6 border-t border-gray-50">
            <div className="flex items-center text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mr-3 group-hover:bg-blue-50 transition-colors">
                <FaMapMarkerAlt className="text-primary text-xs" />
              </div>
              <span className="font-medium">
                {location || "SMP Quran Assyauqi"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

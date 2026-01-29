import { Link } from "react-router-dom";

const DocumentationCard = ({ images, title, date, targetId }) => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition">
      {/* Image Preview */}
      <div className="grid grid-cols-3 gap-1 h-56">
        {images.slice(0, 3).map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`dokumentasi-${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>

        <p className="text-sm text-gray-500">{date}</p>

        <div className="flex justify-center">
          <Link
            to={`/documentation#${targetId}`}
            className="mt-3 inline-block w-64 text-center rounded-full 
                       bg-[#061E29] text-white py-2.5 px-4 text-sm font-semibold
                       hover:bg-teal-600 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
          >
            Lihat Dokumentasi Lengkap
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DocumentationCard;

import { carousels } from "../data/workData";

export default function Carousels() {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">
        Carousels
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {carousels.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-56 object-cover rounded-lg"
            />

            <h3 className="font-semibold mt-4">
              {item.title}
            </h3>

            <a
              href={item.file}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600"
            >
              View PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
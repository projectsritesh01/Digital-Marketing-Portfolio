import {
  informationalImages,
  promotionalImages,
  specialDayImages,
  thematicImages,
} from "../data/workData";
import { useState } from "react";

export default function Images() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sections = [
    {
      title: "Informational Images",
      items: informationalImages,
    },
    {
      title: "Promotional Images",
      items: promotionalImages,
    },
    {
      title: "Special Day Images",
      items: specialDayImages,
    },
    {
      title: "Thematic Images",
      items: thematicImages,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">
        Images
      </h1>

      {sections.map((section) => (
        <div key={section.title} className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">
            {section.title}
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {section.items.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  onClick={() => setSelectedImage(item.image)}
                  className="w-full h-56 object-cover rounded-lg"
                />

                <h3 className="font-semibold mt-4">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-[90vw] max-h-[90vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
import { informationalImages } from "../data/workData";
import { useState } from "react";

export default function InformationalImages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">
        Informational Images
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {informationalImages.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-4">
            <img
              src={item.image}
              alt={item.title}
              onClick={() => setSelectedImage(item.image)}
              className="w-full h-56 object-cover rounded-lg cursor-pointer"
            />

            
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt=""
            className="max-w-[90vw] max-h-[90vh]"
          />
        </div>
      )}
    </div>
  );
}
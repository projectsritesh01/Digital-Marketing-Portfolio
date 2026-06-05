import { reels } from "../data/workData";

export default function Reels() {
  return (
    <div className="max-w-7xl mx-auto py-20">
      <h1 className="text-4xl font-bold mb-10">
        Reels
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {reels.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-4"
          >
            <video
              controls
              className="w-full h-56 rounded-lg"
            >
              <source src={item.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <h3 className="font-semibold mt-4">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
import { useNavigate } from "react-router";

export default function Images() {
  const navigate = useNavigate();

  const folders = [
    {
      title: "Informational Images",
      path: "/my-work/images/informational",
    },
    {
      title: "Promotional Images",
      path: "/my-work/images/promotional",
    },
    {
      title: "Special Day Images",
      path: "/my-work/images/special-days",
    },
    {
      title: "Thematic Images",
      path: "/my-work/images/thematic",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-10">
        Images
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {folders.map((folder) => (
          <div
            key={folder.title}
            onClick={() => navigate(folder.path)}
            className="cursor-pointer bg-white rounded-xl shadow-lg p-10 hover:shadow-2xl transition"
          >
            <div className="text-6xl mb-4">📁</div>

            <h2 className="text-2xl font-semibold">
              {folder.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
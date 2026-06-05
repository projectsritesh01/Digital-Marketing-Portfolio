import { motion } from "motion/react";
import { FileText, Image as ImageIcon, Book, Palette, BarChart3, Shapes, Video, Megaphone } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  brochures,
  ebooks,
  carousels,
  infographics,
  logos,
  metaAds,
  reels,
  informationalImages,
  promotionalImages,
  specialDayImages,
  thematicImages,
} from "../../data/workData";
import { useNavigate } from "react-router";


export function MyWork() {
  const navigate = useNavigate();
  

  const categories = [
    {
      id: "brochures",
      title: "Brochures",
      icon: FileText,
      description: "Professional brochure designs for various clients and campaigns",
      color: "from-blue-500 to-cyan-500",
      items: brochures,
    },
    {
      id: "carousels",
      title: "Carousels",
      icon: Shapes,
      description: "Engaging social media carousel posts for Instagram and LinkedIn",
      color: "from-purple-500 to-pink-500",
      items: carousels,
    },
    {
      id: "ebooks",
      title: "Ebooks",
      icon: Book,
      description: "Comprehensive ebook designs and lead magnets",
      color: "from-orange-500 to-red-500",
      items: ebooks,
    },
    {
      id: "images",
      title: "Images",
      icon: ImageIcon,
      description: "Custom graphics, social media posts, and visual content",
      color: "from-green-500 to-teal-500",
      items: [
        ...informationalImages,
        ...promotionalImages,
        ...specialDayImages,
        ...thematicImages,
      ]
    },
    {
      id: "infographics",
      title: "Infographics",
      icon: BarChart3,
      description: "Data visualization and informational graphics",
      color: "from-indigo-500 to-purple-500",
      items: infographics,
    },
    {
      id: "logos",
      title: "Logo",
      icon: Palette,
      description: "Brand identity and logo design projects",
      color: "from-pink-500 to-rose-500",
      items: logos,
    },
    {
      id: "meta-ads",
      title: "Meta Ads",
      icon: Megaphone,
      description: "Facebook and Instagram ad creatives with proven performance",
      color: "from-blue-600 to-indigo-600",
      items: metaAds,
    },
    {
      id: "reels",
      title: "Reels",
      icon: Video,
      description: "Short-form video content for social media platforms",
      color: "from-red-500 to-orange-500",
      items: reels,
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">My Work</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of digital marketing assets, creative designs, and campaign materials
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => navigate(`/my-work/${category.id}`)}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className={`h-32 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                <category.icon className="w-16 h-16 text-white group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        

        {/* Work Stats */}
        <section className="mt-20 bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                150+
              </div>
              <div className="text-gray-600">Total Creatives</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                8
              </div>
              <div className="text-gray-600">Content Categories</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
                600+
              </div>
              <div className="text-gray-600">Avg Impressions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                33%
              </div>
              <div className="text-gray-600">Conversion Rate</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

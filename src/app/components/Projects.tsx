import { motion } from "motion/react";
import { ExternalLink, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Zylentrix — Digital Presence Buildout",
      category: "Social Media Marketing",
      description: "Built and scaled company's entire digital presence from ground zero across LinkedIn, Instagram, Facebook and X",
      image: "https://images.unsplash.com/photo-1777559542653-944182ce96db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzkyMjA5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { label: "LinkedIn Growth", value: "0→22K" },
        { label: "Avg Impressions", value: "600+" },
        { label: "Creatives Created", value: "150+" },
      ],
    },
    {
      title: "Digizign — In-house Agency Unit",
      category: "Agency Operations",
      description: "Took initiative to build and scale an in-house agency unit, managing cross-functional team and client operations",
      image: "https://images.unsplash.com/photo-1759215524484-89c8d7ae28f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwbWFya2V0aW5nJTIwY3JlYXRpdmUlMjBkZXNpZ258ZW58MXx8fHwxNzc5MjIwOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { label: "Revenue (2 months)", value: "₹35K" },
        { label: "Team Size", value: "5-7" },
        { label: "Client Cycle", value: "2 months" },
      ],
    },
    {
      title: "Meta Ads Performance Campaigns",
      category: "Paid Advertising",
      description: "Ran targeted Meta Ads campaigns achieving competitive CPL and strong conversion rates across segments",
      image: "https://images.unsplash.com/photo-1709281847802-9aef10b6d4bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwd29ya3NwYWNlJTIwbGFwdG9wfGVufDF8fHx8MTc3OTIyMDkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { label: "CPL", value: "₹15-₹30" },
        { label: "Conversion Rate", value: "~33%" },
        { label: "Monthly Clients", value: "~5" },
      ],
    },
    {
      title: "Numosaic — SEO Strategy",
      category: "SEO",
      description: "Executed SEO strategies achieving first-page rankings for high-traffic keywords with comprehensive tracking",
      image: "https://images.unsplash.com/photo-1657812160299-6b656decd5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW8lMjBzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb258ZW58MXx8fHwxNzc5MjIwOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { label: "First-page Keywords", value: "3" },
        { label: "Follower Growth", value: "700→1.8K" },
        { label: "Active Users", value: "4→80" },
      ],
    },
    {
      title: "GetKit — Modular Digital Product Platform",
      category: "Product Marketing",
      description: "Conducting market research, user validation, and go-to-market positioning with conversion-focused landing page strategy",
      image: "https://images.unsplash.com/photo-1687862528147-0ecb1aa4b81d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMHBsYW5uaW5nfGVufDF8fHx8MTc3OTIwNTQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { label: "Status", value: "Ongoing" },
        { label: "Focus", value: "GTM" },
        { label: "Stage", value: "Research" },
      ],
    },
    {
      title: "Experienzhub — Internal Growth Project",
      category: "Growth Marketing",
      description: "Designed digital acquisition funnel with comprehensive content planning and campaign calendar aligned with conversion intent",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMG1hcmtldGluZyUyMGNhbXBhaWdufGVufDF8fHx8MTc3OTE4MTYzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      metrics: [
        { label: "Monthly Users", value: "30+" },
        { label: "Funnel Type", value: "Acquisition" },
        { label: "Planning", value: "End-to-end" },
      ],
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
          <h1 className="text-5xl font-bold mb-4">Featured Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of successful campaigns and strategies that delivered measurable results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="flex items-center justify-center mb-1">
                        <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                        <span className="font-bold text-green-600">{metric.value}</span>
                      </div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </div>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
                  View Case Study
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

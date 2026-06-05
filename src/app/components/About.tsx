import { motion } from "motion/react";
import { Award, Briefcase, GraduationCap, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const skills = [
    { name: "Meta Ads & Performance Marketing", level: 90 },
    { name: "SEO & Organic Growth", level: 92 },
    { name: "Content Strategy & Creation", level: 95 },
    { name: "Marketing Automation (WATI, Mailchimp)", level: 88 },
    { name: "Analytics & Conversion Tracking", level: 91 },
    { name: "Social Media Management", level: 94 },
  ];

  const certifications = [
    "Google Foundations of Digital Marketing & E-commerce",
    "Facebook Advertising — Simplilearn",
  ];

  const experience = [
    {
      icon: Briefcase,
      title: "Digital Marketing Strategist / Growth Executive",
      company: "Zylentrix",
      period: "Jan 2025 - Present",
      description: "Built company's digital presence from ground zero, grew LinkedIn from 0 → 22,000+ followers. Ran Meta Ads at ₹15–₹30 CPL with ~33% conversion rate. Built and scaled Digizign, generating ₹30,000–₹35,000 revenue. Managed 150+ creatives end-to-end.",
    },
    {
      icon: Briefcase,
      title: "SEO and SMM Analyst",
      company: "Numosaic",
      period: "Jul 2024 – Dec 2024",
      description: "Achieved first-page rankings for 3 high-traffic keywords. Grew social media followers from 700 → 1,800. Raised real-time active users from 4 → 80 through UX improvements. Improved email open rates by 15%.",
    },
    {
      icon: GraduationCap,
      title: "BBA — MMMUT, Gorakhpur",
      company: "CGPA: 9.02 / 10.0",
      period: "2023 - 2026",
      description: "Currently pursuing Bachelor of Business Administration with focus on marketing, analytics, and business strategy.",
    },
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold mb-6">About Me</h1>
              <p className="text-xl text-gray-600 mb-6">
                Growth-oriented Digital Marketing enthusiast bridging marketing, analytics, and product execution to drive scalable results.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Experienced in performance campaigns, SEO-led organic growth, marketing automation, and cross-functional team leadership across B2B and B2C environments. My approach combines data-driven strategies with creative execution to deliver measurable business outcomes.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-blue-600 mr-2" />
                  <span className="font-semibold">Employee of the Month (July 2025)</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-6 h-6 text-red-500 mr-2" />
                  <span className="font-semibold">Team of the Month (May & June 2025)</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1687862528147-0ecb1aa4b81d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneSUyMHBsYW5uaW5nfGVufDF8fHx8MTc3OTIwNTQ5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Marketing Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">
              Proficiencies built through years of hands-on experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{skill.name}</span>
                  <span className="text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Experience</h2>
            <p className="text-xl text-gray-600">
              My professional journey in digital marketing
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <exp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <span className="text-blue-600 font-medium">{exp.company}</span>
                      <span className="text-gray-500 text-sm">{exp.period}</span>
                    </div>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Certifications</h2>
            <p className="text-xl text-gray-600">
              Professional credentials and continuous learning
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200 text-center"
              >
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <p className="font-semibold">{cert}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

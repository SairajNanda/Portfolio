import { motion } from "motion/react";

const Education = () => {
  const getColorClasses = (theme) => {
    const colorMap = {
      university: {
        card: "from-blue-900/20 to-blue-800/30 border-blue-600/30 hover:border-blue-400/50 hover:shadow-blue-500/10",
        text: "text-blue-300",
        badge: "from-blue-500/10 to-cyan-500/10 text-blue-300 border-blue-400/20 hover:from-blue-500/20 hover:to-cyan-500/20 hover:border-blue-400/40 hover:text-blue-200 hover:shadow-blue-500/20"
      },
      coursework: {
        card: "from-purple-900/20 to-purple-800/30 border-purple-600/30 hover:border-purple-400/50 hover:shadow-purple-500/10",
        text: "text-purple-300",
        badge: "from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-400/20 hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-400/40 hover:text-purple-200 hover:shadow-purple-500/20"
      }
    };
    return colorMap[theme] || colorMap.university;
  };

  const coursework = [
    {
      category: "Core Data Science",
      courses: ["Machine Learning & Deep Learning", "Natural Language Processing", "Statistical Analysis", "Data Structures & Algorithms"],
      icon: "📊",
      colorTheme: "university"
    },
    {
      category: "Technical Skills",
      courses: ["Computer Vision", "Database Management", "Software Engineering", "Web Development"],
      icon: "💻",
      colorTheme: "coursework"
    }
  ];

  return (
    <section className="c-space section-spacing" id="education">
      <h2 className="text-heading">Education</h2>
      <div className="bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mt-12 h-[1px] w-full" />
      
      <div className="mt-12 space-y-8">
        {/* Main Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-xl p-8 border border-slate-600/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 backdrop-blur-sm"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">🎓</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    BS in Data Science and Programming
                  </h3>
                  <p className="text-lg text-blue-300 mb-2 font-medium">
                    Indian Institute of Technology Madras
                  </p>
                  <p className="text-blue-200">
                    January 2022 - December 2025
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </motion.div>

        {/* Coursework Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-xl p-8 border border-slate-600/30 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-3xl mr-3">📚</span>
            Key Coursework
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {coursework.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${getColorClasses(category.colorTheme).card} rounded-xl p-6 border transition-all duration-300 backdrop-blur-sm hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{category.icon}</span>
                  <h4 className="text-lg font-semibold text-white">
                    {category.category}
                  </h4>
                </div>
                <div className="space-y-3">
                  {category.courses.map((course, courseIndex) => (
                    <motion.div
                      key={course}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (courseIndex * 0.05) }}
                      className={`flex items-center space-x-3 p-3 bg-gradient-to-r ${getColorClasses(category.colorTheme).badge} rounded-lg border transition-all duration-300 hover:scale-105`}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className={`${getColorClasses(category.colorTheme).text} text-sm font-medium`}>
                        {course}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

import { motion } from "motion/react";

const Skills = () => {
  const getColorClasses = (theme) => {
    const colorMap = {
      blue: {
        card: "from-blue-900/20 to-blue-800/30 border-blue-600/30 hover:border-blue-400/50 hover:shadow-blue-500/10",
        text: "text-blue-300",
        skill: "from-blue-500/10 to-cyan-500/10 text-blue-300 border-blue-400/20 hover:from-blue-500/20 hover:to-cyan-500/20 hover:border-blue-400/40 hover:text-blue-200 hover:shadow-blue-500/20"
      },
      emerald: {
        card: "from-emerald-900/20 to-emerald-800/30 border-emerald-600/30 hover:border-emerald-400/50 hover:shadow-emerald-500/10",
        text: "text-emerald-300",
        skill: "from-emerald-500/10 to-teal-500/10 text-emerald-300 border-emerald-400/20 hover:from-emerald-500/20 hover:to-teal-500/20 hover:border-emerald-400/40 hover:text-emerald-200 hover:shadow-emerald-500/20"
      },
      purple: {
        card: "from-purple-900/20 to-purple-800/30 border-purple-600/30 hover:border-purple-400/50 hover:shadow-purple-500/10",
        text: "text-purple-300",
        skill: "from-purple-500/10 to-pink-500/10 text-purple-300 border-purple-400/20 hover:from-purple-500/20 hover:to-pink-500/20 hover:border-purple-400/40 hover:text-purple-200 hover:shadow-purple-500/20"
      },
      orange: {
        card: "from-orange-900/20 to-orange-800/30 border-orange-600/30 hover:border-orange-400/50 hover:shadow-orange-500/10",
        text: "text-orange-300",
        skill: "from-orange-500/10 to-red-500/10 text-orange-300 border-orange-400/20 hover:from-orange-500/20 hover:to-red-500/20 hover:border-orange-400/40 hover:text-orange-200 hover:shadow-orange-500/20"
      }
    };
    return colorMap[theme] || colorMap.blue;
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["Python", "SQL", "HTML", "C++", "JavaScript"],
      description: "Core programming languages for development and data analysis",
      colorTheme: "blue"
    },
    {
      title: "Frameworks & Tools",
      icon: "🛠️",
      skills: ["Flask", "REST API", "Vue CLI", "Jinja2", "Bootstrap", "Redis", "Caching", "Flask-SQLAlchemy", "Git", "Bash", "Node.js", "Next.js", "React", "Streamlit", "Django", "Pandas", "Numpy", "PostgreSQL", "Postman"],
      description: "Modern frameworks and development tools for building scalable applications",
      colorTheme: "emerald"
    },
    {
      title: "ML/DL Libraries & Techniques",
      icon: "🤖",
      skills: ["Scikit-learn", "NLP", "Speech Technologies", "Tesseract", "Embeddings", "NumPy", "Pandas", "Matplotlib", "Seaborn", "YOLO", "OpenCV", "TensorFlow", "PyTorch"],
      description: "Machine learning and deep learning libraries for AI development",
      colorTheme: "purple"
    },
    {
      title: "Soft Skills",
      icon: "👥",
      skills: ["Leadership", "Strategic Planning", "Time Management", "Problem-Solving", "Multi-Tasking", "Team Motivation", "Communication", "Project Management"],
      description: "Essential interpersonal and management skills for team collaboration",
      colorTheme: "orange"
    }
  ];

  return (
    <section className="c-space section-spacing" id="skills">
      <h2 className="text-heading">Skills</h2>
      <div className="bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mt-12 h-[1px] w-full" />
      
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${getColorClasses(category.colorTheme).card} rounded-xl p-8 border transition-all duration-300 backdrop-blur-sm`}
          >
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{category.icon}</span>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            
            <p className={`${getColorClasses(category.colorTheme).text} text-sm mb-6 leading-relaxed`}>
              {category.description}
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: (index * 0.1) + (skillIndex * 0.03) 
                  }}
                  className={`px-3 py-2 bg-gradient-to-r ${getColorClasses(category.colorTheme).skill} rounded-lg text-sm font-medium border transition-all duration-300 text-center shadow-sm hover:shadow-md`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

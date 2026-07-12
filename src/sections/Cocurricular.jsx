import { motion } from "motion/react";

const Cocurricular = () => {
  const getColorClasses = (theme) => {
    const colorMap = {
      leadership: {
        card: "from-indigo-900/20 to-indigo-800/30 border-indigo-600/30 hover:border-indigo-400/50 hover:shadow-indigo-500/10",
        text: "text-indigo-300",
        badge: "from-indigo-500/10 to-blue-500/10 text-indigo-300 border-indigo-400/20 hover:from-indigo-500/20 hover:to-blue-500/20 hover:border-indigo-400/40 hover:text-indigo-200 hover:shadow-indigo-500/20"
      },
      multimedia: {
        card: "from-pink-900/20 to-pink-800/30 border-pink-600/30 hover:border-pink-400/50 hover:shadow-pink-500/10",
        text: "text-pink-300",
        badge: "from-pink-500/10 to-rose-500/10 text-pink-300 border-pink-400/20 hover:from-pink-500/20 hover:to-rose-500/20 hover:border-pink-400/40 hover:text-pink-200 hover:shadow-pink-500/20"
      },
      web: {
        card: "from-cyan-900/20 to-cyan-800/30 border-cyan-600/30 hover:border-cyan-400/50 hover:shadow-cyan-500/10",
        text: "text-cyan-300",
        badge: "from-cyan-500/10 to-teal-500/10 text-cyan-300 border-cyan-400/20 hover:from-cyan-500/20 hover:to-teal-500/20 hover:border-cyan-400/40 hover:text-cyan-200 hover:shadow-cyan-500/20"
      },
      sports: {
        card: "from-green-900/20 to-green-800/30 border-green-600/30 hover:border-green-400/50 hover:shadow-green-500/10",
        text: "text-green-300",
        badge: "from-green-500/10 to-emerald-500/10 text-green-300 border-green-400/20 hover:from-green-500/20 hover:to-emerald-500/20 hover:border-green-400/40 hover:text-green-200 hover:shadow-green-500/20"
      }
    };
    return colorMap[theme] || colorMap.leadership;
  };

  const positions = [
    {
      title: "Deputy Secretary of Football Club",
      description: "Organized Orientation session for the Freshers & student football matches frequently.",
      period: "2022-2023",
      icon: "⚽",
      colorTheme: "leadership"
    },
    {
      title: "Coordinator in Multimedia Team",
      description: "As a photographer covered all the events in the Paradox 24.",
      period: "May 2024 - May 2025",
      icon: "📸",
      colorTheme: "multimedia"
    },
    {
      title: "Web Admin For the House Namdapha",
      description: "Created House website alongside managed a huge team of 30 members and led them to contribute towards the house to the benefit of Student Community.",
      period: "Aug 2024 - Aug 2025",
      icon: "🌐",
      colorTheme: "web"
    }
  ];

  const achievements = [
    "State Level Under 15 Cricketer",
    "Regional Under 19 Football Winners",
    "Inter School Under 19 Football Winners",
    "Runner's Up in Football Paradox 22",
    "Runner's Up in Football Paradox 23"
  ];

  return (
    <section className="c-space section-spacing" id="cocurricular">
      <h2 className="text-heading">Cocurricular & Positions of Responsibility</h2>
      <div className="bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent mt-12 h-[1px] w-full" />
      
      <div className="mt-12 space-y-8">
        {/* Positions of Responsibility */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-xl p-8 border border-slate-600/30 hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-3xl mr-3">👔</span>
            Positions of Responsibility
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${getColorClasses(position.colorTheme).card} rounded-xl p-6 border transition-all duration-300 backdrop-blur-sm hover:scale-105`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{position.icon}</span>
                  <h4 className="text-lg font-semibold text-white">
                    {position.title}
                  </h4>
                </div>
                <p className={`${getColorClasses(position.colorTheme).text} text-sm mb-4 leading-relaxed`}>
                  {position.description}
                </p>
                <div className={`inline-block px-3 py-1 bg-gradient-to-r ${getColorClasses(position.colorTheme).badge} rounded-full text-xs font-medium border`}>
                  {position.period}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cocurricular Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-slate-800/50 to-slate-900/80 rounded-xl p-8 border border-slate-600/30 hover:border-green-400/50 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <span className="text-3xl mr-3">🏆</span>
            Cocurricular Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`flex items-center space-x-3 p-4 bg-gradient-to-r ${getColorClasses('sports').badge} rounded-lg border transition-all duration-300 hover:scale-105`}
              >
                <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0 animate-pulse"></div>
                <span className="text-green-200 font-medium">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Cocurricular;

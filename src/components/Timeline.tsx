
const Timeline = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "AI Foundation Launch",
      date: "Q1 2024",
      description: "Core AI learning engine with personalized content delivery and basic assessment tools.",
      status: "completed"
    },
    {
      phase: "Phase 2", 
      title: "Advanced Analytics",
      date: "Q2 2024",
      description: "Deep learning analytics, progress prediction, and intelligent content recommendations.",
      status: "current"
    },
    {
      phase: "Phase 3",
      title: "Interactive AI Tutor",
      date: "Q3 2024", 
      description: "Voice-enabled AI tutor with natural language processing and conversational learning.",
      status: "upcoming"
    },
    {
      phase: "Phase 4",
      title: "Global Learning Network",
      date: "Q4 2024",
      description: "Collaborative learning platform with AI-matched study groups and peer learning.",
      status: "upcoming"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Development <span className="text-[#2E8596]">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-600">
            Follow our journey as we build the future of AI-powered education
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2E8596] to-gray-300"></div>
          
          {phases.map((phase, index) => (
            <div key={index} className="relative flex items-start mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className={`
                absolute left-6 w-4 h-4 rounded-full border-4 
                ${phase.status === 'completed' ? 'bg-[#2E8596] border-[#2E8596]' : 
                  phase.status === 'current' ? 'bg-white border-[#2E8596] ring-4 ring-[#2E8596]/20' : 
                  'bg-white border-gray-300'}
                transition-all duration-300
              `}></div>
              
              {/* Content */}
              <div className="ml-20 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 w-full group hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <div className="flex items-center gap-3 mb-2 sm:mb-0">
                    <span className="text-sm font-semibold text-[#2E8596] bg-[#2E8596]/10 px-3 py-1 rounded-full">
                      {phase.phase}
                    </span>
                    <span className="text-sm text-gray-500 font-medium">{phase.date}</span>
                  </div>
                  {phase.status === 'current' && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                      In Progress
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#2E8596] transition-colors duration-300">
                  {phase.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline

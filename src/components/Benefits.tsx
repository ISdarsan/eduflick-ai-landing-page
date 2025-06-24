
import { Brain, Zap, Target } from "lucide-react"

const Benefits = () => {
  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Personalization",
      description: "Advanced machine learning algorithms adapt to your learning style, creating a truly personalized educational experience that evolves with your progress."
    },
    {
      icon: Zap,
      title: "Instant Feedback & Assessment",
      description: "Real-time AI analysis provides immediate feedback on your performance, identifying strengths and areas for improvement with precision accuracy."
    },
    {
      icon: Target,
      title: "Smart Goal Tracking",
      description: "Intelligent goal-setting and progress tracking system that adapts your learning path based on performance metrics and career objectives."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Future of <span className="text-[#2E8596]">Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how artificial intelligence transforms traditional education into an immersive, 
            personalized learning ecosystem designed for the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2E8596]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#2E8596] to-[#2E8596]/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#2E8596] transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits

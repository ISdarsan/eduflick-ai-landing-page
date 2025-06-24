
import { ArrowDown } from "lucide-react"
import { Button } from "./ui/button"

const Hero = () => {
  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-[#2E8596] overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#2E8596] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-[#2E8596] bg-clip-text text-transparent">
              Eduflick AI
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
            Revolutionize Learning with Artificial Intelligence
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Experience personalized education powered by cutting-edge AI technology. 
            Adapt, learn, and excel at your own pace with intelligent tutoring systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={scrollToSignup}
              className="bg-[#2E8596] hover:bg-[#2E8596]/90 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#2E8596]/25"
            >
              Start Your AI Journey
            </Button>
            <Button 
              variant="outline" 
              className="border-[#2E8596] text-[#2E8596] hover:bg-[#2E8596] hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
            >
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div className="animate-bounce mt-12">
          <ArrowDown className="mx-auto text-white w-8 h-8 opacity-60" />
        </div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  )
}

export default Hero

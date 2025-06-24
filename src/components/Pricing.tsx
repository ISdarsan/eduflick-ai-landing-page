
import { Check } from "lucide-react"
import { Button } from "./ui/button"

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "₹2,000",
      period: "/month",
      description: "Perfect for individual learners starting their AI education journey",
      features: [
        "AI-powered content recommendations",
        "Basic progress tracking",
        "5 learning modules access",
        "Email support",
        "Mobile app access",
        "Basic analytics dashboard"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "₹4,500", 
      period: "/month",
      description: "Advanced features for serious learners and professionals",
      features: [
        "Everything in Basic plan",
        "Advanced AI tutor interactions",
        "Unlimited learning modules",
        "Priority support (24/7)",
        "Advanced analytics & insights",
        "Personalized learning paths",
        "Peer collaboration tools",
        "Certificate generation",
        "API access for integrations"
      ],
      popular: true
    }
  ]

  const scrollToSignup = () => {
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your <span className="text-[#2E8596]">Learning Plan</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Unlock the power of AI-driven education with plans designed to fit your learning goals and budget
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`
                relative bg-white rounded-2xl p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl
                ${plan.popular ? 'ring-4 ring-[#2E8596] ring-opacity-50 scale-105' : ''}
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#2E8596] to-[#2E8596]/80 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-[#2E8596]">{plan.price}</span>
                  <span className="text-gray-500 text-lg">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-[#2E8596] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={scrollToSignup}
                className={`
                  w-full py-3 rounded-full font-semibold transition-all duration-300
                  ${plan.popular 
                    ? 'bg-[#2E8596] hover:bg-[#2E8596]/90 text-white hover:scale-105 hover:shadow-lg' 
                    : 'bg-gray-100 hover:bg-[#2E8596] text-gray-900 hover:text-white'
                  }
                `}
              >
                Get Started with {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

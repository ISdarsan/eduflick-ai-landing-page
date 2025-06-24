
import { CheckCircle, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const ThankYou = () => {
  const handleWhatsAppRedirect = () => {
    window.open('http://wa.me/917994765694', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E8596] to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white rounded-3xl p-12 shadow-2xl animate-scale-in">
          <div className="mb-8">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Welcome to the Future!
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Thank you for joining Eduflick AI's early access program. 
              You're now part of an exclusive community that will shape the future of learning.
            </p>
          </div>

          <div className="bg-gradient-to-r from-[#2E8596]/5 to-blue-50 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What's Next?</h2>
            <ul className="text-left space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#2E8596] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                You'll receive priority access to our platform when we launch
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#2E8596] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Exclusive updates on our development progress and new features
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#2E8596] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Special early-bird discounts and bonuses
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#2E8596] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Direct input on features and improvements
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleWhatsAppRedirect}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-3 mx-auto"
            >
              <MessageCircle className="w-6 h-6" />
              Connect on WhatsApp
            </Button>
            
            <Button
              onClick={() => window.location.href = '/'}
              variant="outline"
              className="border-[#2E8596] text-[#2E8596] hover:bg-[#2E8596] hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou

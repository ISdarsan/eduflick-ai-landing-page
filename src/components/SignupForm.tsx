
import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useToast } from "@/hooks/use-toast"
import { supabase } from "@/lib/supabase"
import { useNavigate } from "react-router-dom"

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tier: ''
  })
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase
        .from('early_signups')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            tier: formData.tier,
            created_at: new Date().toISOString()
          }
        ])

      if (error) {
        console.error('Supabase error:', error)
        toast({
          title: "Error",
          description: "Failed to submit form. Please try again.",
          variant: "destructive",
        })
      } else {
        toast({
          title: "Success!",
          description: "Thank you for signing up! We'll be in touch soon.",
        })
        navigate('/thank-you')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="signup" className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join the <span className="text-[#2E8596]">AI Revolution</span>
          </h2>
          <p className="text-xl text-gray-600">
            Be among the first to experience the future of personalized learning
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                required
                className="border-gray-300 focus:border-[#2E8596] focus:ring-[#2E8596] rounded-lg p-3"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                required
                className="border-gray-300 focus:border-[#2E8596] focus:ring-[#2E8596] rounded-lg p-3"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                required
                className="border-gray-300 focus:border-[#2E8596] focus:ring-[#2E8596] rounded-lg p-3"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tier" className="text-gray-700 font-medium">Preferred Plan</Label>
              <Select onValueChange={(value) => handleInputChange('tier', value)} required>
                <SelectTrigger className="border-gray-300 focus:border-[#2E8596] focus:ring-[#2E8596] rounded-lg p-3">
                  <SelectValue placeholder="Select your preferred plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">Basic - ₹2,000/month</SelectItem>
                  <SelectItem value="pro">Pro - ₹4,500/month</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2E8596] hover:bg-[#2E8596]/90 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Secure My Early Access"}
            </Button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            By signing up, you agree to receive updates about Eduflick AI and our launch timeline.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignupForm

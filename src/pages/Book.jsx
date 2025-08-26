import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MessageSquare,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  CreditCard,
  Shield
} from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Card from '../components/ui/Card'
import Loading from '../components/ui/Loading'

const Book = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    specialist: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: '',
    reminders: {
      email: true,
      sms: false
    }
  })
  const [loading, setLoading] = useState(false)
  const [bookingComplete, setBookingComplete] = useState(false)
  const [bookingId, setBookingId] = useState('')

  const { user } = useAuth()
  const navigate = useNavigate()

  const totalSteps = 4

  // Pre-fill user data if logged in
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        firstName: user.name?.split(' ')[0] || '',
        lastName: user.name?.split(' ')[1] || '',
        email: user.email || '',
        phone: user.phone || ''
      }))
    }
  }, [user])

  const services = [
    { id: 'checkup', name: 'General Checkup & Cleaning', duration: '60 min' },
    { id: 'whitening', name: 'Teeth Whitening', duration: '90 min' },
    { id: 'orthodontics', name: 'Orthodontic Consultation', duration: '45 min' },
    { id: 'implants', name: 'Dental Implant Consultation', duration: '60 min' },
    { id: 'root-canal', name: 'Root Canal Treatment', duration: '90 min' },
    { id: 'emergency', name: 'Emergency Care', duration: '30 min' },
    { id: 'consultation', name: 'General Consultation', duration: '30 min' }
  ]

  const specialists = [
    {
      id: 'dr-johnson',
      name: 'Dr. Sarah Johnson',
      specialty: 'General Dentistry',
      experience: '15+ years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
      availableServices: ['checkup', 'root-canal', 'emergency', 'consultation'],
      nextAvailable: '2024-01-15'
    },
    {
      id: 'dr-chen',
      name: 'Dr. Michael Chen',
      specialty: 'Orthodontics',
      experience: '12+ years',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
      availableServices: ['orthodontics', 'consultation'],
      nextAvailable: '2024-01-16'
    },
    {
      id: 'dr-rodriguez',
      name: 'Dr. Emily Rodriguez',
      specialty: 'Cosmetic & Oral Surgery',
      experience: '10+ years',
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1594824804732-5f7cf38f9baa?w=150&h=150&fit=crop&crop=face',
      availableServices: ['whitening', 'implants', 'emergency', 'consultation'],
      nextAvailable: '2024-01-17'
    }
  ]

  // Generate available dates (next 14 days, excluding Sundays)
  const generateAvailableDates = () => {
    const dates = []
    const today = new Date()
    
    for (let i = 1; i <= 21; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      // Skip Sundays (0 = Sunday)
      if (date.getDay() !== 0) {
        dates.push(date)
      }
      
      if (dates.length >= 14) break
    }
    
    return dates
  }

  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = []
    const startHour = 10
    const endHour = 20
    
    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`)
      slots.push(`${hour.toString().padStart(2, '0')}:30`)
    }
    
    return slots
  }

  const availableDates = generateAvailableDates()
  const timeSlots = generateTimeSlots()

  // Filter specialists based on selected service
  const filteredSpecialists = formData.service 
    ? specialists.filter(spec => spec.availableServices.includes(formData.service))
    : specialists

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Generate booking ID
    const id = 'BS' + Date.now().toString().slice(-8)
    setBookingId(id)
    setBookingComplete(true)
    setLoading(false)
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.service !== ''
      case 2:
        return formData.specialist !== ''
      case 3:
        return formData.firstName && formData.lastName && formData.email && formData.phone
      case 4:
        return true
      default:
        return false
    }
  }

  const getSelectedService = () => services.find(s => s.id === formData.service)
  const getSelectedSpecialist = () => specialists.find(s => s.id === formData.specialist)

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center p-8"
        >
          <div className="w-20 h-20 bg-accent-teal rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-3xl font-bold font-heading text-neutral-900 dark:text-white mb-4">
            Thank You!
          </h1>

          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
            Thank you for your submission! We will contact you shortly to confirm your booking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate('/')}
              variant="primary"
              icon={<User size={16} />}
            >
              Back to Home
            </Button>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-heading text-neutral-900 dark:text-white mb-4">
            Book Your Appointment
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Schedule your visit in just a few simple steps
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                  step <= currentStep
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`h-1 w-full mx-2 ${
                    step < currentStep
                      ? 'bg-primary-500'
                      : 'bg-neutral-200 dark:bg-neutral-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm text-neutral-600 dark:text-neutral-300">
            <span>Service</span>
            <span>Specialist</span>
            <span>Details</span>
            <span>Confirm</span>
          </div>
        </div>

        <Card className="p-8 min-h-[600px] flex flex-col">
          <AnimatePresence mode="wait">
            {/* Step 1: Select Service */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  Select a Service
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setFormData(prev => ({ ...prev, service: service.id, specialist: '' }))}
                      className={`p-4 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                        formData.service === service.id
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-neutral-200 dark:border-neutral-700 hover:border-primary-300'
                      }`}
                    >
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                        {service.name}
                      </h3>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300">
                        <span>{service.duration}</span>
                      </div>
                    </button>
                  ))}
                </div>
                {formData.service && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                  >
                    <p className="text-green-800 dark:text-green-200">
                      ✓ Selected: {getSelectedService()?.name}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* Step 2: Select Specialist */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  Choose Your Specialist
                </h2>
                <div className="space-y-4">
                  {filteredSpecialists.map((specialist) => (
                    <button
                      key={specialist.id}
                      onClick={() => setFormData(prev => ({ ...prev, specialist: specialist.id }))}
                      className={`w-full p-6 border-2 rounded-lg text-left transition-all hover:shadow-md ${
                        formData.specialist === specialist.id
                          ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                          : 'border-neutral-200 dark:border-neutral-700 hover:border-primary-300'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={specialist.image}
                          alt={specialist.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-neutral-900 dark:text-white">
                            {specialist.name}
                          </h3>
                          <p className="text-primary-600 dark:text-primary-400 text-sm">
                            {specialist.specialty}
                          </p>
                          <div className="flex items-center mt-1">
                            <Star className="w-4 h-4 text-accent-yellow fill-current" />
                            <span className="text-sm text-neutral-600 dark:text-neutral-300 ml-1">
                              {specialist.rating} • {specialist.experience}
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-neutral-600 dark:text-neutral-300">Next available</p>
                          <p className="text-sm font-medium text-neutral-900 dark:text-white">
                            {specialist.nextAvailable}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 3: Personal Details */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  Your Details
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="First Name"
                    value={formData.firstName}
                    onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    placeholder="Enter your first name"
                    icon={<User size={20} />}
                    required
                  />
                  
                  <Input
                    label="Last Name"
                    value={formData.lastName}
                    onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    placeholder="Enter your last name"
                    icon={<User size={20} />}
                    required
                  />
                  
                  <Input
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    placeholder="Enter your email"
                    icon={<Mail size={20} />}
                    required
                  />
                  
                  <Input
                    label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Enter your phone number"
                    icon={<Phone size={20} />}
                    required
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                    placeholder="Any special requests, medical conditions, or concerns..."
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  />
                </div>

                <div className="mt-6 space-y-3">
                  <h3 className="font-medium text-neutral-900 dark:text-white">Reminder Preferences</h3>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.reminders.email}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        reminders: { ...prev.reminders, email: e.target.checked }
                      }))}
                      className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-neutral-700 dark:text-neutral-300">
                      Email reminder 24 hours before appointment
                    </span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={formData.reminders.sms}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        reminders: { ...prev.reminders, sms: e.target.checked }
                      }))}
                      className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="ml-2 text-sm text-neutral-700 dark:text-neutral-300">
                      SMS reminder 2 hours before appointment
                    </span>
                  </label>
                </div>
              </motion.div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1"
              >
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                  Confirm Your Request
                </h2>

                <div className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                    Request Summary
                  </h3>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-neutral-600 dark:text-neutral-300">Service:</span>
                      <span className="font-medium text-neutral-900 dark:text-white">
                        {getSelectedService()?.name}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-neutral-600 dark:text-neutral-300">Doctor:</span>
                      <span className="font-medium text-neutral-900 dark:text-white">
                        {getSelectedSpecialist()?.name}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-neutral-600 dark:text-neutral-300">Contact Name:</span>
                      <span className="font-medium text-neutral-900 dark:text-white">
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-neutral-600 dark:text-neutral-300">Email:</span>
                      <span className="font-medium text-neutral-900 dark:text-white">
                        {formData.email}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-neutral-600 dark:text-neutral-300">Phone:</span>
                      <span className="font-medium text-neutral-900 dark:text-white">
                        {formData.phone}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                        What Happens Next
                      </h4>
                      <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                        <li>• Our team will contact you within 24 hours</li>
                        <li>• We'll schedule your appointment at a convenient time</li>
                        <li>• All safety protocols followed (sterilization, PPE)</li>
                        <li>• Flexible scheduling to fit your needs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <label className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                    />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                      I agree to the{' '}
                      <a href="/terms" className="text-primary-600 hover:text-primary-500">terms of service</a>{' '}
                      and{' '}
                      <a href="/privacy" className="text-primary-600 hover:text-primary-500">privacy policy</a>.
                      I understand the cancellation policy and consent to receive appointment reminders.
                    </span>
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              onClick={handlePrev}
              variant="outline"
              disabled={currentStep === 1}
              icon={<ChevronLeft size={20} />}
            >
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                icon={<ChevronRight size={20} />}
                iconPosition="right"
              >
                Next Step
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                loading={loading}
                disabled={!isStepValid() || loading}
                icon={<CheckCircle size={20} />}
              >
                {loading ? 'Booking...' : 'Confirm Booking'}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Book

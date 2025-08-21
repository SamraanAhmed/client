import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send,
  CheckCircle,
  Car,
  Accessibility
} from 'lucide-react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import Card from '../components/ui/Card'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
    setLoading(false)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary-500" />,
      title: 'Visit Our Clinic',
      details: [
        '123 Broadway Street',
        'New York, NY 10001',
        'Near Central Park'
      ],
      action: { text: 'Get Directions', href: 'https://maps.google.com' }
    },
    {
      icon: <Phone className="w-6 h-6 text-primary-500" />,
      title: 'Call Us',
      details: [
        'Main: (555) 123-4567',
        'Emergency: (555) 123-4568',
        'Fax: (555) 123-4569'
      ],
      action: { text: 'Call Now', href: 'tel:+1-555-123-4567' }
    },
    {
      icon: <Mail className="w-6 h-6 text-primary-500" />,
      title: 'Email Us',
      details: [
        'info@brightsmile.com',
        'appointments@brightsmile.com',
        'billing@brightsmile.com'
      ],
      action: { text: 'Send Email', href: 'mailto:info@brightsmile.com' }
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-500" />,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 8:00 PM',
        'Saturday: 9:00 AM - 5:00 PM',
        'Sunday: Closed'
      ],
      action: { text: 'Book Online', href: '/book' }
    }
  ]

  const subjects = [
    'General Inquiry',
    'Appointment Request',
    'Insurance Question',
    'Treatment Information',
    'Billing Question',
    'Emergency',
    'Other'
  ]

  if (submitted) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center p-8"
        >
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Message Sent!
          </h1>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            Thank you for contacting us. We'll get back to you within 24 hours.
          </p>
          <Button
            onClick={() => setSubmitted(false)}
            variant="primary"
          >
            Send Another Message
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We're here to help! Get in touch with our friendly team for appointments, 
              questions, or any dental concerns you may have.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold font-heading text-neutral-900 dark:text-white mb-8">
                Get in Touch
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 h-full">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                            {info.title}
                          </h3>
                          <div className="space-y-1 mb-4">
                            {info.details.map((detail, i) => (
                              <p key={i} className="text-sm text-neutral-600 dark:text-neutral-300">
                                {detail}
                              </p>
                            ))}
                          </div>
                          <Button
                            variant="outline"
                            size="sm"
                            href={info.action.href}
                          >
                            {info.action.text}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="overflow-hidden">
                <div className="h-64 bg-neutral-200 dark:bg-neutral-700 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2175772!2d-73.98956862435864!3d40.75889697932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635959015"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BrightSmile Dental Clinic Location"
                  />
                </div>
              </Card>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="p-6">
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                  Visit Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Car className="w-5 h-5 text-neutral-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">
                      Free parking available in adjacent garage
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Accessibility className="w-5 h-5 text-neutral-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">
                      Wheelchair accessible with elevator access
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-neutral-500" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-300">
                      Located on the 3rd floor, Suite 301
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="w-6 h-6 text-primary-500" />
                <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
                  Send us a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Full Name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    required
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="Enter your phone number"
                  />
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                      required
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 placeholder-neutral-500 dark:placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all resize-none"
                    required
                  />
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <p className="text-sm text-blue-800 dark:text-blue-200">
                    <strong>Response Time:</strong> We typically respond to messages within 24 hours during business days. 
                    For urgent dental emergencies, please call our emergency line at (555) 123-4568.
                  </p>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  loading={loading}
                  icon={<Send size={20} />}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Emergency Section */}
      <section className="py-16 bg-red-50 dark:bg-red-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-red-900 dark:text-red-100 mb-4">
              Dental Emergency?
            </h2>
            <p className="text-lg text-red-700 dark:text-red-300 mb-6">
              Don't wait! Contact us immediately for urgent dental care. 
              We offer same-day emergency appointments and after-hours care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                icon={<Phone size={20} />}
                href="tel:+1-555-123-4568"
                className="bg-red-600 hover:bg-red-700"
              >
                Emergency Line: (555) 123-4568
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-red-300 text-red-700 hover:bg-red-100 dark:border-red-700 dark:text-red-300"
              >
                Learn About Emergency Care
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact

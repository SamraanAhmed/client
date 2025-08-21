import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Clock, 
  DollarSign, 
  Star, 
  Shield,
  ArrowRight,
  ChevronDown,
  Phone,
  Calendar,
  AlertCircle,
  Heart,
  Users
} from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const ServiceDetail = () => {
  const { slug } = useParams()

  // Mock service data - in real app, fetch based on slug
  const serviceData = {
    'general-checkup': {
      title: "General Checkup & Cleaning",
      subtitle: "Comprehensive Dental Examination",
      hero: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop",
      price: {
        starting: "$150",
        range: "$150 - $250",
        insurance: "Most insurance accepted"
      },
      duration: "45-60 minutes",
      description: "Our comprehensive dental checkup includes thorough examination, professional cleaning, and preventive care to maintain optimal oral health and catch potential issues early.",
      overview: [
        "Digital X-rays for accurate diagnosis",
        "Comprehensive oral examination",
        "Professional teeth cleaning and polishing", 
        "Fluoride treatment for cavity prevention",
        "Oral cancer screening",
        "Gum disease assessment",
        "Personalized oral hygiene recommendations"
      ],
      procedure: [
        {
          step: 1,
          title: "Initial Assessment",
          description: "Review of medical history and current concerns"
        },
        {
          step: 2, 
          title: "Digital X-rays",
          description: "High-quality digital imaging for comprehensive diagnosis"
        },
        {
          step: 3,
          title: "Oral Examination",
          description: "Thorough examination of teeth, gums, and oral tissues"
        },
        {
          step: 4,
          title: "Professional Cleaning",
          description: "Removal of plaque, tartar, and surface stains"
        },
        {
          step: 5,
          title: "Fluoride Treatment",
          description: "Application of fluoride for cavity prevention"
        },
        {
          step: 6,
          title: "Treatment Planning",
          description: "Discussion of findings and recommended treatments"
        }
      ],
      benefits: [
        "Early detection of dental problems",
        "Prevention of cavities and gum disease",
        "Fresh breath and clean feeling",
        "Maintenance of overall oral health",
        "Professional assessment and recommendations",
        "Insurance coverage for preventive care"
      ],
      risks: [
        "Minimal discomfort during cleaning",
        "Temporary sensitivity after fluoride treatment",
        "Rare: slight gum irritation from deep cleaning"
      ],
      aftercare: [
        "Continue regular brushing and flossing",
        "Use recommended oral care products",
        "Schedule next cleaning in 6 months",
        "Follow any specific treatment recommendations",
        "Contact us if you experience unusual sensitivity"
      ],
      faqs: [
        {
          question: "How often should I get a dental checkup?",
          answer: "We recommend dental checkups every 6 months for most patients. Those with gum disease or other risk factors may need more frequent visits."
        },
        {
          question: "Does the cleaning hurt?",
          answer: "Most patients experience little to no discomfort. If you have sensitive teeth or gums, we can use techniques to minimize any discomfort."
        },
        {
          question: "Is the procedure covered by insurance?",
          answer: "Most dental insurance plans cover preventive care like checkups and cleanings at 100%. We'll verify your coverage before treatment."
        },
        {
          question: "What if you find problems during the exam?",
          answer: "We'll discuss any findings with you and create a treatment plan. Most issues are easier and less expensive to treat when caught early."
        },
        {
          question: "How long do the results last?",
          answer: "The cleaning effects last until plaque and tartar begin to rebuild, typically 3-6 months depending on your oral hygiene and diet."
        }
      ],
      testimonials: [
        {
          text: "The most thorough cleaning I've ever had. The hygienist was gentle and the dentist explained everything clearly.",
          author: "Sarah M.",
          rating: 5
        },
        {
          text: "Great experience! They caught a small cavity early, which saved me from a bigger problem later.",
          author: "Mike R.", 
          rating: 5
        }
      ]
    },
    'teeth-whitening': {
      title: "Professional Teeth Whitening",
      subtitle: "Brighter Smile in Just One Visit",
      hero: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&h=600&fit=crop",
      price: {
        starting: "$400",
        range: "$400 - $600",
        insurance: "Cosmetic procedure - not typically covered"
      },
      duration: "60-90 minutes",
      description: "Professional-grade teeth whitening that can lighten your teeth up to 8 shades in a single visit, giving you a brighter, more confident smile.",
      overview: [
        "Professional-grade whitening gel",
        "Custom-fitted application trays",
        "LED light activation for enhanced results",
        "Up to 8 shades whiter teeth",
        "Take-home touch-up kit included",
        "Long-lasting results with proper care",
        "Safe and effective procedure"
      ],
      procedure: [
        {
          step: 1,
          title: "Consultation & Shade Assessment",
          description: "Evaluate current tooth color and discuss desired results"
        },
        {
          step: 2,
          title: "Preparation",
          description: "Protect gums and soft tissues with special barriers"
        },
        {
          step: 3,
          title: "Whitening Gel Application",
          description: "Apply professional-strength whitening gel to teeth"
        },
        {
          step: 4,
          title: "LED Light Activation",
          description: "Activate gel with special LED light for 15-20 minutes"
        },
        {
          step: 5,
          title: "Repeat Process",
          description: "Apply fresh gel and repeat activation 2-3 times"
        },
        {
          step: 6,
          title: "Final Assessment",
          description: "Compare results and provide take-home care kit"
        }
      ],
      benefits: [
        "Dramatic whitening in one appointment",
        "Professional-strength results",
        "Safe and controlled procedure",
        "Immediate visible improvement",
        "Boost in confidence and appearance",
        "Long-lasting results with proper care"
      ],
      risks: [
        "Temporary tooth sensitivity (usually resolves in 24-48 hours)",
        "Mild gum irritation if gel contacts gums",
        "Results may vary based on starting tooth color",
        "Not effective on dental restorations (crowns, fillings)"
      ],
      aftercare: [
        "Avoid staining foods/drinks for 48 hours",
        "Use provided sensitivity toothpaste if needed",
        "Maintain good oral hygiene",
        "Use touch-up kit as directed",
        "Schedule follow-up if sensitivity persists"
      ],
      faqs: [
        {
          question: "How white will my teeth get?",
          answer: "Most patients see 4-8 shades of improvement. Results depend on your starting tooth color and individual response to whitening."
        },
        {
          question: "How long do the results last?",
          answer: "With proper care and avoiding staining substances, results can last 1-3 years. Touch-up treatments can extend results."
        },
        {
          question: "Will it hurt?",
          answer: "Most patients experience little to no discomfort. Some may have temporary sensitivity that resolves within 24-48 hours."
        },
        {
          question: "Can everyone get their teeth whitened?",
          answer: "Most healthy adults are good candidates. We'll evaluate your teeth and discuss any limitations during consultation."
        },
        {
          question: "What should I avoid after whitening?",
          answer: "Avoid coffee, tea, wine, and other staining foods/drinks for 48 hours to maximize results."
        }
      ],
      testimonials: [
        {
          text: "Amazing results! My teeth are 6 shades whiter and I couldn't be happier. The process was comfortable and quick.",
          author: "Jennifer L.",
          rating: 5
        },
        {
          text: "I was nervous about sensitivity but had none at all. The results exceeded my expectations!",
          author: "David K.",
          rating: 5
        }
      ]
    }
    // Add more services as needed
  }

  // Get service data or use default
  const service = serviceData[slug] || {
    title: slug?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Service',
    subtitle: 'Professional dental treatment',
    description: 'Detailed information about this service is being updated.',
    overview: [],
    procedure: [],
    benefits: [],
    risks: [],
    aftercare: [],
    faqs: [],
    testimonials: [],
    price: { starting: 'Contact for pricing' },
    duration: 'Varies'
  }

  const [openFaq, setOpenFaq] = React.useState(null)

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        {service.hero && (
          <img
            src={service.hero}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-primary-100 mb-6">
                {service.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <Clock className="w-4 h-4 mr-2" />
                  {service.duration}
                </div>
                <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                  <DollarSign className="w-4 h-4 mr-2" />
                  {service.price?.starting}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
                Treatment Overview
              </h2>
              <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
                {service.description}
              </p>
              {service.overview.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.overview.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-teal mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.section>

            {/* Procedure Steps */}
            {service.procedure.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
                  Procedure Steps
                </h2>
                <div className="space-y-6">
                  {service.procedure.map((step, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Benefits */}
            {service.benefits.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
                  Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-neutral-700 dark:text-neutral-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Risks & Considerations */}
            {service.risks.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
                  Risks & Considerations
                </h2>
                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
                  <div className="flex items-start space-x-3 mb-4">
                    <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-orange-800 dark:text-orange-200">
                      These are potential side effects. Most patients experience minimal to no discomfort.
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {service.risks.map((risk, index) => (
                      <li key={index} className="text-orange-700 dark:text-orange-300 text-sm">
                        • {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            )}

            {/* Aftercare */}
            {service.aftercare.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
                  Aftercare Instructions
                </h2>
                <div className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg p-6">
                  <ul className="space-y-3">
                    {service.aftercare.map((instruction, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Shield className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" />
                        <span className="text-primary-800 dark:text-primary-200">{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.section>
            )}

            {/* FAQs */}
            {service.faqs.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-3xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <Card key={index} className="overflow-hidden">
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                      >
                        <span className="font-medium text-neutral-900 dark:text-white">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-neutral-500 transition-transform ${
                            openFaq === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <div className="px-6 pb-4">
                          <p className="text-neutral-600 dark:text-neutral-300">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Testimonials */}
            {service.testimonials.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
                  Patient Reviews
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.testimonials.map((testimonial, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-accent-yellow fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-neutral-700 dark:text-neutral-300 mb-4 italic">
                        "{testimonial.text}"
                      </blockquote>
                      <div className="font-medium text-neutral-900 dark:text-white">
                        — {testimonial.author}
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Booking Card */}
            <Card className="p-6 sticky top-8">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">
                Book This Service
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-300">Starting Price:</span>
                  <span className="font-bold text-primary-600 dark:text-primary-400">
                    {service.price?.starting}
                  </span>
                </div>
                {service.price?.range && (
                  <div className="flex justify-between">
                    <span className="text-neutral-600 dark:text-neutral-300">Full Range:</span>
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                      {service.price.range}
                    </span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-300">Duration:</span>
                  <span className="text-neutral-900 dark:text-white">{service.duration}</span>
                </div>
                {service.price?.insurance && (
                  <div className="text-sm text-neutral-500 dark:text-neutral-400 border-t pt-3">
                    Insurance: {service.price.insurance}
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <Button
                  as={Link}
                  to="/book"
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<Calendar size={20} />}
                >
                  Book Appointment
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  icon={<Phone size={20} />}
                  href="tel:+1-555-123-4567"
                >
                  Call Us
                </Button>
              </div>
            </Card>

            {/* Related Services */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">
                Related Services
              </h3>
              <div className="space-y-3">
                <Link 
                  to="/services/general-checkup" 
                  className="block p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div className="font-medium text-neutral-900 dark:text-white">General Checkup</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">Starting at $150</div>
                </Link>
                <Link 
                  to="/services/teeth-whitening" 
                  className="block p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div className="font-medium text-neutral-900 dark:text-white">Teeth Whitening</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">Starting at $400</div>
                </Link>
                <Link 
                  to="/services/orthodontics" 
                  className="block p-3 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  <div className="font-medium text-neutral-900 dark:text-white">Orthodontics</div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-300">Starting at $3,500</div>
                </Link>
              </div>
              <Link 
                to="/services" 
                className="inline-flex items-center text-primary-600 hover:text-primary-500 dark:text-primary-400 mt-4"
              >
                View All Services <ArrowRight size={16} className="ml-1" />
              </Link>
            </Card>

            {/* Contact Info */}
            <Card className="p-6">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-4">
                Have Questions?
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-primary-500 mr-3" />
                  <a href="tel:+1-555-123-4567" className="text-primary-600 hover:text-primary-500">
                    (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-primary-500 mr-3" />
                  <span className="text-neutral-700 dark:text-neutral-300">
                    Mon-Sat: 10AM-8PM
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 text-primary-500 mr-3" />
                  <Link to="/contact" className="text-primary-600 hover:text-primary-500">
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Check, 
  Star, 
  Calendar,
  Phone,
  CreditCard,
  Shield,
  Clock,
  Award,
  Heart,
  Sparkles,
  Users,
  DollarSign,
  FileText,
  Info
} from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Pricing = () => {
  const [selectedCategory, setSelectedCategory] = useState('general')

  const pricingPackages = [
    {
      id: 'essential',
      name: 'Essential Care',
      subtitle: 'Perfect for routine maintenance',
      price: 'PKR 27,720',
      period: 'per visit',
      popular: false,
      description: 'Basic dental care to maintain your oral health',
      features: [
        'Comprehensive oral examination',
        'Professional cleaning',
        'Fluoride treatment',
        'Oral health consultation',
        'Basic X-rays (if needed)',
        'Treatment plan discussion'
      ],
      includes: [
        '60-minute appointment',
        'Personalized care plan',
        'Follow-up recommendations'
      ],
      cta: 'Book Essential Care',
      color: 'primary'
    },
    {
      id: 'premium',
      name: 'Premium Care',
      subtitle: 'Comprehensive dental wellness',
      price: 'PKR 55,720',
      period: 'per visit',
      popular: true,
      description: 'Advanced preventive care with detailed analysis',
      features: [
        'Everything in Essential Care',
        'Digital X-rays (full mouth)',
        'Oral cancer screening',
        'Gum disease assessment',
        'Cosmetic consultation',
        'Advanced cleaning techniques',
        'Nutritional counseling'
      ],
      includes: [
        '90-minute appointment',
        'Digital treatment planning',
        '6-month follow-up call',
        'Emergency consultation priority'
      ],
      cta: 'Choose Premium Care',
      color: 'accent-teal'
    },
    {
      id: 'family',
      name: 'Family Plan',
      subtitle: 'Care for the whole family',
      price: 'PKR 83,720',
      period: 'per family/visit',
      popular: false,
      description: 'Comprehensive care for up to 4 family members',
      features: [
        'Premium care for each member',
        'Pediatric dental screening',
        'Orthodontic consultation',
        'Family oral health education',
        'Customized treatment plans',
        'Preventive care coordination'
      ],
      includes: [
        'Flexible scheduling',
        'Family discount on treatments',
        'Coordinated care management',
        'Educational materials'
      ],
      cta: 'Choose Family Plan',
      color: 'accent-yellow'
    }
  ]

  const serviceCategories = [
    {
      id: 'general',
      name: 'General Dentistry',
      icon: <Check className="w-5 h-5" />
    },
    {
      id: 'cosmetic',
      name: 'Cosmetic',
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      id: 'orthodontics',
      name: 'Orthodontics',
      icon: <Star className="w-5 h-5" />
    },
    {
      id: 'surgery',
      name: 'Oral Surgery',
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 'pediatric',
      name: 'Pediatric',
      icon: <Heart className="w-5 h-5" />
    }
  ]

  const servicePricing = {
    general: [
      { service: 'Routine Cleaning & Exam', price: 'PKR 27,720 - PKR 41,720', duration: '60 min', description: 'Complete oral health assessment with professional cleaning' },
      { service: 'Deep Cleaning (Per Quadrant)', price: 'PKR 42,000 - PKR 56,000', duration: '45 min', description: 'Scaling and root planing for gum disease treatment' },
      { service: 'Fillings (Composite)', price: 'PKR 33,600 - PKR 70,000', duration: '30-60 min', description: 'Tooth-colored fillings for cavity treatment' },
      { service: 'Root Canal Therapy', price: 'PKR 224,000 - PKR 336,000', duration: '60-90 min', description: 'Endodontic treatment to save infected teeth' },
      { service: 'Crown (Porcelain)', price: 'PKR 280,000 - PKR 420,000', duration: '90 min', description: 'Custom-made crown for damaged teeth' },
      { service: 'Tooth Extraction (Simple)', price: 'PKR 42,000 - PKR 84,000', duration: '30 min', description: 'Safe removal of damaged or problematic teeth' },
      { service: 'Emergency Visit', price: 'PKR 21,000 - PKR 42,000', duration: '30 min', description: 'Urgent dental care for pain relief and stabilization' }
    ],
    cosmetic: [
      { service: 'Professional Teeth Whitening', price: 'PKR 112,000 - PKR 168,000', duration: '90 min', description: 'In-office whitening for dramatic results' },
      { service: 'Porcelain Veneers (Per Tooth)', price: 'PKR 224,000 - PKR 336,000', duration: '120 min', description: 'Custom veneers for perfect smile transformation' },
      { service: 'Smile Makeover Consultation', price: 'PKR 28,000', duration: '60 min', description: 'Comprehensive cosmetic treatment planning' },
      { service: 'Composite Bonding (Per Tooth)', price: 'PKR 56,000 - PKR 112,000', duration: '45 min', description: 'Tooth-colored resin to improve appearance' },
      { service: 'Gum Contouring', price: 'PKR 84,000 - PKR 168,000', duration: '60 min', description: 'Reshaping gums for improved smile aesthetics' },
      { service: 'Full Mouth Reconstruction', price: 'PKR 4,200,000 - PKR 8,400,000', duration: 'Multiple visits', description: 'Complete smile and function restoration' }
    ],
    orthodontics: [
      { service: 'Invisalign Treatment', price: 'PKR 980,000 - PKR 1,680,000', duration: '12-18 months', description: 'Clear aligner therapy for straighter teeth' },
      { service: 'Traditional Metal Braces', price: 'PKR 840,000 - PKR 1,400,000', duration: '18-24 months', description: 'Proven orthodontic treatment for all ages' },
      { service: 'Ceramic Braces', price: 'PKR 1,120,000 - PKR 1,680,000', duration: '18-24 months', description: 'Tooth-colored braces for discreet treatment' },
      { service: 'Orthodontic Consultation', price: 'PKR 42,000', duration: '45 min', description: 'Comprehensive evaluation and treatment planning' },
      { service: 'Retainers (Set)', price: 'PKR 84,000 - PKR 140,000', duration: '30 min', description: 'Custom retainers to maintain treatment results' },
      { service: 'Early Intervention (Phase 1)', price: 'PKR 560,000 - PKR 980,000', duration: '6-12 months', description: 'Early orthodontic treatment for children' }
    ],
    surgery: [
      { service: 'Single Dental Implant', price: '$2,500 - $4,000', duration: '90 min', description: 'Complete implant with crown placement' },
      { service: 'Wisdom Tooth Extraction', price: '$200 - $600', duration: '45-60 min', description: 'Surgical removal of impacted wisdom teeth' },
      { service: 'Bone Grafting', price: '$500 - $1,200', duration: '60 min', description: 'Bone augmentation for implant preparation' },
      { service: 'Sinus Lift', price: '$1,500 - $2,500', duration: '90 min', description: 'Sinus augmentation for upper jaw implants' },
      { service: 'Full Mouth Implants', price: '$20,000 - $40,000', duration: 'Multiple visits', description: 'Complete mouth restoration with implants' },
      { service: 'Oral Biopsy', price: '$300 - $500', duration: '30 min', description: 'Tissue sampling for diagnosis' }
    ],
    pediatric: [
      { service: 'Child Cleaning & Exam', price: '$75 - $120', duration: '45 min', description: 'Gentle care designed for children' },
      { service: 'Fluoride Treatment', price: '$25 - $50', duration: '15 min', description: 'Cavity prevention treatment' },
      { service: 'Dental Sealants (Per Tooth)', price: '$30 - $50', duration: '15 min', description: 'Protective coating for molars' },
      { service: 'Space Maintainer', price: '$200 - $400', duration: '30 min', description: 'Device to preserve space for permanent teeth' },
      { service: 'Pulpotomy (Baby Tooth)', price: '$150 - $250', duration: '30 min', description: 'Root canal treatment for primary teeth' },
      { service: 'Stainless Steel Crown', price: '$200 - $300', duration: '30 min', description: 'Protective crown for damaged baby teeth' }
    ]
  }

  const insuranceInfo = [
    {
      provider: 'Delta Dental',
      coverage: 'Preferred Provider',
      benefits: 'Up to 100% preventive, 80% basic, 50% major'
    },
    {
      provider: 'MetLife',
      coverage: 'In-Network',
      benefits: 'Up to 100% preventive, 70% basic, 50% major'
    },
    {
      provider: 'Cigna',
      coverage: 'Participating Provider',
      benefits: 'Up to 100% preventive, 80% basic, 50% major'
    },
    {
      provider: 'Aetna',
      coverage: 'Preferred Provider',
      benefits: 'Up to 100% preventive, 70% basic, 50% major'
    },
    {
      provider: 'Guardian',
      coverage: 'In-Network',
      benefits: 'Up to 100% preventive, 80% basic, 50% major'
    },
    {
      provider: 'Humana',
      coverage: 'Participating Provider',
      benefits: 'Up to 100% preventive, 70% basic, 50% major'
    }
  ]

  const paymentOptions = [
    {
      icon: <CreditCard className="w-6 h-6 text-primary-500" />,
      title: 'Flexible Payment Plans',
      description: 'Interest-free financing available for treatments over $500. Monthly payment plans up to 24 months.',
      features: ['0% APR for 12 months', 'Low monthly payments', 'Quick approval process']
    },
    {
      icon: <Shield className="w-6 h-6 text-accent-teal" />,
      title: 'Insurance Maximization',
      description: 'We work with your insurance to maximize your benefits and minimize out-of-pocket costs.',
      features: ['Direct insurance billing', 'Pre-authorization assistance', 'Benefits verification']
    },
    {
      icon: <DollarSign className="w-6 h-6 text-accent-yellow" />,
      title: 'Cash Discounts',
      description: 'Save up to 10% when you pay for treatments in full at the time of service.',
      features: ['Immediate savings', 'No financing needed', 'Simplified billing']
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Quality dental care at fair, transparent prices. No hidden fees, no surprises – 
              just honest pricing for exceptional dental services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Care Packages */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading text-neutral-900 mb-6">
              Dental Care Packages
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Choose from our comprehensive care packages designed to meet your oral health needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-accent-teal text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Card className={`p-8 h-full ${pkg.popular ? 'ring-2 ring-accent-teal' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {pkg.subtitle}
                    </p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-primary-600">
                        {pkg.price}
                      </span>
                      <span className="text-neutral-500 ml-2">
                        {pkg.period}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-600">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-neutral-900">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="w-5 h-5 text-accent-teal mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-neutral-900">Additional Benefits:</h4>
                    <ul className="space-y-2">
                      {pkg.includes.map((include, i) => (
                        <li key={i} className="flex items-start">
                          <Star className="w-5 h-5 text-accent-yellow mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm text-neutral-700">{include}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    as={Link}
                    to="/book"
                    variant={pkg.popular ? "primary" : "outline"}
                    fullWidth
                    size="lg"
                    icon={<Calendar size={20} />}
                  >
                    {pkg.cta}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Pricing */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading text-neutral-900 mb-6">
              Individual Service Pricing
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Transparent pricing for all our dental services. Browse by category to find exactly what you need.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Service List */}
          <div className="grid grid-cols-1 gap-4">
            {servicePricing[selectedCategory].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {service.service}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-2">
                        {service.description}
                      </p>
                      <div className="flex items-center text-sm text-neutral-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="text-right">
                        <div className="text-xl font-bold text-primary-600">
                          {service.price}
                        </div>
                      </div>
                      <Button
                        as={Link}
                        to="/book"
                        variant="outline"
                        size="sm"
                        icon={<Calendar size={16} />}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment Options */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading text-neutral-900 mb-6">
              Payment Options & Insurance
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We make quality dental care affordable with flexible payment options and comprehensive insurance coverage.
            </p>
          </motion.div>

          {/* Payment Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {paymentOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-neutral-100 rounded-2xl">
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    {option.title}
                  </h3>
                  <p className="text-neutral-600 mb-6">
                    {option.description}
                  </p>
                  <ul className="space-y-2">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center text-sm text-neutral-700">
                        <Check className="w-4 h-4 text-accent-teal mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Insurance Providers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
                Accepted Insurance Plans
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {insuranceInfo.map((insurance, index) => (
                  <div key={index} className="border border-neutral-200 rounded-lg p-4">
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      {insurance.provider}
                    </h4>
                    <p className="text-sm text-primary-600 mb-2">
                      {insurance.coverage}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {insurance.benefits}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-blue-800">
                      <strong>Don't see your insurance?</strong> We work with many other providers too. 
                      Contact us to verify your specific benefits and coverage details.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading text-neutral-900 mb-6">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Do you offer payment plans for expensive treatments?",
                answer: "Yes! We offer interest-free financing for treatments over $500, with payment plans up to 24 months. We also work with third-party financing companies like CareCredit."
              },
              {
                question: "What if I don't have dental insurance?",
                answer: "No problem! We offer our dental care packages at discounted rates for uninsured patients, plus cash payment discounts up to 10% for treatments paid in full."
              },
              {
                question: "Are consultations included in treatment costs?",
                answer: "Initial consultations for specific treatments are typically included in the total treatment cost. However, comprehensive evaluations and second opinions may have separate fees."
              },
              {
                question: "Can I get a treatment estimate before my appointment?",
                answer: "Absolutely! Contact us with your specific needs, and we'll provide a detailed estimate. For more complex cases, an in-person consultation may be needed for accurate pricing."
              },
              {
                question: "Do your prices include follow-up care?",
                answer: "Yes, most treatments include necessary follow-up appointments within the first 30 days. Any additional treatments or extended care may have separate costs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-neutral-700">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold font-heading">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-100">
              Schedule your appointment today or contact us for a personalized treatment quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                to="/book"
                variant="secondary"
                size="lg"
                icon={<Calendar size={20} />}
                className="bg-white text-primary-600 hover:bg-neutral-50"
              >
                Schedule Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Phone size={20} />}
                href="tel:+1-555-123-4567"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Call for Quote: (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

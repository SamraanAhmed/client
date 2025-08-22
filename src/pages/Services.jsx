import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Sparkles, 
  Shield, 
  Heart, 
  Clock, 
  Stethoscope,
  Baby,
  Smile,
  Zap,
  Search,
  Filter,
  ArrowRight
} from 'lucide-react'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'general', name: 'General' },
    { id: 'cosmetic', name: 'Cosmetic' },
    { id: 'orthodontics', name: 'Orthodontics' },
    { id: 'oral-surgery', name: 'Oral Surgery' },
    { id: 'pediatric', name: 'Pediatric' },
    { id: 'emergency', name: 'Emergency' }
  ]

  const services = [
    {
      id: 1,
      title: "General Checkup & Cleaning",
      slug: "general-checkup",
      category: "general",
      icon: <CheckCircle className="w-8 h-8 text-primary-500" />,
      description: "Comprehensive dental examination, professional cleaning, and preventive care to maintain optimal oral health.",
      duration: "45-60 minutes",
      price: "Starting at PKR 42,000",
      features: ["Digital X-rays", "Thorough examination", "Professional cleaning", "Fluoride treatment", "Oral health consultation"],
      popular: true
    },
    {
      id: 2,
      title: "Teeth Whitening",
      slug: "teeth-whitening",
      category: "cosmetic",
      icon: <Sparkles className="w-8 h-8 text-accent-yellow" />,
      description: "Professional teeth whitening to achieve a brighter, more confident smile in just one visit.",
      duration: "60-90 minutes",
      price: "Starting at $400",
      features: ["Professional-grade whitening gel", "Custom-fitted trays", "Up to 8 shades lighter", "Long-lasting results", "Touch-up kit included"],
      popular: true
    },
    {
      id: 3,
      title: "Orthodontics & Braces",
      slug: "orthodontics",
      category: "orthodontics",
      icon: <Smile className="w-8 h-8 text-accent-teal" />,
      description: "Straighten your teeth with traditional braces, clear aligners, or Invisalign for a perfect smile.",
      duration: "12-24 months treatment",
      price: "Starting at $3,500",
      features: ["Traditional metal braces", "Clear ceramic braces", "Invisalign aligners", "Regular adjustments", "Retainer included"],
      popular: false
    },
    {
      id: 4,
      title: "Dental Implants",
      slug: "dental-implants",
      category: "oral-surgery",
      icon: <Heart className="w-8 h-8 text-red-500" />,
      description: "Permanent solution for missing teeth with titanium implants that look and feel natural.",
      duration: "3-6 months process",
      price: "Starting at $2,500",
      features: ["Titanium implant post", "Custom crown", "Bone grafting if needed", "3D imaging", "Lifetime warranty"],
      popular: true
    },
    {
      id: 5,
      title: "Root Canal Therapy",
      slug: "root-canal",
      category: "general",
      icon: <Shield className="w-8 h-8 text-primary-500" />,
      description: "Pain-free root canal treatment to save infected or damaged teeth and prevent extraction.",
      duration: "60-90 minutes",
      price: "Starting at $800",
      features: ["Digital imaging", "Local anesthesia", "Gentle technique", "Same-day completion", "Crown placement available"],
      popular: false
    },
    {
      id: 6,
      title: "Emergency Dental Care",
      slug: "emergency",
      category: "emergency",
      icon: <Clock className="w-8 h-8 text-red-600" />,
      description: "24/7 emergency dental services for urgent problems like severe pain, trauma, or infections.",
      duration: "Immediate care",
      price: "Starting at $200",
      features: ["24/7 availability", "Same-day appointments", "Pain management", "Trauma treatment", "Follow-up care"],
      popular: false
    },
    {
      id: 7,
      title: "Dental Crowns & Bridges",
      slug: "crowns-bridges",
      category: "general",
      icon: <Shield className="w-8 h-8 text-accent-teal" />,
      description: "Restore damaged teeth or replace missing ones with custom-made crowns and bridges.",
      duration: "2-3 visits",
      price: "Starting at $1,200",
      features: ["Porcelain crowns", "Metal-free options", "Perfect color matching", "Digital impressions", "Same-day crowns available"],
      popular: false
    },
    {
      id: 8,
      title: "Gum Disease Treatment",
      slug: "gum-treatment",
      category: "general",
      icon: <Stethoscope className="w-8 h-8 text-primary-500" />,
      description: "Comprehensive periodontal therapy to treat gum disease and restore gum health.",
      duration: "Multiple visits",
      price: "Starting at $300",
      features: ["Deep cleaning", "Scaling & root planing", "Antibiotic therapy", "Gum surgery if needed", "Maintenance program"],
      popular: false
    },
    {
      id: 9,
      title: "Pediatric Dentistry",
      slug: "pediatric",
      category: "pediatric",
      icon: <Baby className="w-8 h-8 text-accent-yellow" />,
      description: "Specialized dental care for children in a fun, comfortable environment with gentle techniques.",
      duration: "30-45 minutes",
      price: "Starting at $120",
      features: ["Child-friendly environment", "Nitrous oxide available", "Preventive treatments", "Sealants", "Education for parents"],
      popular: false
    },
    {
      id: 10,
      title: "Oral Surgery",
      slug: "oral-surgery",
      category: "oral-surgery",
      icon: <Zap className="w-8 h-8 text-red-500" />,
      description: "Comprehensive oral surgery including wisdom teeth removal, extractions, and implant placement.",
      duration: "30-120 minutes",
      price: "Starting at $400",
      features: ["Wisdom teeth removal", "Tooth extractions", "Bone grafting", "Sedation options", "Post-op care"],
      popular: false
    },
    {
      id: 11,
      title: "Cosmetic Veneers",
      slug: "veneers",
      category: "cosmetic",
      icon: <Sparkles className="w-8 h-8 text-accent-yellow" />,
      description: "Transform your smile with custom porcelain veneers for a perfect, natural-looking result.",
      duration: "2-3 visits",
      price: "Starting at $1,500",
      features: ["Ultra-thin porcelain", "Custom design", "Natural appearance", "Stain resistant", "10-year warranty"],
      popular: true
    },
    {
      id: 12,
      title: "Sleep Apnea Treatment",
      slug: "sleep-apnea",
      category: "general",
      icon: <Clock className="w-8 h-8 text-primary-500" />,
      description: "Custom oral appliances to treat sleep apnea and improve your quality of sleep.",
      duration: "2-3 visits",
      price: "Starting at $2,000",
      features: ["Sleep study analysis", "Custom oral appliance", "Comfortable design", "Regular adjustments", "Insurance coverage help"],
      popular: false
    }
  ]

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6">
              Our Dental Services
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8">
              Comprehensive dental care tailored to your needs. From routine checkups to advanced treatments, 
              we provide exceptional care in a comfortable environment.
            </p>
            <Button
              as={Link}
              to="/book"
              variant="secondary"
              size="lg"
              className="bg-white text-primary-600 hover:bg-neutral-50"
            >
              Book Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search size={20} />}
                className="bg-white dark:bg-neutral-700"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-white dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-primary-50 dark:hover:bg-neutral-600'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                No services found
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {service.popular && (
                    <div className="absolute -top-3 -right-3 z-10 bg-accent-yellow text-neutral-900 px-3 py-1 rounded-full text-sm font-bold">
                      Popular
                    </div>
                  )}
                  <Card className="h-full p-6 group cursor-pointer">
                    <Link to={`/services/${service.slug}`}>
                      <div className="mb-6 flex justify-center">
                        <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3 text-center">
                        {service.title}
                      </h3>
                      
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-center">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-500 dark:text-neutral-400">Duration:</span>
                          <span className="font-medium text-neutral-900 dark:text-white">{service.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-neutral-500 dark:text-neutral-400">Price:</span>
                          <span className="font-medium text-primary-600 dark:text-primary-400">{service.price}</span>
                        </div>
                      </div>

                      <div className="space-y-2 mb-6">
                        <p className="text-sm font-medium text-neutral-900 dark:text-white">What's included:</p>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="text-sm text-neutral-600 dark:text-neutral-300 flex items-center">
                              <CheckCircle size={14} className="text-accent-teal mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                          {service.features.length > 3 && (
                            <li className="text-sm text-primary-600 dark:text-primary-400">
                              +{service.features.length - 3} more features
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="flex items-center justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 mr-3"
                        >
                          Learn More
                        </Button>
                        <Button
                          as={Link}
                          to="/book"
                          variant="primary"
                          size="sm"
                          icon={<ArrowRight size={16} />}
                          iconPosition="right"
                        >
                          Book Now
                        </Button>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold font-heading text-neutral-900 dark:text-white">
              Not Sure Which Service You Need?
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300">
              Schedule a consultation with our experienced team. We'll assess your needs and 
              recommend the best treatment plan for your oral health goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                to="/book"
                variant="primary"
                size="lg"
                icon={<CheckCircle size={20} />}
              >
                Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Clock size={20} />}
                href="tel:+1-555-123-4567"
              >
                Call Us: (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services

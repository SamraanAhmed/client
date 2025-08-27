import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
  ArrowRight,
  Calendar,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'general', name: 'General' },
    { id: 'cosmetic', name: 'Cosmetic' },
    { id: 'orthodontics', name: 'Orthodontics' },
    { id: 'oral-surgery', name: 'Oral Surgery' },
    { id: 'pediatric', name: 'Pediatric' },
    { id: 'emergency', name: 'Emergency' },
  ];

  const services = [
    {
      id: 1,
      title: 'General Checkup',
      slug: 'general-checkup',
      category: 'general',
      icon: <CheckCircle className="w-8 h-8 text-primary-500" />,
      description:
        'Routine dental examination to assess oral health and prevent future problems.',
      duration: '10-15 minutes',
      price: '1,000 PKR',
      included: [],
      popular: true,
    },
    {
      id: 2,
      title: 'Teeth Whitening',
      slug: 'teeth-whitening',
      category: 'cosmetic',
      icon: <Sparkles className="w-8 h-8 text-accent-yellow" />,
      description:
        'Professional whitening for a brighter smile, including cleaning and polishing.',
      duration: '60-90 minutes',
      price: '30,000 PKR',
      included: ['Scaling', 'Polishing', 'Teeth whitening'],
      popular: true,
    },
    {
      id: 3,
      title: 'Orthodontics and Braces',
      slug: 'orthodontics',
      category: 'orthodontics',
      icon: <Smile className="w-8 h-8 text-accent-teal" />,
      description: 'Comprehensive treatment for teeth alignment using braces.',
      duration: '12 months',
      price: '180,000 PKR',
      included: [
        'Treatment planning',
        'Braces installation',
        'Regular adjustments',
        'Retention phase',
      ],
      popular: false,
    },
    {
      id: 4,
      title: 'Dental Implants',
      slug: 'dental-implants',
      category: 'oral-surgery',
      icon: <Heart className="w-8 h-8 text-red-500" />,
      description:
        'Permanent solutions for missing teeth with high-quality implants.',
      duration: 'Multiple visits',
      price: '75,000 PKR',
      included: ['Consultation', 'Implant placement', 'Crown attachment'],
      popular: true,
    },
    {
      id: 5,
      title: 'Root Canal Therapy',
      slug: 'root-canal',
      category: 'general',
      icon: <Shield className="w-8 h-8 text-primary-500" />,
      description: 'Treatment to save and repair damaged or infected teeth.',
      duration: '30 minutes',
      price: '12,000 PKR',
      included: [
        'Local anesthesia',
        'Root cleaning',
        'Filling',
        'Temporary crown if needed',
      ],
      popular: false,
    },
    {
      id: 6,
      title: 'Emergency Dental Care',
      slug: 'emergency',
      category: 'emergency',
      icon: <Clock className="w-8 h-8 text-red-600" />,
      description:
        'Urgent care for dental emergencies, with pricing based on treatment required.',
      duration: 'Varies',
      price: 'Varies depending on emergency type',
      included: [
        'Emergency consultation',
        'Pain management',
        'Immediate treatment',
      ],
      note: 'Clinic is not available 24/7',
      popular: false,
    },
    {
      id: 7,
      title: 'Dental Crowns and Bridges',
      slug: 'crowns-bridges',
      category: 'general',
      icon: <Shield className="w-8 h-8 text-accent-teal" />,
      description:
        'Restorative solutions for damaged or missing teeth using high-quality crowns and bridges.',
      duration: '2-3 visits',
      price: '12,000 PKR',
      included: ['Zirconia crown', 'E-max crown', 'Die-cut crown'],
      popular: false,
    },
    {
      id: 8,
      title: 'Gum Disease Treatment',
      slug: 'gum-treatment',
      category: 'general',
      icon: <Stethoscope className="w-8 h-8 text-primary-500" />,
      description:
        'Treatment to address gum infections and promote oral health.',
      duration: '45-60 minutes',
      price: '5,000 PKR',
      included: ['Deep curettage', 'Gum cleaning', 'Aftercare instructions'],
      popular: false,
    },
    {
      id: 9,
      title: 'Pediatric Dentistry',
      slug: 'pediatric',
      category: 'pediatric',
      icon: <Baby className="w-8 h-8 text-accent-yellow" />,
      description: 'Gentle dental care tailored for children.',
      duration: '30-45 minutes',
      price: '8,000 PKR',
      included: [
        'General pediatric dental care',
        'Preventive treatments',
        'Child-friendly approach',
      ],
      note: 'Nitrous oxide not included',
      popular: false,
    },
    {
      id: 10,
      title: 'Oral Surgery',
      slug: 'oral-surgery',
      category: 'oral-surgery',
      icon: <Zap className="w-8 h-8 text-red-500" />,
      description:
        'Surgical procedures for complex oral conditions, including trauma cases.',
      duration: '30 minutes',
      price: '3,000 PKR',
      included: [
        'Trauma cases',
        'Surgical consultation',
        'Post-operative care',
      ],
      note: 'Bone grafting not included',
      popular: false,
    },
    {
      id: 11,
      title: 'Cosmetic Surgery',
      slug: 'cosmetic-surgery',
      category: 'cosmetic',
      icon: <Sparkles className="w-8 h-8 text-accent-yellow" />,
      description:
        'Aesthetic enhancements using advanced CAD/CAM technology for precise results.',
      duration: '2-3 hours',
      price: '30,000 PKR',
      included: [
        'CAD/CAM scanning procedure',
        'Digital planning',
        'Precision treatment',
      ],
      popular: true,
    },
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
              Comprehensive dental care with transparent pricing. From routine
              checkups to advanced treatments, we provide exceptional care in a
              comfortable environment.
            </p>
            <Button
              as={Link}
              to="/book"
              variant="secondary"
              size="lg"
              icon={<Calendar size={20} />}
              className="bg-white text-primary-600 hover:bg-neutral-50"
            >
              Book Appointment
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      {/*       
      <section className="py-12 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            
            <div className="flex-1 max-w-md">
              <Input
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                icon={<Search size={20} />}
                className="bg-white dark:bg-neutral-700"
              />
            </div>

            
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
      </section> */}

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
                  <Card className="h-full p-4 group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="text-center h-full flex flex-col">
                      {/* Service Icon */}
                      <div className="mb-4 flex justify-center">
                        <div className="p-3 bg-neutral-50 dark:bg-neutral-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          {service.icon}
                        </div>
                      </div>

                      {/* Service Title */}
                      <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-sm leading-relaxed">
                        {service.description}
                      </p>

                      {/* Price and Duration */}
                      <div className="space-y-2 mb-4">
                        <div className="text-center">
                          <span className="font-bold text-xl text-primary-600 dark:text-primary-400">
                            {service.price}
                          </span>
                        </div>
                        <div className="flex items-center justify-center text-neutral-600 dark:text-neutral-300">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm">{service.duration}</span>
                        </div>
                      </div>

                      {/* Content that grows to fill space */}
                      <div className="flex-grow">
                        {/* Included Procedures */}
                        {service.included && service.included.length > 0 && (
                          <div className="mb-4">
                            <p className="text-sm font-medium text-neutral-900 dark:text-white mb-2">
                              What's included:
                            </p>
                            <ul className="space-y-1">
                              {service.included.map((item, i) => (
                                <li
                                  key={i}
                                  className="text-xs text-neutral-600 dark:text-neutral-300 flex items-center justify-center"
                                >
                                  <CheckCircle
                                    size={12}
                                    className="text-accent-teal mr-2 flex-shrink-0"
                                  />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Special Notes */}
                        {service.note && (
                          <div className="mb-4 p-2 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                            <p className="text-xs text-amber-800 dark:text-amber-200">
                              <strong>Note:</strong> {service.note}
                            </p>
                          </div>
                        )}
                      </div>

                      {/* Book Appointment Button - Always at bottom */}
                      <div className="mt-auto pt-4">
                        <Button
                          as={Link}
                          to="/book"
                          variant="primary"
                          size="md"
                          fullWidth
                          icon={<Calendar size={16} />}
                          className="group-hover:bg-primary-600 group-hover:shadow-lg transition-all duration-300"
                        >
                          Book Appointment
                        </Button>
                      </div>
                    </div>
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
              Schedule a consultation with our experienced team. We'll assess
              your needs and recommend the best treatment plan for your oral
              health goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                to="/book"
                variant="primary"
                size="lg"
                icon={<Calendar size={20} />}
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

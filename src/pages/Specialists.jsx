import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Calendar,
  GraduationCap,
  Star,
  Award,
  Heart,
  Stethoscope,
  Shield,
  Sparkles
} from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Specialists = () => {
  const specialists = [
    {
      id: 1,
      name: 'Dr. Ahmed Sheikh',
      qualifications: 'Oral and Maxillofacial Surgery Specialist',
      specialty: 'Oral and Maxillofacial Surgery',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      description: 'Specialized in complex oral and facial surgical procedures with advanced techniques for optimal patient outcomes and recovery.',
      icon: <Shield className="w-6 h-6 text-primary-500" />,
      experience: '15+ years'
    },
    {
      id: 2,
      name: 'Dr. Tayyab Sheikh',
      qualifications: 'FCPS in Prosthodontics, Certified Endodontist',
      specialty: 'Prosthodontics & Endodontics',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
      description: 'Expert in dental prosthetics and root canal therapy, combining precision craftsmanship with advanced endodontic techniques.',
      icon: <Award className="w-6 h-6 text-accent-teal" />,
      experience: '12+ years'
    },
    {
      id: 3,
      name: 'Dr. Jawad',
      qualifications: 'Professional Orthodontist',
      specialty: 'Orthodontics',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      description: 'Dedicated to creating beautiful, straight smiles using modern orthodontic techniques and personalized treatment plans.',
      icon: <Sparkles className="w-6 h-6 text-accent-yellow" />,
      experience: '10+ years'
    },
    {
      id: 4,
      name: 'Dr. Nizam',
      qualifications: 'Professional Maxillofacial Surgeon',
      specialty: 'Maxillofacial Surgery',
      image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop&crop=face',
      description: 'Specializes in facial and jaw surgery procedures, providing comprehensive care for complex oral and facial conditions.',
      icon: <Stethoscope className="w-6 h-6 text-primary-600" />,
      experience: '14+ years'
    },
    {
      id: 5,
      name: 'Dr. Anosha',
      qualifications: 'General Pediatric Dentist',
      specialty: 'Pediatric Dentistry',
      image: 'https://images.unsplash.com/photo-1594824804732-5f7cf38f9baa?w=300&h=300&fit=crop&crop=face',
      description: 'Gentle and caring approach to children\'s dental health, making dental visits comfortable and fun for young patients.',
      icon: <Heart className="w-6 h-6 text-red-500" />,
      experience: '8+ years'
    },
    {
      id: 6,
      name: 'Dr. Hajra Kaleem',
      qualifications: 'FCPS in Operative Dentistry, Certified Dentition Specialist',
      specialty: 'Operative Dentistry',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=300&fit=crop&crop=face',
      description: 'Expert in restorative and cosmetic dentistry procedures, focusing on preserving natural teeth with advanced techniques.',
      icon: <Star className="w-6 h-6 text-accent-yellow" />,
      experience: '11+ years'
    }
  ]

  const specialtyAreas = [
    {
      icon: <Shield className="w-8 h-8 text-primary-500" />,
      title: 'Oral & Maxillofacial Surgery',
      description: 'Complex surgical procedures for oral and facial conditions',
      specialists: ['Dr. Ahmed Sheikh', 'Dr. Nizam']
    },
    {
      icon: <Award className="w-8 h-8 text-accent-teal" />,
      title: 'Prosthodontics & Endodontics',
      description: 'Dental prosthetics and root canal therapy',
      specialists: ['Dr. Tayyab Sheikh']
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent-yellow" />,
      title: 'Orthodontics',
      description: 'Teeth straightening and bite correction',
      specialists: ['Dr. Jawad']
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children',
      specialists: ['Dr. Anosha']
    },
    {
      icon: <Star className="w-8 h-8 text-accent-yellow" />,
      title: 'Operative Dentistry',
      description: 'Restorative and cosmetic dental procedures',
      specialists: ['Dr. Hajra Kaleem']
    }
  ]

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
              Meet Our Specialists
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Our team of experienced dental professionals is dedicated to providing you with 
              the highest quality care using the latest techniques and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Specialty Areas Overview */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
              Our Specialties
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              From routine care to complex surgical procedures, our specialists cover every aspect of dental health.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialtyAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full group hover:shadow-lg transition-all duration-300">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-neutral-100 dark:bg-neutral-700 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                    {area.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300 mb-4">
                    {area.description}
                  </p>
                  <div className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {area.specialists.join(', ')}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialists Cards */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Each of our specialists brings years of experience and specialized training to provide you with exceptional care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <motion.div
                key={specialist.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    {/* Doctor Image */}
                    <div className="relative mb-6">
                      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-primary-100 dark:ring-primary-900/20 group-hover:ring-primary-200 dark:group-hover:ring-primary-800/40 transition-all duration-300">
                        <img
                          src={specialist.image}
                          alt={specialist.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="p-2 bg-white dark:bg-neutral-800 rounded-full shadow-soft group-hover:shadow-medium transition-all duration-300">
                          {specialist.icon}
                        </div>
                      </div>
                    </div>

                    {/* Doctor Info */}
                    <div className="mb-6">
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {specialist.name}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mb-3">
                        {specialist.qualifications}
                      </p>
                      <div className="flex items-center justify-center space-x-4 text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                        <div className="flex items-center">
                          <GraduationCap className="w-4 h-4 mr-1" />
                          {specialist.experience}
                        </div>
                      </div>
                      <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                        {specialist.description}
                      </p>
                    </div>

                    {/* Specialty Badge */}
                    <div className="mb-6">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300">
                        {specialist.specialty}
                      </span>
                    </div>

                    {/* Book Appointment Button */}
                    <div className="mt-auto">
                      <Button
                        as={Link}
                        to="/book"
                        variant="primary"
                        size="sm"
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
              Ready to Meet Your Specialist?
            </h2>
            <p className="text-xl text-primary-100">
              Schedule a consultation with one of our expert specialists today and take the first step toward optimal oral health.
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
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Specialists

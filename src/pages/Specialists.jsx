import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Award, 
  Clock, 
  GraduationCap, 
  Star, 
  Calendar,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Heart,
  Shield,
  Sparkles
} from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const Specialists = () => {
  const specialists = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      title: 'Founder & Lead Dentist',
      specialty: 'General & Cosmetic Dentistry',
      experience: '15+ years',
      education: ['DDS, Columbia University College of Dental Medicine', 'Advanced Cosmetic Dentistry Certificate'],
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Johnson founded Karachi Dental Clinic with a vision to provide exceptional dental care in a warm, welcoming environment. She specializes in cosmetic dentistry and is known for her gentle approach that puts even the most anxious patients at ease.',
      specialties: [
        'Porcelain Veneers',
        'Teeth Whitening',
        'Dental Crowns',
        'Smile Makeovers',
        'General Preventive Care'
      ],
      achievements: [
        'Top Dentist Award 2023',
        'Invisalign Diamond Provider',
        'Academy of Cosmetic Dentistry Member'
      ],
      languages: ['English', 'Spanish'],
      availability: 'Monday - Friday',
      phone: '+1 (555) 123-4567',
      email: 'dr.johnson@karachidentalclinic.com'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      title: 'Orthodontic Specialist',
      specialty: 'Orthodontics & Invisalign',
      experience: '12+ years',
      education: ['DDS, NYU College of Dentistry', 'MS in Orthodontics, NYU', 'Invisalign Certification'],
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Chen is our orthodontic specialist with extensive experience in both traditional braces and modern clear aligner therapy. He has successfully treated over 3,000 patients and is passionate about creating beautiful, healthy smiles for patients of all ages.',
      specialties: [
        'Invisalign Clear Aligners',
        'Traditional Metal Braces',
        'Ceramic Braces',
        'Early Orthodontic Treatment',
        'Adult Orthodontics'
      ],
      achievements: [
        'Invisalign Diamond Plus Provider',
        'American Board of Orthodontics Certified',
        'Best Orthodontist Award 2022'
      ],
      languages: ['English', 'Mandarin', 'Cantonese'],
      availability: 'Tuesday - Saturday',
      phone: '+1 (555) 123-4568',
      email: 'dr.chen@karachidentalclinic.com'
    },
    {
      id: 3,
      name: 'Dr. Emily Rodriguez',
      title: 'Oral Surgery Specialist',
      specialty: 'Oral Surgery & Implants',
      experience: '10+ years',
      education: ['DDS, UCSF School of Dentistry', 'Oral & Maxillofacial Surgery Residency', 'Implant Dentistry Fellowship'],
      image: 'https://images.unsplash.com/photo-1594824804732-5f7cf38f9baa?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Rodriguez specializes in oral surgery and dental implants. Her precise surgical techniques and caring approach make complex procedures comfortable for patients. She is committed to using the latest technology for optimal results.',
      specialties: [
        'Dental Implants',
        'Wisdom Tooth Extraction',
        'Bone Grafting',
        'Sinus Lift Surgery',
        'Oral Pathology'
      ],
      achievements: [
        'Fellow of American College of Oral Surgeons',
        'International Congress of Oral Implantologists Member',
        'Excellence in Implant Dentistry Award'
      ],
      languages: ['English', 'Spanish', 'Portuguese'],
      availability: 'Monday - Thursday',
      phone: '+1 (555) 123-4569',
      email: 'dr.rodriguez@karachidentalclinic.com'
    },
    {
      id: 4,
      name: 'Dr. James Wilson',
      title: 'Endodontic Specialist',
      specialty: 'Root Canal Therapy',
      experience: '8+ years',
      education: ['DDS, Harvard School of Dental Medicine', 'Endodontics Residency, Harvard', 'Microscopic Endodontics Certificate'],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Wilson is our endodontic specialist who focuses exclusively on root canal therapy and treating tooth pain. Using advanced microscopic techniques, he provides virtually painless treatment with exceptional success rates.',
      specialties: [
        'Root Canal Therapy',
        'Retreatment of Failed Root Canals',
        'Microscopic Endodontics',
        'Endodontic Surgery',
        'Traumatic Dental Injuries'
      ],
      achievements: [
        'American Association of Endodontists Member',
        'Microscopic Endodontics Specialist',
        'Patient Choice Award Winner'
      ],
      languages: ['English', 'French'],
      availability: 'Wednesday - Friday',
      phone: '+1 (555) 123-4570',
      email: 'dr.wilson@karachidentalclinic.com'
    },
    {
      id: 5,
      name: 'Dr. Lisa Park',
      title: 'Pediatric Dentist',
      specialty: 'Pediatric Dentistry',
      experience: '9+ years',
      education: ['DDS, UCLA School of Dentistry', 'Pediatric Dentistry Residency', 'Special Needs Dentistry Certificate'],
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Park specializes in dental care for infants, children, and teenagers. Her gentle approach and kid-friendly techniques make dental visits fun and comfortable for young patients. She is passionate about establishing healthy dental habits early.',
      specialties: [
        'Pediatric Preventive Care',
        'Early Orthodontic Intervention',
        'Fluoride Treatments',
        'Dental Sealants',
        'Special Needs Dentistry'
      ],
      achievements: [
        'American Academy of Pediatric Dentistry Fellow',
        'Board Certified Pediatric Dentist',
        'Kids\' Favorite Dentist Award'
      ],
      languages: ['English', 'Korean', 'Spanish'],
      availability: 'Monday - Friday',
      phone: '+1 (555) 123-4571',
      email: 'dr.park@karachidentalclinic.com'
    },
    {
      id: 6,
      name: 'Dr. Robert Thompson',
      title: 'Periodontic Specialist',
      specialty: 'Gum Disease & Implants',
      experience: '11+ years',
      education: ['DDS, University of Pennsylvania', 'Periodontics Residency', 'Laser Therapy Certification'],
      image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face',
      bio: 'Dr. Thompson is our periodontal specialist who focuses on the health of gums and supporting structures of teeth. He uses advanced laser therapy and minimally invasive techniques to treat gum disease and place dental implants.',
      specialties: [
        'Gum Disease Treatment',
        'Laser Gum Therapy',
        'Dental Implant Placement',
        'Gum Grafting',
        'Crown Lengthening'
      ],
      achievements: [
        'American Academy of Periodontology Diplomate',
        'Laser Therapy Specialist',
        'Excellence in Periodontics Award'
      ],
      languages: ['English', 'German'],
      availability: 'Tuesday - Saturday',
      phone: '+1 (555) 123-4572',
      email: 'dr.thompson@karachidentalclinic.com'
    }
  ]

  const specialtyAreas = [
    {
      icon: <Sparkles className="w-8 h-8 text-accent-yellow" />,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, whitening, and smile makeovers',
      specialists: ['Dr. Sarah Johnson']
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-500" />,
      title: 'Orthodontics',
      description: 'Straighten teeth with braces and Invisalign clear aligners',
      specialists: ['Dr. Michael Chen']
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Oral Surgery',
      description: 'Expert surgical procedures including implants and extractions',
      specialists: ['Dr. Emily Rodriguez']
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-accent-teal" />,
      title: 'Root Canal Therapy',
      description: 'Pain-free endodontic treatment to save your natural teeth',
      specialists: ['Dr. James Wilson']
    },
    {
      icon: <Star className="w-8 h-8 text-accent-yellow" />,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children and teenagers',
      specialists: ['Dr. Lisa Park']
    },
    {
      icon: <Award className="w-8 h-8 text-primary-500" />,
      title: 'Periodontics',
      description: 'Gum disease treatment and implant therapy',
      specialists: ['Dr. Robert Thompson']
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
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading text-neutral-900 mb-6">
              Our Specialties
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From routine cleanings to complex surgical procedures, our specialists cover every aspect of dental care.
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
                <Card className="p-6 text-center h-full">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-neutral-100 rounded-2xl">
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                    {area.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">
                    {area.description}
                  </p>
                  <div className="text-sm text-primary-600 font-medium">
                    {area.specialists.join(', ')}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialists Profiles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading text-neutral-900 mb-6">
              Our Expert Team
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Each of our specialists brings years of experience and specialized training to provide you with exceptional care.
            </p>
          </motion.div>

          <div className="space-y-16">
            {specialists.map((specialist, index) => (
              <motion.div
                key={specialist.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`overflow-hidden ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:flex">
                    {/* Image */}
                    <div className="lg:w-1/3">
                      <img
                        src={specialist.image}
                        alt={specialist.name}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="lg:w-2/3 p-8">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                            {specialist.name}
                          </h3>
                          <p className="text-primary-600 font-semibold text-lg mb-1">
                            {specialist.title}
                          </p>
                          <p className="text-neutral-600 mb-4">
                            {specialist.specialty} • {specialist.experience}
                          </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <Button
                            as={Link}
                            to="/book"
                            variant="primary"
                            size="sm"
                            icon={<Calendar size={16} />}
                          >
                            Book Appointment
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            icon={<Phone size={16} />}
                            href={`tel:${specialist.phone}`}
                          >
                            Call Directly
                          </Button>
                        </div>
                      </div>

                      <p className="text-neutral-700 mb-6 leading-relaxed">
                        {specialist.bio}
                      </p>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Specialties */}
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                            <Star className="w-4 h-4 text-accent-yellow mr-2" />
                            Specialties
                          </h4>
                          <ul className="space-y-1">
                            {specialist.specialties.map((specialty, i) => (
                              <li key={i} className="text-sm text-neutral-600 flex items-center">
                                <CheckCircle className="w-3 h-3 text-accent-teal mr-2" />
                                {specialty}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Education & Achievements */}
                        <div>
                          <h4 className="font-semibold text-neutral-900 mb-3 flex items-center">
                            <GraduationCap className="w-4 h-4 text-primary-500 mr-2" />
                            Education & Achievements
                          </h4>
                          <div className="space-y-2">
                            {specialist.education.map((edu, i) => (
                              <p key={i} className="text-sm text-neutral-600">
                                {edu}
                              </p>
                            ))}
                            {specialist.achievements.map((achievement, i) => (
                              <p key={i} className="text-sm text-primary-600 flex items-center">
                                <Award className="w-3 h-3 mr-2" />
                                {achievement}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="mt-6 pt-6 border-t border-neutral-200">
                        <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            Available: {specialist.availability}
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            {specialist.phone}
                          </div>
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            {specialist.email}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            Languages: {specialist.languages.join(', ')}
                          </div>
                        </div>
                      </div>
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
              <Button
                variant="outline"
                size="lg"
                icon={<Phone size={20} />}
                href="tel:+1-555-123-4567"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Specialists

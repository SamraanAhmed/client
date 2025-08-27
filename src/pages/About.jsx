import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Award,
  Heart,
  Shield,
  Users,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  Calendar,
} from 'lucide-react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const About = () => {
  const stats = [
    { number: '5+', label: 'Years of Experience' },
    { number: '5,000+', label: 'Happy Patients' },
    { number: '6', label: 'Professional Dentists' },
    { number: '4.9', label: 'Star Rating' },
  ];

  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Compassionate Care',
      description:
        'We believe every patient deserves gentle, personalized care in a comfortable environment.',
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-500" />,
      title: 'Safety First',
      description:
        'State-of-the-art sterilization and safety protocols ensure your health and peace of mind.',
    },
    {
      icon: <Award className="w-8 h-8 text-accent-yellow" />,
      title: 'Excellence',
      description:
        'Our commitment to continuing education and advanced techniques delivers superior results.',
    },
    {
      icon: <Users className="w-8 h-8 text-accent-teal" />,
      title: 'Family-Focused',
      description:
        'We provide comprehensive dental care for patients of all ages, from children to seniors.',
    },
  ];

  const team = [
    {
      name: 'Dr. Ahmed Sheikh',
      title: 'Oral and Maxillofacial Surgery Specialist',
      specialty: 'Oral and Maxillofacial Surgery',
      experience: '15+ years',
      education: 'Specialized in Oral and Maxillofacial Surgery',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face',
      bio: 'Specialized in complex oral and facial surgical procedures with advanced techniques for optimal patient outcomes and recovery.',
    },
    {
      name: 'Dr. Tayyab Sheikh',
      title: 'Prosthodontics & Endodontics Specialist',
      specialty: 'Prosthodontics & Endodontics',
      experience: '12+ years',
      education: 'FCPS in Prosthodontics, Certified Endodontist',
      image:
        'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in dental prosthetics and root canal therapy, combining precision craftsmanship with advanced endodontic techniques.',
    },
    {
      name: 'Dr. Jawad',
      title: 'Professional Orthodontist',
      specialty: 'Orthodontics',
      experience: '10+ years',
      education: 'Professional Orthodontist',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face',
      bio: 'Dedicated to creating beautiful, straight smiles using modern orthodontic techniques and personalized treatment plans.',
    },
    {
      name: 'Dr. Nizam',
      title: 'Professional Maxillofacial Surgeon',
      specialty: 'Maxillofacial Surgery',
      experience: '14+ years',
      education: 'Professional Maxillofacial Surgeon',
      image:
        'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=300&h=300&fit=crop&crop=face',
      bio: 'Specializes in facial and jaw surgery procedures, providing comprehensive care for complex oral and facial conditions.',
    },
    {
      name: 'Dr. Anosha',
      title: 'General Pediatric Dentist',
      specialty: 'Pediatric Dentistry',
      experience: '8+ years',
      education: 'General Pediatric Dentist',
      image:
        'https://images.unsplash.com/photo-1594824804732-5f7cf38f9baa?w=300&h=300&fit=crop&crop=face',
      bio: "Gentle and caring approach to children's dental health, making dental visits comfortable and fun for young patients.",
    },
    {
      name: 'Dr. Hajra Kaleem',
      title: 'Operative Dentistry Specialist',
      specialty: 'Operative Dentistry',
      experience: '11+ years',
      education: 'FCPS in Operative Dentistry, Certified Dentition Specialist',
      image:
        'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=300&h=300&fit=crop&crop=face',
      bio: 'Expert in restorative and cosmetic dentistry procedures, focusing on preserving natural teeth with advanced techniques.',
    },
  ];

  const certifications = [
    'American Dental Association (ADA)',
    'New York State Dental Society',
    'Academy of General Dentistry',
    'International Congress of Oral Implantologists',
    'American Association of Orthodontists',
    'Invisalign Certified Provider',
  ];

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
              About Us
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Providing compassionate dental care since 2020. Your smile is our
              priority, and we're committed to making every visit comfortable
              and stress-free.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 dark:text-neutral-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-neutral-700 dark:text-neutral-300">
                <p>
                  Karachi Dental Clinic was founded in 2010 with a simple
                  mission: to provide exceptional dental care in a warm,
                  welcoming environment. Dr. Sarah Johnson started this practice
                  after recognizing the need for patient-centered dental care in
                  New York.
                </p>
                <p>
                  Over the years, we've grown into a comprehensive dental
                  practice serving thousands of patients. Our team of
                  specialists works together to provide everything from routine
                  cleanings to complex oral surgeries, all under one roof.
                </p>
                <p>
                  What sets us apart is our commitment to using the latest
                  technology while maintaining the personal touch that makes
                  each patient feel like family. We believe that quality dental
                  care should be accessible, affordable, and comfortable for
                  everyone.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=400&fit=crop"
                alt="Modern dental clinic"
                className="rounded-2xl shadow-medium"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Team */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
              Our Professional Team
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
              We have 6 professional dentists specializing in various fields of
              dentistry, each bringing years of experience and expertise to
              provide you with comprehensive oral healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                as={Link}
                to="/specialists"
                variant="primary"
                size="lg"
                icon={<Users size={20} />}
              >
                Meet Our Specialists
              </Button>
              <Button
                as={Link}
                to="/book"
                variant="outline"
                size="lg"
                icon={<Calendar size={20} />}
              >
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              The principles that guide everything we do at Karachi Dental
              Clinic
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center h-full">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-neutral-50 dark:bg-neutral-700 rounded-2xl">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Our experienced team of dental professionals is dedicated to
              providing you with the highest quality care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {member.title}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                    {member.specialty} • {member.experience}
                  </p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                    {member.education}
                  </p>
                  <p className="text-neutral-700 dark:text-neutral-300 text-sm">
                    {member.bio}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology & Certifications */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technology */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
                Advanced Technology
              </h2>
              <div className="space-y-4">
                {[
                  'Digital X-rays with 90% less radiation',
                  'CAD/CAM same-day crown technology',
                  'Laser dentistry for precise treatment',
                  'Intraoral cameras for detailed diagnosis',
                  '3D imaging for implant planning',
                  'Nitrous oxide for comfortable procedures',
                ].map((tech, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-teal flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
                Certifications & Memberships
              </h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                    <span className="text-neutral-700 dark:text-neutral-300">
                      {cert}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
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
              Ready to Experience the Karachi Difference?
            </h2>
            <p className="text-xl text-primary-100">
              Schedule your appointment today and discover why thousands of
              patients trust us with their smiles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-neutral-50"
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Call (555) 123-4567
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

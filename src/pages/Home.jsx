import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Calendar,
  Phone,
  MessageCircle,
  Star,
  Shield,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Heart,
  Clock,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Home = () => {
  const services = [
    {
      icon: <CheckCircle className="w-8 h-8 text-primary-500" />,
      title: 'General Checkup',
      description:
        'Comprehensive dental examination and cleaning to maintain optimal oral health.',
      href: '/services/general-checkup',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-accent-yellow" />,
      title: 'Teeth Whitening',
      description:
        'Achieve a dazzling smile with our professional whitening treatments.',
      href: '/services/teeth-whitening',
    },
    {
      icon: <Shield className="w-8 h-8 text-accent-teal" />,
      title: 'Orthodontics',
      description:
        'Straighten your teeth with modern braces and Invisalign solutions.',
      href: '/services/orthodontics',
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Dental Implants',
      description:
        'Permanent solution for missing teeth with natural-looking results.',
      href: '/services/dental-implants',
    },
    {
      icon: <Shield className="w-8 h-8 text-primary-500" />,
      title: 'Root Canal',
      description: 'Pain-free root canal therapy to save your natural teeth.',
      href: '/services/root-canal',
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: 'Emergency Care',
      description: '24/7 emergency dental services for urgent dental problems.',
      href: '/services/emergency',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-6 h-6 text-primary-500" />,
      title: 'Pain-Free Treatments',
      description:
        'Advanced anesthesia and gentle techniques for comfortable procedures.',
    },
    {
      icon: <Award className="w-6 h-6 text-accent-teal" />,
      title: 'State-of-the-Art Equipment',
      description:
        'Latest dental technology for precise diagnosis and treatment.',
    },
    {
      icon: <Users className="w-6 h-6 text-accent-yellow" />,
      title: 'Experienced Specialists',
      description:
        'Board-certified dentists with years of specialized experience.',
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: 'Affordable Pricing',
      description:
        'Transparent pricing with flexible payment options for quality dental care.',
    },
  ];

  const specialists = [
    {
      name: 'Dr. Ahmed Sheikh',
      specialty: 'Oral and Maxillofacial Surgery',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Dr. Tayyab Sheikh',
      specialty: 'Prosthodontics & Endodontics',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Dr. Jawad',
      specialty: 'Orthodontics',
      image:
        'https://images.unsplash.com/photo-1594824804732-5f7cf38f9baa?w=150&h=150&fit=crop&crop=face',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&h=1080&fit=crop"
            alt="Modern dental clinic interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-secondary-900/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight">
              Bright Smiles,
              <br />
              <span className="text-accent-yellow">Lasting Health</span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
              Expert dental care in New York – Comfortable, affordable, and
              trusted by thousands of patients.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-accent-yellow" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-accent-yellow" />
                <span>5-Star Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-accent-teal" />
                <span>Certified Specialists</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button
                as={Link}
                to="/book"
                variant="primary"
                size="lg"
                icon={<Calendar size={20} />}
                className="bg-accent-yellow hover:bg-yellow-500 text-neutral-900 font-bold"
              >
                Book Appointment
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon={<Phone size={20} />}
                href="tel:+1-555-123-4567"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30"
              >
                Call Us Now
              </Button>
              <Button
                variant="primary"
                size="lg"
                icon={<i className="fab fa-whatsapp text-xl"></i>}
                href="https://wa.me/03338353771"
                className="bg-green-500 hover:bg-green-600 text-white border-green-500 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/70 rounded-full mt-2"
            />
          </motion.div>
        </motion.div> */}
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Comprehensive dental care tailored to your needs, from routine
              checkups to specialized treatments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full p-8 text-center group cursor-pointer">
                  <Link to={service.href}>
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-center text-primary-500 group-hover:text-primary-600 transition-colors">
                      <span className="font-medium">Learn More</span>
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
              Why Choose Karachi?
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              We're committed to providing exceptional dental care in a
              comfortable, modern environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-white dark:bg-neutral-700 rounded-2xl shadow-soft">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Specialists Section */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-neutral-900 dark:text-white mb-6">
              Meet Our Specialists
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
              Our experienced team of dental professionals is here to provide
              you with the highest quality care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <motion.div
                key={specialist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center p-8">
                  <img
                    src={specialist.image}
                    alt={specialist.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {specialist.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {specialist.specialty}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-6">
                    {specialist.experience}
                  </p>
                  <Button
                    as={Link}
                    to="/book"
                    variant="outline"
                    size="sm"
                    fullWidth
                  >
                    Book Appointment
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              as={Link}
              to="/specialists"
              variant="secondary"
              size="lg"
              icon={<ArrowRight size={20} />}
              iconPosition="right"
            >
              View All Specialists
            </Button>
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
            <h2 className="text-4xl md:text-5xl font-bold font-heading">
              Ready for Your Best Smile?
            </h2>
            <p className="text-xl text-primary-100">
              Don't wait – book your appointment today and take the first step
              towards optimal dental health.
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
                Book Appointment
              </Button>
              <Button
                variant="outline"
                size="lg"
                icon={<Phone size={20} />}
                href="tel:03338353771"
                className="border-white text-white hover:bg-white hover:text-primary-600"
              >
                Call Emergency: 0333 8353771
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

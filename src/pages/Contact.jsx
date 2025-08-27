import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
  Car,
  Accessibility,
  Star,
  Users,
  Award,
  Globe,
  Shield,
  HeadphonesIcon,
  Navigation,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitted(true);
    setLoading(false);
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Our Clinic',
      subtitle: 'Modern Facility in Prime Location',
      details: [
        '123 Broadway Street',
        'New York, NY 10001',
        'Near Central Park',
      ],
      color: 'bg-blue-50 text-blue-600',
      action: {
        text: 'Get Directions',
        href: 'https://maps.google.com',
        icon: <Navigation className="w-4 h-4" />,
      },
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      subtitle: '24/7 Emergency Support',
      details: [' ', 'WhatsApp: 0333 8353771', ' '],
      color: 'bg-green-50 text-green-600',
      action: {
        text: 'Call Now',
        href: 'tel:+92-333-8353771',
        icon: <Phone className="w-4 h-4" />,
      },
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      subtitle: 'Quick Response Guaranteed',
      details: [
        'info@Karachidentalclinic.com',
        'appointments@Karachidentalclinic.com',
        'billing@Karachidentalclinic.com',
      ],
      color: 'bg-purple-50 text-purple-600',
      action: {
        text: 'Send Email',
        href: 'mailto:info@Karachidentalclinic.com',
        icon: <Mail className="w-4 h-4" />,
      },
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Office Hours',
      subtitle: 'Flexible Scheduling Available',
      details: ['Monday - Saturday: 5:00 PM - 9:30 PM', 'Sunday: Closed'],
      color: 'bg-orange-50 text-orange-600',
      action: {
        text: 'Book Online',
        href: '/book',
        icon: <CheckCircle className="w-4 h-4" />,
      },
    },
  ];

  const subjects = [
    'General Inquiry',
    'Appointment Request',
    'Insurance Question',
    'Treatment Information',
    'Billing Question',
    'Emergency',
    'Other',
  ];

  const stats = [
    {
      icon: <Award className="w-8 h-8" />,
      number: '5+',
      label: 'Years Experience',
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: '5,000+',
      label: 'Happy Patients',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      number: '6',
      label: 'Professional Dentists',
    },
    {
      icon: <Star className="w-8 h-8" />,
      number: '4.9',
      label: 'Average Rating',
    },
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="max-w-md mx-auto text-center"
        >
          <Card className="p-8 shadow-xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-4">
              Message Sent Successfully!
            </h1>
            <p className="text-neutral-600 mb-6 leading-relaxed">
              Thank you for reaching out to us. Our team will get back to you
              within 24 hours during business days.
            </p>
            <div className="space-y-3">
              <Button
                onClick={() => setSubmitted(false)}
                variant="primary"
                fullWidth
                className="bg-gradient-to-r from-primary-500 to-primary-600"
              >
                Send Another Message
              </Button>
              <Button
                onClick={() => (window.location.href = '/')}
                variant="outline"
                fullWidth
              >
                Back to Home
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white overflow-hidden">
        <div
          className={
            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-20'
          }
        ></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6"
            >
              Let's Get in <span className="text-accent-yellow">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto mb-8"
            >
              We're here to help! Get in touch with our friendly team for
              appointments, questions, or any dental concerns you may have.
            </motion.p>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                      <div className="text-white">{stat.icon}</div>
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-primary-100">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Side - Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 lg:p-10 shadow-xl border-0">
                  <div className="flex items-center space-x-3 mb-8">
                    <div className="p-3 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-neutral-900">
                        Send us a Message
                      </h2>
                      <p className="text-neutral-600">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="Full Name"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange('name', e.target.value)
                        }
                        placeholder="Enter your full name"
                        required
                        className="transition-all duration-300 focus:shadow-md"
                      />
                      <Input
                        label="Email Address"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange('email', e.target.value)
                        }
                        placeholder="Enter your email"
                        required
                        className="transition-all duration-300 focus:shadow-md"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <Input
                        label="Phone Number"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange('phone', e.target.value)
                        }
                        placeholder="Enter your phone number"
                        className="transition-all duration-300 focus:shadow-md"
                      />
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Subject *
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) =>
                            handleInputChange('subject', e.target.value)
                          }
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white text-neutral-900 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 focus:shadow-md"
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
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange('message', e.target.value)
                        }
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl bg-white text-neutral-900 placeholder-neutral-500 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none focus:shadow-md"
                        required
                      />
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4">
                      <div className="flex items-start space-x-3">
                        <HeadphonesIcon className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <p className="text-sm text-blue-800">
                            <strong>Quick Response:</strong> We typically
                            respond to messages within 24 hours during business
                            days. For urgent dental emergencies, please call our
                            emergency line at <strong>0333 8353771</strong>.
                          </p>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      loading={loading}
                      icon={<Send size={20} />}
                      className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transform transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    >
                      {loading ? 'Sending Message...' : 'Send Message'}
                    </Button>
                  </form>
                </Card>
              </motion.div>
            </div>

            {/* Right Side - Map and Additional Info */}
            <div className="space-y-8">
              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden shadow-xl border-0">
                  <div className="p-6 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
                    <h3 className="text-xl font-bold mb-2">
                      Find Our Location
                    </h3>
                    <p className="text-primary-100">
                      Easy to reach, convenient parking
                    </p>
                  </div>
                  <div className="h-64 relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2175772!2d-73.98956862435864!3d40.75889697932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1635959015"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Karachi Dental Clinic Location"
                    />
                  </div>
                </Card>
              </motion.div>

              {/* Visit Information */}
              {/* <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-6 shadow-xl border-0">
                  <h3 className="text-xl font-bold text-neutral-900 mb-6 flex items-center">
                    <Globe className="w-5 h-5 text-primary-500 mr-2" />
                    Visit Information
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 border border-green-200">
                      <Car className="w-5 h-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-800">
                          Free Parking
                        </p>
                        <p className="text-sm text-green-700">
                          Adjacent garage with easy access
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                      <Accessibility className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-800">
                          Wheelchair Accessible
                        </p>
                        <p className="text-sm text-blue-700">
                          Elevator access to all floors
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 rounded-lg bg-purple-50 border border-purple-200">
                      <MapPin className="w-5 h-5 text-purple-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-purple-800">
                          Easy to Find
                        </p>
                        <p className="text-sm text-purple-700">
                          3rd floor, Suite 301
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-neutral-900 mb-4">
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Choose the most convenient way to contact our dental team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-white">
                  <div className="text-center h-full flex flex-col">
                    <div
                      className={`inline-flex p-4 rounded-2xl ${info.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {info.icon}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {info.title}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-4">
                      {info.subtitle}
                    </p>
                    <div className="space-y-2 mb-6 flex-grow">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-sm text-neutral-700">
                          {detail}
                        </p>
                      ))}
                    </div>
                    <div className="mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        href={info.action.href}
                        icon={info.action.icon}
                        className="group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500 transition-all duration-300"
                      >
                        {info.action.text}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      {/* <section className="py-16 bg-gradient-to-r from-red-500 to-red-600 text-white relative overflow-hidden">
        <div
          className={
            'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20s-20-8.954-20-20 8.954-20 20-20 20 8.954 20 20zm0-20c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20z"/%3E%3C/g%3E%3C/svg%3E\')] opacity-20'
          }
        ></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                <Phone className="w-12 h-12 text-white" />
              </div>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Dental Emergency?
            </h2>
            <p className="text-lg lg:text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Don't wait in pain! Contact us immediately for urgent dental care.
              We offer same-day emergency appointments and after-hours care.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Button
                variant="secondary"
                size="lg"
                icon={<Phone size={20} />}
                href="tel:+92-333-8353771"
                className="bg-white text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Emergency: 0333 8353771
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Emergency Care Info
              </Button>
            </div>
          </motion.div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;

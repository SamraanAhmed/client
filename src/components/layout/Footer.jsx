import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  ArrowRight,
  Heart,
} from 'lucide-react';
import Logo from '../common/Logo';
import Button from '../ui/Button';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Specialists', href: '/specialists' },
    { name: 'Contact', href: '/contact' },
    // { name: 'Blog', href: '/blog' },
  ];

  const services = [
    { name: 'General Checkup', href: '/services/general-checkup' },
    { name: 'Teeth Whitening', href: '/services/teeth-whitening' },
    { name: 'Orthodontics', href: '/services/orthodontics' },
    { name: 'Dental Implants', href: '/services/dental-implants' },
    { name: 'Root Canal', href: '/services/root-canal' },
    { name: 'Emergency Care', href: '/services/emergency' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
  ];

  return (
    <footer className="bg-neutral-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Clinic Info */}
            <div className="space-y-6">
              <Logo variant="white" className="h-12 w-auto" />
              <p className="text-neutral-300 text-sm leading-relaxed">
                Providing compassionate dental care since 2020. Your smile is
                our priority, and we're committed to making every visit
                comfortable and stress-free.
              </p>

              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin
                    size={16}
                    className="text-primary-400 mt-1 flex-shrink-0"
                  />
                  <span className="text-sm text-neutral-300">
                    123 Broadway Street
                    <br />
                    New York, NY 10001
                  </span>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary-400 flex-shrink-0" />
                  <a
                    href="tel:03338353771"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    0333 8353771
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary-400 flex-shrink-0" />
                  <a
                    href="mailto:info@Karachidentalclinic.com"
                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                  >
                    info@Karachidentalclinic.com
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock
                    size={16}
                    className="text-primary-400 mt-1 flex-shrink-0"
                  />
                  <div className="text-sm text-neutral-300">
                    <p>Mon - Sat: 5:00 PM - 9:30 PM</p>
                    <p>Sunday: Closed</p>
                    {/* <p className="text-accent-teal">Emergency: 24/7</p> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-neutral-300 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                      />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.href}
                      className="text-sm text-neutral-300 hover:text-white transition-colors flex items-center group"
                    >
                      <ArrowRight
                        size={14}
                        className="mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200"
                      />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>

              {/* Newsletter */}
              <div className="space-y-4 mb-8">
                <p className="text-sm text-neutral-300">
                  Subscribe to our newsletter for dental tips and special
                  offers.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                  />
                  <Button
                    variant="primary"
                    size="sm"
                    fullWidth
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                  >
                    Subscribe
                  </Button>
                </form>
              </div>

              {/* Social Links */}
              {/* <div>
                <h4 className="text-sm font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-neutral-800 rounded-lg hover:bg-primary-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-neutral-400">
              © {currentYear} Karachi Dental Clinic. All rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center text-sm text-neutral-400">
              Made with <Heart size={14} className="mx-1 text-red-500" /> for
              healthier smiles
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://facebook.com/sunfipharma',
      label: 'Facebook'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/sunfipharma',
      label: 'Twitter'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/company/sunfi-pharmaceutical',
      label: 'LinkedIn'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/sunfipharma',
      label: 'Instagram'
    }
  ];

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div className="text-xl font-bold text-gradient-primary">
                Sunfi Pharmaceutical
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Committed to advancing healthcare through innovation and excellence in pharmaceutical manufacturing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="text-sm text-muted-foreground hover:text-primary">
                  Products
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm text-muted-foreground hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                A-18-19, Talavadi Circle, Krishna Park Society, Part II
              </li>
              <li className="text-sm text-muted-foreground">
                Ramol, Ahmedabad, Gujarat 380049
              </li>
              <li className="text-sm text-muted-foreground">
                Email: info@sunfipharma.com
              </li>
              <li className="text-sm text-muted-foreground">
                Phone: +91 75 6672 4040
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Sunfi Pharmaceutical Pvt. Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
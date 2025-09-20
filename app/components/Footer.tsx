import React from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-stone-950 border-t border-stone-800">
      <div className="lg:px-16 px-5 pt-12 pb-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left side - Logo and Contact */}
          <div className="flex flex-col gap-6 lg:w-1/3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg"></div>
              <span className="text-2xl font-semibold text-white">Lattice Arch</span>
            </div>
            
            <div className="flex flex-col gap-4 text-stone-400">
              <a href="mailto:info@latticearch.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={20} />
                <span>info@latticearch.com</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={20} />
                <span>+1 (234) 567-8900</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="mt-1" />
                <span>123 Architecture Lane<br />Design District, NY 10001</span>
              </div>
            </div>
          </div>
          
          {/* Right side - Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:w-2/3">
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium text-lg">Services</h3>
              <div className="flex flex-col gap-3 text-stone-400">
                <Link href="/services/design" className="hover:text-white transition-colors">Layout Design</Link>
                <Link href="/services/3d" className="hover:text-white transition-colors">3D Rendering</Link>
                <Link href="/services/ai" className="hover:text-white transition-colors">AI Remodeller</Link>
                <Link href="/services/crm" className="hover:text-white transition-colors">CRM Solutions</Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium text-lg">Company</h3>
              <div className="flex flex-col gap-3 text-stone-400">
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
                <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium text-lg">Resources</h3>
              <div className="flex flex-col gap-3 text-stone-400">
                <Link href="/showroom" className="hover:text-white transition-colors">Showroom</Link>
                <Link href="/materials" className="hover:text-white transition-colors">Materials</Link>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-white font-medium text-lg">Legal</h3>
              <div className="flex flex-col gap-3 text-stone-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom - Copyright */}
        <div className="mt-8 pt-4 border-t border-stone-800">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 text-stone-500 text-sm">
            <p>© {new Date().getFullYear()} Lattice Arch. All rights reserved.</p>
            <p>Designed and built with excellence in architecture.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

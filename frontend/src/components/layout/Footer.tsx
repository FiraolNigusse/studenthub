import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Github, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone
} from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Instagram, href: 'https://instagram.com' }
  ];

  const productLinks = [
    { name: 'GPA Calculator', href: '/gpa' },
    { name: 'Resume Builder', href: '/resume' },
    { name: 'Templates', href: '/templates' },
    { name: 'Blog & Tips', href: '/blog' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-24 mt-24 relative overflow-hidden isolate">
      {/* Decoration blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-600/20 rounded-full blur-[100px] -z-1 -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-light/10 rounded-full blur-[100px] -z-1 translate-x-12 translate-y-12" />
      
      <div className="container mx-auto px-6 h-full flex flex-col items-center gap-24 relative">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          <div className="space-y-8 text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary-500/20">
                <GraduationCap size={24} />
              </div>
              <span className="text-2xl font-display font-black text-white tracking-tight">Student<span className="text-primary-400">Hub</span></span>
            </Link>
            <p className="text-lg leading-relaxed font-medium text-slate-400/80 mx-auto md:mx-0 max-w-sm md:max-w-none">
              Empowering students with modern tools for academic excellence. Calculate GPA, build stunning resumes, and manage your student life.
            </p>
            <div className="flex justify-center md:justify-start gap-6">
              {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800/50 text-slate-400 rounded-xl hover:text-white hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-600/20 transition-all hover:-translate-y-1">
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-8 text-center md:text-left">
            <h4 className="text-lg font-display font-extrabold text-white tracking-widest uppercase">Product</h4>
            <ul className="space-y-4">
              {productLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.href} className="text-lg font-bold hover:text-primary-400 transition-colors flex items-center justify-center md:justify-start group">
                    <span className="hidden md:block w-0 group-hover:w-3 h-0.5 bg-primary-400 transition-all mr-0 group-hover:mr-2 rounded-full" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8 text-center md:text-left">
            <h4 className="text-lg font-display font-extrabold text-white tracking-widest uppercase">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((item, i) => (
                <li key={i}>
                  <Link to={item.href} className="text-lg font-bold hover:text-primary-400 transition-colors flex items-center justify-center md:justify-start group">
                    <span className="hidden md:block w-0 group-hover:w-3 h-0.5 bg-primary-400 transition-all mr-0 group-hover:mr-2 rounded-full" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8 text-center md:text-left">
            <h4 className="text-lg font-display font-extrabold text-white tracking-widest uppercase">Stay Updated</h4>
            <div className="space-y-6">
               <a href="mailto:support@studenthub.io" className="flex gap-4 items-center justify-center md:justify-start p-4 bg-slate-800/50 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group cursor-pointer inline-flex md:flex w-full">
                  <Mail size={20} className="text-slate-500 group-hover:text-primary-400 transition-colors" />
                  <span className="text-lg font-bold">support@studenthub.io</span>
               </a>
               <a href="tel:+15550000000" className="flex gap-4 items-center justify-center md:justify-start p-4 bg-slate-800/50 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group cursor-pointer inline-flex md:flex w-full">
                  <Phone size={20} className="text-slate-500 group-hover:text-primary-400 transition-colors" />
                  <span className="text-lg font-bold">+1 (555) 000-0000</span>
               </a>
            </div>
          </div>
        </div>
        
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <p className="text-base font-bold text-slate-600 tracking-tight">&copy; 2026 StudentHub. All rights reserved.</p>
          <div className="flex gap-8 lg:gap-12 font-bold text-base text-slate-600">
            <Link to="/security" className="hover:text-primary-400 transition-colors">Security</Link>
            <Link to="/cookie-policy" className="hover:text-primary-400 transition-colors">Cookie Policy</Link>
            <Link to="/accessibility" className="hover:text-primary-400 transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

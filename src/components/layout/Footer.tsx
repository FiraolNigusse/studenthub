import React from 'react';
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
  return (
    <footer className="bg-slate-900 text-slate-400 py-24 mt-24 relative overflow-hidden isolate">
      {/* Decoration blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-600/20 rounded-full blur-[100px] -z-1 -translate-x-12 -translate-y-12" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-light/10 rounded-full blur-[100px] -z-1 translate-x-12 translate-y-12" />
      
      <div className="container mx-auto px-6 h-full flex flex-col items-center gap-24 relative">
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white shadow-xl shadow-primary-500/20">
                <GraduationCap size={24} />
              </div>
              <span className="text-2xl font-display font-black text-white tracking-tight">Student<span className="text-primary-400">Hub</span></span>
            </div>
            <p className="text-lg leading-relaxed font-medium text-slate-400/80">
              Empowering students with modern tools for academic excellence. Calculate GPA, build stunning resumes, and manage your student life.
            </p>
            <div className="flex gap-6">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-slate-800/50 text-slate-400 rounded-xl hover:text-white hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-600/20 transition-all hover:-translate-y-1">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-lg font-display font-extrabold text-white tracking-widest uppercase">Product</h4>
            <ul className="space-y-4">
              {['GPA Calculator', 'Resume Builder', 'Templates', 'Blog & Tips'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-lg font-bold hover:text-primary-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-3 h-0.5 bg-primary-400 transition-all mr-0 group-hover:mr-2 rounded-full" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-lg font-display font-extrabold text-white tracking-widest uppercase">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-lg font-bold hover:text-primary-400 transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-3 h-0.5 bg-primary-400 transition-all mr-0 group-hover:mr-2 rounded-full" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-lg font-display font-extrabold text-white tracking-widest uppercase">Stay Updated</h4>
            <div className="space-y-6">
               <div className="flex gap-4 items-center p-4 bg-slate-800/50 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
                  <Mail size={20} className="text-slate-500 group-hover:text-primary-400 transition-colors" />
                  <span className="text-lg font-bold">support@studenthub.io</span>
               </div>
               <div className="flex gap-4 items-center p-4 bg-slate-800/50 rounded-2xl border border-white/5 hover:border-primary-500/50 transition-colors group">
                  <Phone size={20} className="text-slate-500 group-hover:text-primary-400 transition-colors" />
                  <span className="text-lg font-bold">+1 (555) 000-0000</span>
               </div>
            </div>
          </div>
        </div>
        
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-8">
          <p className="text-base font-bold text-slate-600 tracking-tight">&copy; 2026 StudentHub. All rights reserved.</p>
          <div className="flex gap-12 font-bold text-base text-slate-600">
            <a href="#" className="hover:text-primary-400 transition-colors">Security</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

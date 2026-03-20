import React from 'react';
import { useNavigate } from 'react-router-dom';
import { XCircle, ArrowLeft, LifeBuoy } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const PaymentCancel: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-24 animate-fade-in text-center">
      <div className="w-full max-w-lg">
        <div className="w-24 h-24 bg-red-100 rounded-[2rem] flex items-center justify-center text-red-600 mx-auto mb-10 shadow-xl shadow-red-200">
          <XCircle size={48} />
        </div>
        
        <h1 className="text-4xl font-display font-black text-slate-900 mb-6 tracking-tight">Payment <span className="text-red-600">Cancelled</span></h1>
        
        <Card className="p-12 rounded-[3rem] shadow-xl border-slate-100 mb-10 bg-white/50 backdrop-blur-3xl overflow-hidden isolate relative">
           <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-3xl opacity-20 -z-1" />
           <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10">
             Your transaction was not completed. No charges were made to your account. 
             If you're having trouble with your payment, please reach out to our support.
           </p>
           
           <div className="flex flex-col gap-4">
              <Button size="lg" className="w-full h-16 rounded-2xl text-xl font-black shadow-xl shadow-primary-500/20" onClick={() => navigate('/resume')}>
                 Return to Builder
              </Button>
              <Button variant="ghost" size="lg" className="w-full h-16 rounded-2xl font-bold flex items-center justify-center gap-3">
                 <LifeBuoy size={24} /> Contact Support
              </Button>
           </div>
        </Card>
        
        <button 
          onClick={() => navigate('/')}
          className="flex items-center justify-center gap-2 mx-auto text-slate-400 font-extrabold hover:text-slate-600 transition-colors"
        >
          <ArrowLeft size={18} /> Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentCancel;

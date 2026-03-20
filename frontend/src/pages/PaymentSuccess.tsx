import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    // In a real app, we might verify with the backend here too.
    // For now, we just refresh the local user data to show premium status.
    const refreshUser = async () => {
       // Optional: fetch user data from an /api/auth/me endpoint if you have one.
       // Since we don't have a dedicated "me" endpoint yet, we'll just wait for the webhook
       // to have processed it and suggest the user refreshes or we can just mock the 
       // premium update in local storage for immediate feedback if we trust the redirect.
       
       // Better: assume the webhook might take a second, but show success.
    };
    refreshUser();
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-lg animate-fade-in text-center">
        <div className="w-24 h-24 bg-green-100 rounded-[2rem] flex items-center justify-center text-green-600 mx-auto mb-10 shadow-xl shadow-green-200 animate-bounce-subtle">
          <CheckCircle2 size={48} />
        </div>
        
        <h1 className="text-5xl font-display font-black text-slate-900 mb-6 tracking-tight">Payment <span className="text-green-600">Successful!</span></h1>
        
        <Card className="p-10 rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.04)] border-slate-100 mb-10 overflow-hidden relative isolate">
           <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-40 -z-1" />
           <div className="flex items-center justify-center gap-3 mb-6 bg-primary-50 text-primary-600 px-6 py-3 rounded-2xl w-fit mx-auto border border-primary-100 font-black uppercase tracking-widest text-xs">
              <ShieldCheck size={20} /> Premium Unlocked
           </div>
           <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
             Congratulations! You now have full access to all premium features, templates, and unlimited resume exports.
           </p>
           <ul className="text-left space-y-4 mb-10">
              {['Unlimited Resume Savings', 'Exclusive ATS Templates', 'Advanced GPA Analytics', 'Priority Support'].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-bold">
                  <div className="w-6 h-6 bg-green-50 rounded-full flex items-center justify-center text-green-600">
                    <Sparkles size={14} />
                  </div>
                  {feat}
                </li>
              ))}
           </ul>
           <Button className="w-full h-16 rounded-2xl text-xl font-black shadow-xl shadow-primary-500/20" onClick={() => navigate('/resume')}>
              Start Building <ArrowRight size={24} className="ml-2" />
           </Button>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSuccess;

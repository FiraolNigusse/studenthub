import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Mail, Lock, AlertCircle, ArrowRight, ShieldCheck, User } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import { AuthService } from '../services';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_confirm: ''
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.password_confirm) {
        setError("Passwords don't match.");
        return;
    }

    setIsLoading(true);
    setError(null);

      try {
        console.log('Attempting registration with:', formData);
        await AuthService.register(formData);
        navigate('/resume-builder');
      } catch (err: any) {
        console.error('Registration error details:', err.response?.data || err);
        const errors = err.response?.data;
        if (errors) {
            if (typeof errors === 'string') {
                setError(errors);
            } else {
                const errorEntries = Object.entries(errors);
                if (errorEntries.length > 0) {
                    const [field, firstError] = errorEntries[0];
                    const rawMsg = Array.isArray(firstError) ? firstError[0] : (typeof firstError === 'object' ? JSON.stringify(firstError) : String(firstError));
                    const prefix = (field !== 'detail' && field !== 'password' && field !== 'password2' && field !== 'non_field_errors') ? `${field.replace('_', ' ')}: ` : '';
                    setError(prefix + rawMsg);
                } else {
                    setError('Registration failed: ' + JSON.stringify(errors));
                }
            }
        } else {
            setError(err.message || 'Registration failed. Please check your connection.');
        }
      } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md animate-fade-in">
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-primary-200">
            <UserPlus size={32} />
          </div>
          <h1 className="text-4xl font-display font-black text-slate-900 mb-2">Create Account</h1>
          <p className="text-slate-500 font-medium whitespace-nowrap overflow-visible">Join <span className="gradient-text font-black">StudentHub</span> and build your career</p>
        </div>

        <Card className="p-8 lg:p-10 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.04)] border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-semibold animate-shake">
                <AlertCircle size={18} />
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="First Name"
                name="first_name"
                placeholder="e.g. Alex"
                value={formData.first_name}
                onChange={handleChange}
                icon={User}
                required
              />
              <Input
                label="Last Name"
                name="last_name"
                placeholder="e.g. Student"
                value={formData.last_name}
                onChange={handleChange}
                icon={User}
                required
              />
            </div>

            <Input
              label="Email Address"
              type="email"
              name="email"
              placeholder="alex@example.com"
              value={formData.email}
              onChange={handleChange}
              icon={Mail}
              required
            />

            <Input
              label="Password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              icon={Lock}
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              name="password_confirm"
              placeholder="••••••••"
              value={formData.password_confirm}
              onChange={handleChange}
              icon={ShieldCheck}
              required
            />

            <Button 
              type="submit" 
              className="w-full h-14 rounded-2xl text-lg font-bold shadow-lg shadow-primary-500/20"
              disabled={isLoading}
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-slate-50 text-center">
            <p className="text-slate-500 font-medium">
              Already have an account?{' '}
              <Link to="/login" className="text-primary-600 font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </Card>
        
        <Link to="/" className="flex items-center justify-center gap-2 mt-8 text-slate-400 font-bold hover:text-slate-600 transition-colors">
          <ArrowRight size={18} className="rotate-180" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Register;

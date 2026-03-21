import GPAWidget from '../features/gpa/components/GPAWidget';
import AffiliateSection from '../components/affiliate/AffiliateSection';
import SEO from '../components/seo/SEO';

const GPACalculator: React.FC = () => {
  return (
    <>
      <SEO 
        title="GPA Calculator - Academic Performance Tracker" 
        description="Calculate your cumulative GPA with precision. Add courses, track credits, and plan your academic goals with StudentHub."
        keywords="gpa calculator, cumulative gpa, grade tracker, academic success, student tools"
      />
      <div className="container mx-auto px-6 py-24 animate-fade-in max-w-6xl">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-5xl lg:text-7xl font-display font-extrabold mb-8 tracking-tight text-slate-900 leading-tight">
            GPA <span className="gradient-text">Calculator</span>
          </h1>
          <p className="text-lg text-slate-500 font-medium leading-relaxed">
            Manage your academic performance with precision. Track semester results, simulate future outcomes, and stay on top of your goals.
          </p>
        </div>

        <div className="mb-24">
          <GPAWidget />
        </div>

        <AffiliateSection />
      </div>
    </>
  );
};

export default GPACalculator;

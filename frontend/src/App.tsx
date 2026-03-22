import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import GPACalculator from './pages/GPACalculator';
import ResumeBuilder from './pages/ResumeBuilder';
import Templates from './pages/Templates';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import GPAGuide from './pages/GPAGuide';
import GpaCalculatorStudents from './pages/GpaCalculatorStudents';
import GpaScholarshipGuide from './pages/GpaScholarshipGuide';
import ResumeNoExperience from './pages/ResumeNoExperience';
import FreeResumeBuilderGuide from './pages/FreeResumeBuilderGuide';
import Login from './pages/Login';
import Register from './pages/Register';
import PaymentSuccess from './pages/PaymentSuccess';
import PaymentCancel from './pages/PaymentCancel';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gpa-calculator" element={<GPACalculator />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/how-to-calculate-gpa" element={<GPAGuide />} />
          <Route path="/gpa-calculator-for-students" element={<GpaCalculatorStudents />} />
          <Route path="/what-gpa-do-i-need-for-scholarship" element={<GpaScholarshipGuide />} />
          <Route path="/resume-for-students-no-experience" element={<ResumeNoExperience />} />
          <Route path="/free-resume-builder-for-students" element={<FreeResumeBuilderGuide />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/cancel" element={<PaymentCancel />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

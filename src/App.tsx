import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import GPACalculator from './pages/GPACalculator';
import ResumeBuilder from './pages/ResumeBuilder';
import Templates from './pages/Templates';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gpa" element={<GPACalculator />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

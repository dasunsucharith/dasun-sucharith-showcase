
import { Suspense, lazy } from 'react';
const Navigation = lazy(() => import('@/components/Navigation'));
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Suspense fallback={null}>
        <Navigation />
      </Suspense>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

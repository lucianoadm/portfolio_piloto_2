import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FlipCards from './components/FlipCards';
import Dashboard from './components/Dashboard';
import Timeline from './components/Timeline';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6]">
      <Navbar />
      <Hero />
      <FlipCards />
      <Dashboard />
      <Timeline />
      <ContactFooter />
    </div>
  );
}

export default App;

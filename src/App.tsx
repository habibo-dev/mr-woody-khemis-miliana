import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Reviews } from './components/Reviews';
import { CTAStrip } from './components/CTAStrip';
import { OrderForm } from './components/OrderForm';
import { Location } from './components/Location';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';

function App() {
  return (
    <div className="min-h-screen pb-[80px] md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <CTAStrip />
        <Reviews />
        <OrderForm />
        <Gallery />
        <Location />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

export default App;
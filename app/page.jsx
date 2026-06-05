import Header from '../components/Header';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import Support from '../components/Support';
import { Hero, ChannelStrip, Features, HowItWorks } from '../components/sections';
import { Pricing, TrustBand } from '../components/sections2';

export default function HomePage() {
  return (
    <>
      <Reveal />
      <Header />
      <main>
        <Hero />
        <ChannelStrip />
        <Features />
        <HowItWorks />
        <Pricing />
        <TrustBand />
        <Support />
      </main>
      <Footer />
    </>
  );
}

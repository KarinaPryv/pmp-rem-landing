import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import CooperationSection from './components/CooperationSection';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';

import './Home.css';

function Home() {
    return (
        <>
            <HeroSection />
            <StatsSection />
            <AboutSection />
            <ServicesSection />
            <CooperationSection />
            <ContactSection />
        </>
    );
}

export default Home;

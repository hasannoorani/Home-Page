import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import InfoCards from "@/components/InfoCards";
import AboutTeachers from "@/components/AboutTeachers";
import AboutTeam from "@/components/AboutTeam";
import AboutProject from "@/components/AboutProject";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />

    {/* Home Section */}
    <section id="home">
      <HeroSlider />
      <InfoCards />
    </section>

    {/* About Section */}
    <section id="about">
      <AboutTeachers />
      <AboutTeam />
      <AboutProject />
    </section>

    {/* Contact Section */}
    <footer id="contact">
      <Footer />
    </footer>
  </div>
);

export default Index;
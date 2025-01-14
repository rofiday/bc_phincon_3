import Carousel from "../components/Carousel";
import HeroSection from "../components/HeroSection";
import TopNavigationBar from "../components/TopNavigationBar";
import Requirements from "../components/Requirements";
import News from "../components/News";
import Features from "../components/Features";
import TopScores from "../components/TopScores";
import Footer from "../components/Footer";
const LandingPage = () => {
  return (
    <>
      <TopNavigationBar />
      <HeroSection />
      <Carousel />
      <Features />
      <Requirements />
      <TopScores />
      <News />
      <Footer />
    </>
  );
};

export default LandingPage;

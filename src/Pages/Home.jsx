import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import GiftsCombos from "../components/GiftsCombos";
import CuratedOffers from "../components/CuratedOffers";
import GiftBanner from "../components/GiftBanner";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <>
      <Hero />
      <ProductSection />
      <GiftsCombos />
      <CuratedOffers />
      <GiftBanner />
      <Newsletter />
    </>
  );
}

export default Home;
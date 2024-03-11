import ChefsCreation from "@/components/chefs-creation";
import CoffeeMenu from "@/components/coffee-menu";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import NewRecipie from "@/components/new-recipe";
import OpeningTiming from "@/components/opening-timing";
import WhyChooseUs from "@/components/why-choose-us";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <OpeningTiming />
      <WhyChooseUs />
      <CoffeeMenu />
      <NewRecipie />
      <ChefsCreation />
      <Footer />
    </main>
  );
}

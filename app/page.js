
import Nav from "../components/Nav";
import { Footer, Hero, PopularProducts, Services, SpecialOffer, SuperQuality } from "@/sections";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <Footer />
      {/* <Review /> */}
      {/* <Subscribe /> */}
    </div>
  )
}

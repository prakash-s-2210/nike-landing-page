
import Nav from "../components/Nav";
import { CustomerReviews, Footer, Hero, PopularProducts, Services, SpecialOffer, SuperQuality } from "@/sections";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Footer />
      {/* <Subscribe /> */}
    </div>
  )
}

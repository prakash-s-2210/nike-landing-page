
import Nav from "../components/Nav";
import { Footer, Hero, PopularProducts, Services, SuperQuality } from "@/sections";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <Footer />
      {/* <ShoePromotion /> */}
      {/* <Review /> */}
      {/* <Subscribe /> */}
    </div>
  )
}

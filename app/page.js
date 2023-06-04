/** TODO
 * Create an index.js file inside the components folder and import-export all the components from it

  ```javascript
  // components/index.js
  import Nav from "./Nav";
  import Collections from './Collections';
  import Footer from "./Footer";
  ...

  export {
    Nav,
    Collections,
    Footer
  }
  ```

  ```javascript
  // app/page.js
  import { Nav, Collections, Footer, ... } from "@/components";
  ```
 * 
 */


import Nav from "../components/Nav";
import Collections from '@/components/Collections';
import Footer from "@/components/Footer";
import PopularProducts from '@/components/PopularProducts';
import ProductDetail from '@/components/ProductDetail';
import Review from "@/components/Review";
import ShoePromotion from "@/components/ShoePromotion";
import Subscribe from "@/components/Subscribe";
import SupportSection from "@/components/SupportSection";

export default function Home() {
  return (
    <div>
      <Nav />
      <Collections />
      <PopularProducts />
      <ProductDetail />
      <SupportSection />
      <ShoePromotion />
      <Review />
      <Subscribe />
      <Footer />
    </div>
  )
}

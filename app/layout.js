/** TODO
 * Separate the external imports from the internal imports
 * 
 * ```javascript
 * import { Montserrat, Palanquin_Dark } from "next/font/google";
 * 
 * import "./globals.css";
 * ```
 */

import "./globals.css";
import { Montserrat, Palanquin_Dark } from "next/font/google";

const montserrat = Montserrat(
  {
    subsets: ["latin"],
    variable: '--font-Montserrat',
  }
);

const palanquinDark = Palanquin_Dark(
  {
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: '--font-palanquinDark',
  }
);

export const metadata = {
  title: "Shop the Best Shoes Online",
  description:
    "Shop a wide range of quality products online at Your E-commerce Website. Find the best deals on electronics, fashion, home goods, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${palanquinDark.variable}`}>
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}

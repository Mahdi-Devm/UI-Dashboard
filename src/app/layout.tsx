import { Poppins, Anton } from "next/font/google";
import "./globals.css";
export const metadata = {
  title: "3D Shoes Store",
  description: "Modern Nike shoe shop with GSAP animations",
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${anton.variable}`}>
      <body>
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}

import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-space"
});

export const metadata = {
  title: "Padel Group | Courts. Clubs. Community.",
  description: "Premium padel infrastructure in Georgia"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>
        {children}
      </body>
    </html>
  );
}

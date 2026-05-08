import "./globals.css";

export const metadata = {
  title: "Padel Group | Courts. Clubs. Community.",
  description: "Premium padel infrastructure in Georgia"
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}

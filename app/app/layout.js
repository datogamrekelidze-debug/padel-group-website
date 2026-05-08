import "./globals.css";

export const metadata = {
  title: "Padel Group | Courts. Clubs. Community.",
  description: "Padel Group creates premium padel infrastructure, clubs and communities in Georgia."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}

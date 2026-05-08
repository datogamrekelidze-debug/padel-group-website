export const metadata = {
  title: "Padel Group",
  description: "Premium Padel Infrastructure in Georgia",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>{children}</body>
    </html>
  );
}
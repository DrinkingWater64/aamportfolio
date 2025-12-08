import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "@/app/globals.css";

export const metadata = {
  icons: {
    icon: '/images/AAMlogo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

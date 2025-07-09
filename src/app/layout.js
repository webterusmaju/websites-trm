import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Malaysia Airport CABTAXI",
  description: "Your First-Class Airport Ride",
  icons: {
    icon: "/landing/Logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* ✅ Floating WhatsApp Button */}
        {/* <a
          href="https://wa.me/60109203011" // Ganti dengan nombor WhatsApp anda
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="28"
            height="28"
          >
            <path d="M20.52 3.48A11.85 11.85 0 0 0 12 0a11.84 11.84 0 0 0-10 18.25L0 24l5.88-1.94A11.84 11.84 0 0 0 12 24a11.92 11.92 0 0 0 8.45-3.48A11.83 11.83 0 0 0 24 12a11.85 11.85 0 0 0-3.48-8.52zM12 22a9.88 9.88 0 0 1-5.17-1.43l-.37-.22-3.49 1.15 1.14-3.4-.24-.36A9.89 9.89 0 0 1 2 12a10 10 0 1 1 10 10zm5.23-7.77c-.28-.14-1.64-.81-1.89-.9s-.44-.14-.63.14-.72.9-.88 1.09-.33.21-.61.07a8.15 8.15 0 0 1-2.4-1.48 9 9 0 0 1-1.65-2.05c-.17-.29 0-.44.13-.58s.29-.33.43-.5a1.93 1.93 0 0 0 .29-.44c.1-.15.1-.29 0-.43s-.63-1.5-.86-2.06-.45-.47-.63-.48-.33-.02-.52-.02a1 1 0 0 0-.7.33c-.24.24-.94.93-.94 2.27s.97 2.64 1.1 2.83 1.91 3 4.63 4.22c.65.28 1.15.45 1.54.58.65.21 1.24.18 1.7.11.52-.08 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.33-.07-.11-.26-.18-.54-.32z" />
          </svg>
        </a> */}
      </body>
    </html>
  );
}

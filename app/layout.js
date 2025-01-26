import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import CreateEventDrawer from "@/components/create-event";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TeamFinder",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
            {children}
          </main>
          <footer className="bg--100 py-12">
            <div className="container mx-auto px-4 text-center text-gray-600">
              <p>Made with 💗 by TeamFinder </p>
            </div>
          </footer>
          <CreateEventDrawer />
        </body>
      </html>
    </ClerkProvider>
  );
}

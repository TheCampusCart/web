import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Moon, ShoppingBag, Download, Smartphone } from "lucide-react";

export default function CampusCartLanding() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-[#0b0b0b] text-black dark:text-white transition-colors">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-xl font-bold">
            <ShoppingBag className="text-orange-500" />
            CampusCart
          </div>
          <Button variant="ghost" onClick={() => setDark(!dark)}>
            {dark ? <Sun /> : <Moon />}
          </Button>
        </nav>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Buy. Sell. Discover.
              <span className="text-orange-500"> Inside Your Campus</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              CampusCart is a campus-first marketplace — like OLX, but built
              exclusively for students. Fast deals, trusted peers, zero spam.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Smartphone className="mr-2" /> Play Store
              </Button>
              <Button className="bg-black text-white hover:bg-gray-900 dark:bg-white dark:text-black">
                <Smartphone className="mr-2" /> App Store
              </Button>
              <Button variant="outline" className="border-orange-500 text-orange-500">
                <Download className="mr-2" /> Direct APK
              </Button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <Card className="rounded-2xl shadow-xl">
              <CardContent className="p-6">
                <img
                  src="src/assets/bg.png"
                  alt="CampusCart App Preview"
                  className="rounded-xl"
                />
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Features */}
        <section className="bg-gray-50 dark:bg-[#111] py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {["Campus-only listings", "Instant chat & trust", "Flutter + Go backend"].map(
              (f, i) => (
                <Card key={i} className="rounded-2xl">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-orange-500">{f}</h3>
                    <p className="mt-3 text-gray-600 dark:text-gray-300">
                      Designed specifically for student needs — safe, fast and
                      distraction-free buying and selling.
                    </p>
                  </CardContent>
                </Card>
              )
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CampusCart · Built for campuses
        </footer>
      </div>
    </div>
  );
}

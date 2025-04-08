import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Landing from "@/components/Landing";
import Services from "@/components/services";
import WhyChoosingUs from "@/components/WhyChoosingUs";
import Contact from "@/components/contact";
import JoinTeam from "@/components/JoinTeam";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className={inter.className}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Landing />
          <WhyChoosingUs />
          <Services limit={6} />
          <JoinTeam />
          <Contact />
        </motion.div>
      </div>
    </Layout>
  );
}

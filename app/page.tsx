import { Navbar } from "@/components/component/navbar";
import Image from "next/image";
import Link from "next/link";
import HeroSectionGradientBackground from "@/components/component/hero";
import Price from "@/components/component/price";
import { Header } from "@/components/component/header";
import Footer from "@/components/component/footer";
import { Solution } from "@/components/component/solution";
import { Project } from "@/components/component/project";
import { Testimoni } from "@/components/component/testimoni";
import { Work } from "@/components/component/work";

export default function Home() {
  return (
    <div className="space-y-0">
      <Header />
      <Solution />
      <Work />
      <Project />
      <Price />

      <Testimoni />
      <Footer />
    </div>
  );
}

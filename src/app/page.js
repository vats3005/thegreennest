import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <ServicesSection />
      <WhyChooseUs />

    </>
  );
}

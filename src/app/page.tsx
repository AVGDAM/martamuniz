import { Metadata } from "next";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Marta Muñiz - Psicóloga en Santander | Duelo, Pareja y Terapia Online",
  description: "Psicóloga especializada en procesos de duelo, terapia de pareja, adicciones y trastorno de género. Sesiones presenciales en Santander y terapia online. +10 años de experiencia.",
  keywords: [
    "psicóloga Santander",
    "terapia online",
    "psicóloga duelo Santander",
    "terapia de pareja Santander",
    "psicóloga adicciones",
    "terapia género Santander",
    "psicóloga online España",
    "terapia duelo online",
    "ayuda psicológica Santander",
    "consulta psicología Cantabria"
  ],
  openGraph: {
    title: "Marta Muñiz - Psicóloga Especialista en Duelo y Pareja",
    description: "Terapia presencial en Santander y online. Especializada en duelo, pareja, adicciones y trastorno de género.",
    type: "website",
    locale: "es_ES",
    siteName: "Marta Muñiz Psicóloga",
  },
  alternates: {
    canonical: "https://martamg.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Specialties />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
}

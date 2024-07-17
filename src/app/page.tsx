import Image from "next/image";
import Hero from "@/componens/Hero";
import CaseStudies from "@/componens/CaseStudies";
import Collections from "@/componens/Collections";
import Featured from "@/componens/Featured";
import LearnMore from "@/componens/LearnMore";
import SocialShoutOut from "@/componens/SocialShoutOut";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <Collections />
      <CaseStudies />
      <LearnMore />
      <SocialShoutOut />
    </main>
  );
}

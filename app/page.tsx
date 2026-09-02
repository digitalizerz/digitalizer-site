import { Approach } from "@/components/home/Approach";
import { Capabilities } from "@/components/home/Capabilities";
import { Hero } from "@/components/home/Hero";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Approach />
      <Capabilities />
    </main>
  );
}

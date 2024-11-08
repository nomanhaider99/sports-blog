import Category from "@/components/widgets/Category";
import Hero from "@/components/widgets/Hero";
import Popular from "@/components/widgets/Popular";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <Popular />
    </>
  );
}

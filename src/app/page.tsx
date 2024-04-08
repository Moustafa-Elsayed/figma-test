import Header from "@/components/header/Header";
import Person from "@/components/person/Person";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 min-h-screen bg-[#F6F4F5]  ">
      <Header />
      <Person />
    </main>
  );
}

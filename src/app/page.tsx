import Header from "@/components/header/Header";
import Profile from "@/components/profile/Profile";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 min-h-screen bg-[#F6F4F5]  ">
      <Header />
      <Profile />
    </main>
  );
}

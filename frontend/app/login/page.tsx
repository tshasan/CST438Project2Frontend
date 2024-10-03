"use client";

import DebugRoute from "@/components/common/debugroute";
import LoginPage from "@/components/pages/loginPage";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function Home() {
  return (
    <div>
      <Header/>
      <LoginPage/>
      <Footer/>
      <DebugRoute />
    </div>
  );
}

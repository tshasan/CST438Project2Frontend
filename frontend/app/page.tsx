import React from 'react';
import DebugRoute from "@/components/common/debugroute"; 
import LandingPage from "@/components/pages/landingpage";
import { Header }  from "@/components/common/header";
import { Footer } from "@/components/common/footer"; 

export default function Home() {
  return (
    <div>
      <Header/>
      <LandingPage />
      <DebugRoute /> 
      <Footer />
    </div>
  );
}

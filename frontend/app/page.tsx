import DebugRoute from "@/components/debugroute";
import LandingPage from "@/components/landingpage";
import { Header }  from "@/components/header";
import { Footer } from "@/components/footer"; 

export default function Home() {
  return (
    <div>
      <Header/>
      <LandingPage />
      <Footer />
      <DebugRoute /> {/* this is the component i made to test out routing */}
    </div>
  );
}

import DebugRoute from "@/components/common/debugroute";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";

export default function Home() {
  return (
    <div>
      <Header/>
      <DebugRoute />
      <Footer/>
    </div>
  );
}

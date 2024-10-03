import { Footer } from "@/components/common/footer";
import SignupPage from "@/components/pages/SignupPage";
import { Header } from "@/components/common/header";
import DebugRoute from "@/components/common/debugroute";

export default function Home() {
  return (
    <div>
      <header/>
      <Header/>
      <SignupPage/>
      <Footer />
      <DebugRoute/>
    </div>
  );
}

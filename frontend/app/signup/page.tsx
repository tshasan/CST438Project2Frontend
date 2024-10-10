import { Footer } from "@/components/common/footer";
import SignupPage from "@/components/pages/signupPage";
import { Header } from "@/components/common/header";
import DebugRoute from "@/components/common/debugroute";

export default function Home() {
  return (
    <div>
      <header/>
      <Header/>
      <SignupPage/>
      <DebugRoute/>
      <Footer />
    </div>
  );
}

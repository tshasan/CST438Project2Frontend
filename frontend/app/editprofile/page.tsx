import DebugRoute from "@/components/common/debugroute";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import EditProfile from "@/components/pages/editProfile";

export default function Home() {
  return (
    <div>
      <Header />
      <EditProfile />
      <DebugRoute />
      <Footer />
    </div>
  );
}

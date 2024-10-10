import DebugRoute from "@/components/common/debugroute";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import EditProfile from "@/components/pages/editProfile";
import { Edit } from "@/node_modules/lucide-react/dist/lucide-react";

export default function Home() {
  return (
    <div>
      <Header/>
      <EditProfile/>
      <DebugRoute />
      <Footer/>
    </div>
  );
}

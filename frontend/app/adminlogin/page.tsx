import DebugRoute from "@/components/common/debugroute";
import AdminLoginPage from "@/components/pages/adminLoginPage";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function Home() {
    return (
        <div>
            <Header />
            <AdminLoginPage />
            <Footer />
            <DebugRoute />
        </div>
    );
}

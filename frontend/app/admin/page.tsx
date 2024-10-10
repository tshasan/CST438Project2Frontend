"use client";

import DebugRoute from "@/components/common/debugroute";
import AdminPage from "@/components/pages/adminPage";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function Home() {
    return (
        <div>
            <Header />
            <AdminPage />
            <Footer />
            <DebugRoute />
        </div>
    );
}

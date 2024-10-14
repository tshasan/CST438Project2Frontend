"use client";

import DebugRoute from "@/components/common/debugroute";
import EditItemsPage from "@/components/pages/edititempage";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function Items() {

  return (
    <div>
      <Header />
      <EditItemsPage />
      <Footer />
      <DebugRoute />
    </div>
  );
}

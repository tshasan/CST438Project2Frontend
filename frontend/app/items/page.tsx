"use client";

import DebugRoute from "@/components/common/debugroute";
import ItemsPage from "@/components/pages/itemspage";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";

export default function Items() {

  return (
    <div>
      <Header />
      <ItemsPage />
      <Footer />
      <DebugRoute />
    </div>
  );
}

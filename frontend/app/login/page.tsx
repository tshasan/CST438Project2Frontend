"use client";

import DebugRoute from "@/components/common/debugroute";
import LoginPage from "@/components/pages/loginPage";

export default function Home() {
  return (
    <div>
      <header/>
      <LoginPage/>
      <DebugRoute />
    </div>
  );
}

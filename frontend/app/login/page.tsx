"use client";

import DebugRoute from "@/components/common/debugroute";
import LoginPage from "@/components/pages/loginpage";

export default function Home() {
  return (
    <div>
      <header/>
      <LoginPage/>
      <DebugRoute />
    </div>
  );
}

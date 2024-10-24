"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import DebugRoute from "@/components/common/debugroute";
import ItemsPage from "@/components/pages/itemspage";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Button } from "@/components/ui/button";

export default function Items() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg text-gray-700 mb-4">Loading...</p>
        <Link href="/" passHref>
          <Button className="btn-primary">Go to Home</Button>
        </Link>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-lg text-gray-700 mb-4">Please log in to access your wishlists.</p>
        <Link href="/" passHref>
          <Button className="btn-primary mb-2">Go to Home</Button>
        </Link>
        <Link href="/login" passHref>
          <Button variant="outline" className="btn-secondary">Go to Login</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <ItemsPage session={session} />
      </div>
      <Footer />
      <DebugRoute />
    </div>
  );
}

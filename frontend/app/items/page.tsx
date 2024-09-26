// For Next.js 13 App Router: app/items/page.js
// For Next.js 12 Pages Router: pages/items/index.js

"use client"; // Only needed if using Next.js 13 App Router and client-side hooks

import { useRouter } from "next/navigation"; // Next.js 13 App Router
// For Next.js 12 Pages Router, use: import { useRouter } from "next/router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DebugRoute from "@/components/debugroute";

export default function ItemsPage() {
  const router = useRouter();
  const [itemId, setItemId] = useState("");

  const handleEditItem = () => {
    if (itemId.trim()) { // this removes white spaces 
      router.push(`/items/${itemId}/edit`);
    }
  };

  return (
    <div>
      <h1>Items Page</h1>
      {/* Placeholder to make sure routing is working */}
      <DebugRoute />
      <div >
        <input
          type="text"
          placeholder="Enter Item ID"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
        <Button onClick={handleEditItem}>Go to Edit Item</Button>
      </div>
    </div>
  );
}

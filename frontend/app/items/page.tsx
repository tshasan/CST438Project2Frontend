"use client"; 

import { useRouter } from "next/navigation"; 
import { useState } from "react";
import { Button } from "@/components/ui/button";
import DebugRoute from "@/components/common/debugroute";

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

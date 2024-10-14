"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Item from "@/components/common/item";

type ItemType = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price?: string;
    quantity?: string;
};

const placeholderItems: ItemType[] = [
    { id: "1", name: "Wireless Earbuds", description: "High-quality sound and noise cancellation.", imageUrl: "https://via.placeholder.com/300?text=Wireless+Earbuds" },
    { id: "2", name: "Smartphone Stand", description: "Convenient stand for your smartphone.", imageUrl: "https://via.placeholder.com/300?text=Smartphone+Stand" },
    { id: "3", name: "Bluetooth Speaker", description: "Portable speaker with amazing sound quality.", imageUrl: "https://via.placeholder.com/300?text=Bluetooth+Speaker" },
];

export default function ItemsPage() {
    const router = useRouter();
    const [items, setItems] = useState<ItemType[]>(placeholderItems);

    const handleEditItem = (itemId: string) => {
        router.push(`/items/${itemId}/edit`);
    };

    const handleAddItem = () => {
        const newItem: ItemType = {
            id: (items.length + 1).toString(),
            name: "New Item",
            description: "Description of the new item.",
            imageUrl: "https://via.placeholder.com/300?text=New+Item",
            price: "20",
            quantity: "1"
        };
        setItems([...items, newItem]);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-4">Items</h1>
            <div className="flex justify-center">
                <button onClick={handleAddItem} className="px-4 py-2 bg-blue-500 text-white rounded">Add New Item</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {items.map((item) => (
                    <Item key={item.id} item={item} onEdit={() => handleEditItem(item.id)} />
                ))}
            </div>
        </div>
    );
}

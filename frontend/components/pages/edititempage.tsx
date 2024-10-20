"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

type ItemType = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    price?: string;
    quantity?: string;
    priority?: string;
};

const placeholderItems: ItemType[] = [
    { id: "1", name: "Wireless Earbuds", description: "High-quality sound and noise cancellation.", imageUrl: "https://via.placeholder.com/300?text=Wireless+Earbuds" },
    { id: "2", name: "Smartphone Stand", description: "Convenient stand for your smartphone.", imageUrl: "https://via.placeholder.com/300?text=Smartphone+Stand" },
    { id: "3", name: "Bluetooth Speaker", description: "Portable speaker with amazing sound quality.", imageUrl: "https://via.placeholder.com/300?text=Bluetooth+Speaker" },
];

export default function EditItemPage() {
    const router = useRouter();
    const { id } = useParams();
    const [item, setItem] = useState<ItemType | undefined>();

    useEffect(() => {
        const foundItem = placeholderItems.find((item) => item.id === id);
        setItem(foundItem);
    }, [id]);

    const handleSave = () => {
        alert(`Item saved: ${item?.name}`);
        router.push("/items");
    };

    if (!item) return <div>Loading...</div>;

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Edit Item</h2>
            <div className="mb-4">
                <label className="block font-semibold mb-1">Name</label>
                <input
                    type="text"
                    value={item.name}
                    onChange={(e) => setItem({ ...item, name: e.target.value })}
                    className="w-full border rounded px-2 py-1"
                />
            </div>
            <div className="mb-4">
                <label className="block font-semibold mb-1">Description</label>
                <textarea
                    value={item.description}
                    onChange={(e) => setItem({ ...item, description: e.target.value })}
                    className="w-full border rounded px-2 py-1"
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block font-semibold mb-1">Image URL</label>
                <input
                    type="text"
                    value={item.imageUrl}
                    onChange={(e) => setItem({ ...item, imageUrl: e.target.value })}
                    className="w-full border rounded px-2 py-1"
                />
            </div>
            <div className="mb-4">
                <label className="block font-semibold mb-1">Priority</label>
                <select
                    value={item.priority || ""}
                    onChange={(e) => setItem({ ...item, priority: e.target.value })}
                    className="w-full border rounded px-2 py-1"
                >
                    <option value="">Select priority</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>
            <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded">
                Save Changes
            </button>
        </div>
    );
}

"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Item from "@/components/common/item";
import { Card, CardHeader, CardDescription, CardFooter } from "@/components/ui/card";

interface ItemType {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

interface WishlistType {
    id: string;
    name: string;
    items: ItemType[];
}

export default function ItemsPage() {
    const [wishlists, setWishlists] = useState<WishlistType[]>([]);
    const [activeWishlistId, setActiveWishlistId] = useState<string | null>(null);
    const [newItem, setNewItem] = useState({
        name: '',
        description: '',
        imageUrl: '',
    });
    const [newWishlistName, setNewWishlistName] = useState('');

    const activeWishlist = wishlists.find(wishlist => wishlist.id === activeWishlistId);

    const handleAddItem = () => {
        if (!activeWishlist) return;

        const newItemWithId = { ...newItem, id: Math.random().toString(36).substring(2, 11) };
        const updatedWishlists = wishlists.map(wishlist =>
            wishlist.id === activeWishlistId
                ? { ...wishlist, items: [...wishlist.items, newItemWithId] }
                : wishlist
        );
        setWishlists(updatedWishlists);
        setNewItem({ name: '', description: '', imageUrl: '' });
    };

    const handleEditItem = (id: string) => {
        const itemToEdit = activeWishlist?.items.find(item => item.id === id);
        if (itemToEdit) {
            console.log("Editing item", itemToEdit); // Placeholder for edit logic
        }
    };

    const handleDeleteItem = (id: string) => {
        if (!activeWishlist) return;

        const updatedWishlists = wishlists.map(wishlist =>
            wishlist.id === activeWishlistId
                ? { ...wishlist, items: wishlist.items.filter(item => item.id !== id) }
                : wishlist
        );
        setWishlists(updatedWishlists);
    };

    const handleCreateWishlist = () => {
        const newWishlist = {
            id: Math.random().toString(36).substring(2, 11),
            name: newWishlistName,
            items: [],
        };
        setWishlists([...wishlists, newWishlist]);
        setNewWishlistName('');
        setActiveWishlistId(newWishlist.id); // Automatically switch to the new wishlist
    };

    const handleSwitchWishlist = (id: string) => {
        setActiveWishlistId(id);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Wishlists</h1>

            {/* Form to Create New Wishlist */}
            <Card className="mb-6 p-4">
                <CardHeader>
                    <h2 className="text-lg font-semibold mb-4">Create New Wishlist</h2>
                </CardHeader>
                <CardDescription>
                    <Input
                        placeholder="Wishlist Name"
                        value={newWishlistName}
                        onChange={(e) => setNewWishlistName(e.target.value)}
                        className="mb-2"
                    />
                </CardDescription>
                <CardFooter>
                    <Button onClick={handleCreateWishlist} className="w-full">
                        Create Wishlist
                    </Button>
                </CardFooter>
            </Card>

            {/* Display and Switch Between Wishlists */}
            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Switch Wishlist</h2>
                {wishlists.map((wishlist) => (
                    <Button
                        key={wishlist.id}
                        onClick={() => handleSwitchWishlist(wishlist.id)}
                        className={`mr-2 ${activeWishlistId === wishlist.id ? 'bg-blue-500' : 'bg-gray-200'}`}
                    >
                        {wishlist.name}
                    </Button>
                ))}
            </div>

            {/* Form to Add New Item to the Active Wishlist */}
            {activeWishlist && (
                <>
                    <Card className="mb-6 p-4">
                        <CardHeader>
                            <h2 className="text-lg font-semibold mb-4">Add New Item to {activeWishlist.name}</h2>
                        </CardHeader>
                        <CardDescription>
                            <Input
                                placeholder="Item Name"
                                value={newItem.name}
                                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                className="mb-2"
                            />
                            <Input
                                placeholder="Item Description"
                                value={newItem.description}
                                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                                className="mb-2"
                            />
                            <Input
                                placeholder="Image URL"
                                value={newItem.imageUrl}
                                onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
                                className="mb-2"
                            />
                        </CardDescription>
                        <CardFooter>
                            <Button onClick={handleAddItem} className="w-full">
                                Add Item
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Display Items of Active Wishlist */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {activeWishlist.items.map((item) => (
                            <Item key={item.id} item={item} onEdit={handleEditItem} onDelete={handleDeleteItem} />
                        ))}
                    </div>
                </>
            )}

            {!activeWishlist && (
                <p>Please create or select a wishlist to view and add items.</p>
            )}
        </div>
    );
}

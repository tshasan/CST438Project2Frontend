"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Item from "@/components/common/item";
import { Card, CardHeader, CardDescription, CardFooter } from "@/components/ui/card";

import { createItem, createWishlist, deleteItem, updateItem } from "@/lib/api";
import { Session } from 'inspector/promises';

interface ItemType {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    wishlistId: string;
}


interface WishlistType {
    id: string;
    name: string;
    items: ItemType[];
    userId: string;
}

interface ItemsPageProps {
    session: Session;
}

export default function ItemsPage({ session }: ItemsPageProps) {
    const [wishlists, setWishlists] = useState<WishlistType[]>([]);
    const [activeWishlistId, setActiveWishlistId] = useState<string | null>(null);
    const [newItem, setNewItem] = useState({
        name: '',
        description: '',
        imageUrl: '',
    });
    const [newWishlistName, setNewWishlistName] = useState('');

    const activeWishlist = wishlists.find(wishlist => wishlist.id === activeWishlistId);

    const handleAddItem = async () => {
        if (!activeWishlist || !activeWishlistId) return;

        const newItemWithId = { ...newItem, id: Math.random().toString(36).substring(2, 11) };

        try {
            // Call your API to create an item
            await createItem(newItemWithId, { id: activeWishlistId, name: activeWishlist.name, userId: session.user.id }, session.user);

            const updatedWishlists = wishlists.map(wishlist =>
                wishlist.id === activeWishlistId
                    ? { ...wishlist, items: [...wishlist.items, newItemWithId] }
                    : wishlist
            );
            setWishlists(updatedWishlists);
            setNewItem({ name: '', description: '', imageUrl: '' });
        } catch (error) {
            console.error("Failed to add item:", error);
        }
    };


    const handleDeleteItem = async (id: string) => {
        if (!activeWishlist) return;

        try {
            // Call your API to delete the item
            await deleteItem({ id, name: '', description: '', imageUrl: '', wishlistId: activeWishlistId }, activeWishlist, session.user);

            const updatedWishlists = wishlists.map(wishlist =>
                wishlist.id === activeWishlistId
                    ? { ...wishlist, items: wishlist.items.filter(item => item.id !== id) }
                    : wishlist
            );
            setWishlists(updatedWishlists);
        } catch (error) {
            console.error("Failed to delete item:", error);
        }
    };


    const handleEditItem = async (id: string) => {
        const itemToEdit = activeWishlist?.items.find(item => item.id === id);
        if (itemToEdit) {
            try {
                // Call your API to update the item
                await updateItem(itemToEdit, { id: activeWishlistId, name: activeWishlist.name, userId: session.user.id }, session.user);
                console.log("Item updated");
            } catch (error) {
                console.error("Failed to update item:", error);
            }
        }
    };

    const handleDeleteWishlist = async (id: string) => {
        // Placeholder for API call to delete a wishlist
        try {
            // await apiDeleteWishlist(id);
            const updatedWishlists = wishlists.filter(wishlist => wishlist.id !== id);
            setWishlists(updatedWishlists);
            if (id === activeWishlistId) setActiveWishlistId(null); // Clear active wishlist if deleted
        } catch (error) {
            console.error("Failed to delete wishlist:", error);
        }
    };

    const handleCreateWishlist = async () => {
        const newWishlist = {
            id: Math.random().toString(36).substring(2, 11),
            name: newWishlistName,
            items: [],
            userId: session.user.id,
        };

        try {
            // Call your API to create a wishlist
            await createWishlist(newWishlist, session.user);
            setWishlists([...wishlists, newWishlist]);
            setNewWishlistName('');
            setActiveWishlistId(newWishlist.id);
        } catch (error) {
            console.error("Failed to create wishlist:", error);
        }
    };

    const handleSwitchWishlist = (id: string) => {
        setActiveWishlistId(id);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Wishlists</h1>

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

            <div className="mb-6">
                <h2 className="text-lg font-semibold mb-4">Switch Wishlist</h2>
                {wishlists.map((wishlist) => (
                    <div key={wishlist.id} className="flex items-center space-x-2">
                        <Button
                            onClick={() => handleSwitchWishlist(wishlist.id)}
                            className={`mr-2 ${activeWishlistId === wishlist.id ? 'bg-blue-500' : 'bg-gray-200'}`}
                        >
                            {wishlist.name}
                        </Button>
                        <Button
                            onClick={() => handleDeleteWishlist(wishlist.id)}
                            className="bg-red-500 text-white"
                        >
                            Delete
                        </Button>
                    </div>
                ))}
            </div>

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

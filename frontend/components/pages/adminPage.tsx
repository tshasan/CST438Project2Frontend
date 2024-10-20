import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

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

interface UserType {
    id: string;
    username: string;
    wishlists: WishlistType[];
}

const AdminPage: React.FC = () => {
    const [users, setUsers] = useState<UserType[]>([
        // Sample data (replace with actual API data)
        {
            id: 'user1',
            username: 'User 1',
            wishlists: [
                {
                    id: 'wishlist1',
                    name: 'Birthday Wishlist',
                    items: [
                        { id: 'item1', name: 'Item 1', description: 'Description 1', imageUrl: '' },
                    ],
                },
            ],
        },
        {
            id: 'user2',
            username: 'User 2',
            wishlists: [],
        },
    ]);
    const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
    const [editWishlist, setEditWishlist] = useState<WishlistType | null>(null);
    const [deleteWishlistId, setDeleteWishlistId] = useState<string | null>(null);
    const [deleteItemId, setDeleteItemId] = useState<string | null>(null);
    const [newItem, setNewItem] = useState<ItemType>({ id: '', name: '', description: '', imageUrl: '' });
    const [newWishlistName, setNewWishlistName] = useState('');

    const selectedUser = users.find((user) => user.id === selectedUserId);

    // Handle user selection
    const handleSelectUser = (userId: string) => {
        setSelectedUserId(userId);
        setEditWishlist(null); // Reset any previous wishlist selection
    };

    // Handle creating a new wishlist for the selected user
    const handleCreateWishlist = () => {
        if (!selectedUser) return;
        const newWishlist = {
            id: Math.random().toString(36).substring(2, 11),
            name: newWishlistName,
            items: [],
        };
        const updatedUsers = users.map((user) =>
            user.id === selectedUser.id ? { ...user, wishlists: [...user.wishlists, newWishlist] } : user
        );
        setUsers(updatedUsers);
        setNewWishlistName('');
    };

    // Handle adding a new item to a wishlist
    const handleAddItem = (wishlistId: string) => {
        if (!selectedUser) return;
        const newItemWithId = { ...newItem, id: Math.random().toString(36).substring(2, 11) };
        const updatedUsers = users.map((user) =>
            user.id === selectedUser.id
                ? {
                    ...user,
                    wishlists: user.wishlists.map((wishlist) =>
                        wishlist.id === wishlistId
                            ? { ...wishlist, items: [...wishlist.items, newItemWithId] }
                            : wishlist
                    ),
                }
                : user
        );
        setUsers(updatedUsers);
        setNewItem({ id: '', name: '', description: '', imageUrl: '' });
    };

    // Handle deleting a wishlist
    const handleDeleteWishlist = () => {
        if (!selectedUser) return;
        const updatedUsers = users.map((user) =>
            user.id === selectedUser.id
                ? { ...user, wishlists: user.wishlists.filter((wishlist) => wishlist.id !== deleteWishlistId) }
                : user
        );
        setUsers(updatedUsers);
        setDeleteWishlistId(null);
    };

    // Handle deleting an item from a wishlist
    const handleDeleteItem = (wishlistId: string) => {
        if (!selectedUser) return;
        const updatedUsers = users.map((user) =>
            user.id === selectedUser.id
                ? {
                    ...user,
                    wishlists: user.wishlists.map((wishlist) =>
                        wishlist.id === wishlistId
                            ? {
                                ...wishlist,
                                items: wishlist.items.filter((item) => item.id !== deleteItemId),
                            }
                            : wishlist
                    ),
                }
                : user
        );
        setUsers(updatedUsers);
        setDeleteItemId(null);
    };

    return (
        <div className="flex flex-col items-center p-6 space-y-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>

            {/* User Selection */}
            <section className="w-full max-w-md mb-6">
                <h2 className="text-2xl font-semibold text-center mb-4">Select a User</h2>
                {users.map((user) => (
                    <Button
                        key={user.id}
                        onClick={() => handleSelectUser(user.id)}
                        className={`w-full mb-2 ${selectedUserId === user.id ? 'bg-blue-500' : 'bg-gray-200'}`}
                    >
                        {user.username}
                    </Button>
                ))}
            </section>

            {/* Wishlists for Selected User */}
            {selectedUser && (
                <>
                    <section className="w-full max-w-2xl mb-6">
                        <h2 className="text-2xl font-semibold text-center mb-4">
                            {selectedUser.username}s Wishlists
                        </h2>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Wishlist Name</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {selectedUser.wishlists.map((wishlist) => (
                                    <TableRow key={wishlist.id}>
                                        <TableCell>{wishlist.name}</TableCell>
                                        <TableCell>
                                            <div className="flex justify-center space-x-2">
                                                <Button
                                                    variant="secondary"
                                                    onClick={() => setEditWishlist(wishlist)}
                                                >
                                                    View/Edit
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    onClick={() => setDeleteWishlistId(wishlist.id)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </section>

                    {/* Create New Wishlist for Selected User */}
                    <section className="w-full max-w-md">
                        <h2 className="text-2xl font-semibold text-center mb-4">Create New Wishlist</h2>
                        <Input
                            placeholder="Wishlist Name"
                            value={newWishlistName}
                            onChange={(e) => setNewWishlistName(e.target.value)}
                            className="mb-2"
                        />
                        <Button onClick={handleCreateWishlist} className="w-full">
                            Create Wishlist
                        </Button>
                    </section>
                </>
            )}

            {/* Edit Wishlist and Manage Items */}
            {editWishlist && (
                <section className="w-full max-w-2xl">
                    <h2 className="text-2xl font-semibold text-center mb-4">
                        {editWishlist.name} - Items
                    </h2>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Item Name</TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {editWishlist.items.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.description}</TableCell>
                                    <TableCell>
                                        <div className="flex justify-center space-x-2">

                                            <Button
                                                variant="destructive"
                                                onClick={() => setDeleteItemId(item.id)}
                                            >
                                                Delete
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* Add New Item to Wishlist */}
                    <section className="mt-4">
                        <h2 className="text-xl font-semibold">Add New Item</h2>
                        <form
                            className="space-y-4 mt-2"
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleAddItem(editWishlist.id);
                            }}
                        >
                            <div>
                                <Label htmlFor="item-name">Item Name</Label>
                                <Input
                                    id="item-name"
                                    value={newItem.name}
                                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="item-description">Item Description</Label>
                                <Input
                                    id="item-description"
                                    value={newItem.description}
                                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="item-image">Image URL</Label>
                                <Input
                                    id="item-image"
                                    value={newItem.imageUrl}
                                    onChange={(e) => setNewItem({ ...newItem, imageUrl: e.target.value })}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Add Item
                            </Button>
                        </form>
                    </section>
                </section>
            )}

            {/* Delete Confirmation Dialogs */}
            {deleteWishlistId && (
                <Dialog open={Boolean(deleteWishlistId)} onOpenChange={() => setDeleteWishlistId(null)}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Confirm Delete</DialogTitle>
                            <DialogDescription>
                                Are you sure you want to delete this wishlist? This action cannot be undone.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="secondary" onClick={() => setDeleteWishlistId(null)}>
                                Cancel
                            </Button>
                            <Button variant="destructive" onClick={handleDeleteWishlist}>
                                Delete
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}

            {deleteItemId && (
                <Dialog open={Boolean(deleteItemId)} onOpenChange={() => setDeleteItemId(null)}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Confirm Delete</DialogTitle>
                            <DialogDescription>
                                Are you sure you want to delete this item? This action cannot be undone.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button variant="secondary" onClick={() => setDeleteItemId(null)}>
                                Cancel
                            </Button>
                            <Button
                                variant="destructive"
                                onClick={() => handleDeleteItem(editWishlist?.id || '')}
                            >
                                Delete
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default AdminPage;

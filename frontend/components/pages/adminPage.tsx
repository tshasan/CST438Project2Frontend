import React from 'react';
import { useUsers } from '@/hooks/useUsers'; // Custom hook
import {
    Table,
    TableBody,
    TableCaption,
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

const AdminPage: React.FC = () => {
    const {
        users,
        newUser,
        setNewUser,
        editUser,
        setEditUser,
        isDeleteDialogOpen,
        userToDelete,
        handleCreateUser,
        handleEditUser,
        handleDeleteUser,
        openEditDialog,
        closeEditDialog,
        openDeleteDialog,
        closeDeleteDialog,
    } = useUsers();

    return (
        <div className="p-6">
            <h1 className="mb-4 text-3xl font-bold">Admin Dashboard</h1>

            {/* Create New User Form */}
            <section className="mb-8">
                <h2 className="mb-2 text-2xl font-semibold">Create New User</h2>
                <form className="space-y-4" onSubmit={handleCreateUser}>
                    <div>
                        <Label htmlFor="new-username">Username</Label>
                        <Input
                            id="new-username"
                            value={newUser.username}
                            onChange={(e) =>
                                setNewUser({ ...newUser, username: e.target.value })
                            }
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="new-password">Password</Label>
                        <Input
                            id="new-password"
                            type="password"
                            value={newUser.password}
                            onChange={(e) =>
                                setNewUser({ ...newUser, password: e.target.value })
                            }
                            required
                        />
                    </div>
                    <Button type="submit">Create User</Button>
                </form>
            </section>

            {/* User List */}
            <section>
                <h2 className="mb-2 text-2xl font-semibold">User List</h2>
                <Table>
                    <TableCaption>A list of all users.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Username</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.username}>
                                <TableCell>{user.username}</TableCell>
                                <TableCell>
                                    <div className="flex space-x-2">
                                        <Button
                                            variant="secondary"
                                            onClick={() => openEditDialog(user)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            onClick={() => openDeleteDialog(user)}
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

            {/* Edit User Dialog */}
            {editUser && (
                <Dialog open={Boolean(editUser)} onOpenChange={closeEditDialog}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Edit User</DialogTitle>
                        </DialogHeader>
                        <form className="space-y-4" onSubmit={handleEditUser}>
                            <div>
                                <Label htmlFor="edit-username">Username</Label>
                                <Input
                                    id="edit-username"
                                    value={editUser.username}
                                    onChange={(e) =>
                                        setEditUser({ ...editUser, username: e.target.value })
                                    }
                                />
                            </div>
                            {/* Include other fields as needed */}
                            <DialogFooter>
                                <Button variant="secondary" onClick={closeEditDialog}>
                                    Cancel
                                </Button>
                                <Button type="submit">Update User</Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            )}

            {/* Delete Confirmation Dialog */}
            <Dialog open={isDeleteDialogOpen} onOpenChange={closeDeleteDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirm Delete</DialogTitle>
                        <DialogDescription>
                            Are you sure you want to delete user &quot;
                            {userToDelete?.username}&quot;? This action cannot be undone.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="secondary" onClick={closeDeleteDialog}>
                            Cancel
                        </Button>
                        <Button variant="destructive" onClick={handleDeleteUser}>
                            Delete
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default AdminPage;

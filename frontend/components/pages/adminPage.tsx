import React from 'react';
import { useUsers } from '@/hooks/useUsers';
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
        <div className="flex flex-col items-center p-6 space-y-8">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>

            {/* Create New User Form */}
            <section className="w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Create New User</h2>
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
                    <Button type="submit" className="w-full">Create User</Button>
                </form>
            </section>

            {/* User List */}
            <section className="w-full max-w-2xl">
                <h2 className="text-2xl font-semibold text-center mb-4">User List</h2>
                <Table>
                    <TableCaption className="text-center">A list of all users.</TableCaption>
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
                                    <div className="flex justify-center space-x-2">
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

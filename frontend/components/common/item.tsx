"use client";

import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Card, CardHeader, CardDescription, CardFooter } from "@/components/ui/card";

interface ItemType {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
}

interface ItemProps {
    item: ItemType;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Item({ item, onEdit, onDelete }: ItemProps) {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`/items/${item.id}/edit`);
    };

    const handleDelete = () => {
        onDelete(item.id);
    };

    return (
        <Card className="shadow-md">
            <CardHeader>
                <Image src={item.imageUrl} alt={item.name} width={500} height={192} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardDescription>
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
            </CardDescription>
            <CardFooter className="flex justify-between">
                <Button onClick={handleEdit} className="w-1/2 mr-2">
                    Edit
                </Button>
                <Button onClick={handleDelete} className="w-1/2 bg-red-500">
                    Delete
                </Button>
            </CardFooter>
        </Card>
    );
}

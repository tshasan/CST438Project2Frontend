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
}

export default function Item({ item }: ItemProps) {
    const router = useRouter();

    const handleEdit = () => {
        router.push(`/items/${item.id}/edit`);
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
            <CardFooter>
                <Button onClick={handleEdit} className="w-full">
                    Edit
                </Button>
            </CardFooter>
        </Card>
    );
}

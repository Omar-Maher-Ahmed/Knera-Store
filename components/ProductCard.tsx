
import Link from "next/link";

type Props = {
    id: number;
    name: string;
    image: string;
};

export default function ProductCard({ id, name, image }: Props) {
    return (
        <div className="border p-4 rounded-lg overflow-hidden hover:shadow transition">
            <img
                src={image}
                alt={name}
                className="h-40 w-full object-cover mb-3 rounded"
            />

            <h3 className="font-semibold">{name}</h3>

            <p className="text-sm text-gray-500">
                Contact for price
            </p>

            <Link
                href={`/product/${id}`}
                className="text-sm underline mt-2 inline-block"
            >
                View details
            </Link>
        </div>
    );
}

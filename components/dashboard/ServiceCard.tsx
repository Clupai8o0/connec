import Link from "next/link";
import { Star } from "lucide-react";

const ServiceCard = () => {
	return (
		<Link
			href="/service/123"
			className="block rounded-lg p-4 shadow-sm shadow-indigo-100 max-w-sm"
		>
			<img
				alt="Home"
				src="/security.jpg"
				className="h-56 w-full rounded-md object-cover"
			/>

			<div className="mt-2">
				<dl>
					<div>
						<dt className="sr-only">Service</dt>

						<dd className="text-sm text-gray-500">Security Guard</dd>
					</div>

					<div>
						<dt className="sr-only">Description</dt>

						<dd className="font-medium truncate">
							I will stand as a security guard for your events and venues
							whenever necessary
						</dd>
					</div>

					<div className="flex justify-between text-lg">
						<div>
							<dt className="sr-only">Pricing</dt>

							<dd className="font-bold">From: $40</dd>
						</div>
						<div>
							<dt className="sr-only">Rating</dt>

							<dd className="font-medium flex gap-1">
								<Star /> 5.0
							</dd>
						</div>
					</div>
				</dl>
			</div>
		</Link>
	);
};

export default ServiceCard;

import { Package } from "@/types";

import Markdown from "./Markdown";
import { Button } from "../ui/button";

// package: {
// 				price: {
// 					general: "$25",
// 					vip: "$60",
// 				},
// 				desc: "The Bahrain International Jazz Festival invites all music enthusiasts to join in and immerse themselves in an evening filled with the soulful harmonies and captivating rhythms of jazz, promising an unforgettable experience in the heart of Bahrain's cultural tapestry.",
// 				duration: "6 hours",
// 				date: "15 April, 2023",
// 				time: "5:00 P.M. to 11:00 P.M."
// 			},

const PackageEvent = ({
	price: { general, vip },
	desc,
	duration,
	date,
	time,
}: any) => {
	return (
		<div className="rounded-xl bg-gray-100 sticky top-6 p-6">
			{/* <h1 className="subsubheading">{title}</h1> */}
			{/* <div className="mt-4"></div> */}
			<h2 className="sr-only">Price</h2>
			<p className="subheading">
				<span className="font-bold">General Ticket:</span> {general}
			</p>
			<p className="subheading">
				<span className="font-bold">VIP Ticket:</span> {vip}
			</p>
			<Markdown content={desc} />
			<div className="mt-4"></div>
			<p>Date: {date}</p>
			<p>Time: {time}</p>
			<p>Duration: {duration}</p>

			<div className="flex gap-x-2 mt-4">
				<Button className="w-1/2">Reserve a Spot</Button>
				<Button className="w-1/2 border-gray-300" variant="outline">
					Contact Us
				</Button>
			</div>
		</div>
	);
};

export default PackageEvent;

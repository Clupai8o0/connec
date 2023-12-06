"use client";

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { generateKey } from "@/lib/api";
import { Search, Star } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const VENUES = [
	{
		name: "Golden Palace Hotel",
		desc: "A luxurious hotel with modern amenities and scenic views. Ideal for events, conferences, and accommodation.",
		services: [
			"Free WiFi",
			"Event Planning Assistance",
			"Catering Services",
			"Spa and Wellness Facilities",
			"Concierge Service",
			"Airport Shuttle",
			"Room Service",
			"Fitness Center",
			"Business Center",
			"Valet Parking",
			"Laundry and Dry Cleaning",
			"Limo/Town Car Service",
		],
		price: {
			amount: 300,
			currency: "USD",
			duration: "per night",
		},
		rating: 4.7,
		src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
	},
	{
		name: "Sunset Gardens Wedding Venue",
		desc: "A stunning outdoor venue perfect for weddings and receptions. Beautifully landscaped gardens with panoramic views.",
		services: [
			"Event Coordination",
			"Outdoor Ceremony Spaces",
			"Customizable Decor",
		],
		price: {
			amount: 500,
			currency: "USD",
			duration: "per hour",
		},
		rating: 4.9,
	},
	{
		name: "Tech Hub Conference Center",
		desc: "State-of-the-art conference facility equipped with advanced technology. Ideal for corporate events and seminars.",
		services: [
			"Audiovisual Equipment",
			"High-speed Internet",
			"Catering Options",
		],
		price: {
			amount: 150,
			currency: "USD",
			duration: "per hour",
		},
		rating: 4.5,
	},
	{
		name: "The Oasis Resort",
		desc: "A serene resort offering a range of recreational activities. Suitable for vacations and team retreats.",
		services: ["Swimming Pool", "Spa and Wellness Center", "Adventure Tours"],
		price: {
			amount: 2000,
			currency: "USD",
			duration: "per day",
		},
		rating: 4.6,
	},
	{
		name: "Crystal Ballroom Events Center",
		desc: "An elegant events center suitable for weddings, galas, and corporate functions. Offers a grand ambiance and customizable event spaces.",
		services: ["Event Coordination", "Banquet Catering", "Audiovisual Setup"],
		price: {
			amount: 600,
			currency: "USD",
			duration: "per hour",
		},
		rating: 4.8,
	},
	{
		name: "Tranquil Waterside Retreat",
		desc: "A peaceful waterfront retreat with picturesque views. Perfect for intimate gatherings and weekend getaways.",
		services: ["Private Dock Access", "Scenic Outdoor Areas", "BBQ Facilities"],
		price: {
			amount: 400,
			currency: "USD",
			duration: "per night",
		},
		rating: 4.9,
	},
	{
		name: "Downtown Loft Event Space",
		desc: "A modern loft-style event space in the heart of the city. Ideal for trendy social gatherings and art exhibitions.",
		services: ["Open Floor Plan", "Artistic Decor", "Catering Options"],
		price: {
			amount: 800,
			currency: "USD",
			duration: "per hour",
		},
		rating: 4.6,
	},
	{
		name: "Mountain View Lodge",
		desc: "A cozy lodge nestled in the mountains. Perfect for nature retreats, hiking excursions, and team building events.",
		services: ["Hiking Trails Access", "Bonfire Areas", "Conference Rooms"],
		price: {
			amount: 2500,
			currency: "USD",
			duration: "per day",
		},
		rating: 4.7,
	},
	{
		name: "Urban Rooftop Bar",
		desc: "A trendy rooftop bar offering city skyline views. Suitable for social events, cocktail parties, and receptions.",
		services: ["Skyline Views", "Cocktail Menu", "Music Entertainment"],
		price: {
			amount: 300,
			currency: "USD",
			duration: "per hour",
		},
		rating: 4.5,
	},
	{
		name: "Serenity Beach Resort",
		desc: "A serene beachfront resort with luxurious amenities. Ideal for destination weddings and leisure vacations.",
		services: [
			"Beachfront Access",
			"Spa and Wellness Facilities",
			"Water Sports",
		],
		price: {
			amount: 3500,
			currency: "USD",
			duration: "per night",
		},
		rating: 4.8,
	},
];

const VenueSearch = () => {
	const [search, setSearch] = useState("");
	const [venues, setVenues] = useState<typeof VENUES>(VENUES);
	const [booked, setBooked] = useState("");

	useEffect(() => {
		setVenues(
			VENUES.filter((venue) => {
				const keywords = search.split(" ");
				let valid = false;

				keywords.forEach((keyword) => {
					if (venue.name.toLowerCase().includes(keyword)) valid = true;
					if (venue.desc.toLowerCase().includes(keyword)) valid = true;
					if (keyword.includes(String(venue.price.amount))) valid = true;
					if (venue.price.duration.toLowerCase().includes(keyword))
						valid = true;
				});

				venue.services.forEach((service) => {
					keywords.forEach((keyword) => {
						if (service.toLowerCase().includes(keyword)) valid = true;
					});
				});

				return valid;
			})
		);
	}, [search]);

	return (
		<div className="border border-gray-200 rounded-md w-full">
			<div className="flex items-center border-b border-gray-200 px-2">
				<Search className="w-6 h-6" />
				<Input
					placeholder="e.g. Venue with free Wi-Fi..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="border-0"
				/>
			</div>

			<div className="flex flex-col h-[300px] overflow-y-auto w-full">
				{venues.map((venue) => (
					<div key={generateKey()} className="flex gap-4 p-4">
						<img
							src={
								(venue.src && venue.src) ||
								`/venue-${Math.floor(Math.random() * 8) + 1}.jpg`
							}
							alt="venue"
							className="w-1/3 h-full rounded-md"
						/>

						<div className="w-1/2 flex flex-col justify-center">
							<Link href={`/venue/${generateKey()}`} target="_blank">
								<h2 className="subsubheading">{venue.name}</h2>
							</Link>
							<p>{venue.desc}</p>
							<p className="muted">
								Services: {venue.services[0]}, {venue.services[1]},{" "}
								{venue.services[2]},
							</p>
							<div className="flex justify-between">
								<span className="large">
									${venue.price.amount} {venue.price.duration}
								</span>
								<span className="flex gap-2">
									<Star fill="true" /> {venue.rating}
								</span>
							</div>
						</div>

						<div className="w-1/6 flex flex-col justify-center gap-2 h-full">
							<Button
								className="w-full"
								variant={(booked === venue.name && "outline") || "default"}
								disabled={booked === venue.name && true}
								onClick={() => setBooked(venue.name)}
							>
								{booked === venue.name ? "Booked" : "Book Now"}
							</Button>
							<Button className="w-full" variant="secondary">
								Contact
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default VenueSearch;

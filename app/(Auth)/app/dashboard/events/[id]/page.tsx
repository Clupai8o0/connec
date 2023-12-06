"use client";

import Map from "@/components/content/Map";
import Markdown from "@/components/content/Markdown";
import PackageEvent from "@/components/content/PackageEvent";
import Profile from "@/components/content/Profile";
import Sidebar from "@/components/dashboard/Sidebar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { generateKey } from "@/lib/api";
import { Star } from "lucide-react";
import NextImage from "next/image";
import { useState } from "react";

const venue = {
	name: "Golden Palace Hotel",
	desc: "A luxurious hotel with modern amenities and scenic views. Ideal for events, conferences, and accommodation.",
	services: ["Free WiFi", "Event Planning Assistance", "Catering Services"],
	price: {
		amount: 300,
		currency: "USD",
		duration: "per night",
	},
	rating: 4.7,
};

const service = {
	name: "Event Planning Assistance",
	desc: "Comprehensive assistance in planning and organizing events, ensuring every detail is meticulously managed.",
	profile: {
		name: "Alexandra Johnson",
		profilePicture: "/profile-pic-1.jpg",
		email: "alexandra@example.com",
	},
	price: 80,
	rating: 4.9,
};

function DashboardEventPage() {
	const [requested, setRequested] = useState(true);

	return (
		<>
			<Sidebar />
			{/* <main className="main"> */}
			<main className="p-6">
				<div className="w-full flex flex-col md:flex-row gap-2 overflow-hidden rounded-2xl">
					<div className="w-full h-[400px] relative">
						<NextImage
							src="https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
							key="162iu1bkjna"
							alt="Some jazz"
							fill
							style={{ objectFit: "cover" }}
						/>
					</div>
				</div>

				<div className="flex flex-col lg:flex-row gap-8">
					{/* //todo: missing an average review and other details */}
					<div className="w-full">
						<h1 className="title mt-12 mb-6">
							Bahrain International Jazz Festival
						</h1>

						<Markdown
							content={`# Celebrating Jazz Rhythms Amidst Bahrain's Splendor
The Bahrain International Jazz Festival returns to Bahrain Bay Park, promising an unforgettable evening dedicated to the timeless and soulful melodies of jazz. This vibrant event unites passionate jazz enthusiasts and music aficionados for a night of enchanting performances and musical discovery.

# Captivating Performances by World-Class Artists
Experience the magic of live jazz with captivating performances by an eclectic lineup of acclaimed international jazz musicians. From smooth melodies to upbeat rhythms, witness the versatility and innovation of this beloved genre showcased by both seasoned jazz legends and emerging talents.

# Local Talent Spotlight
In addition to international acts, the festival proudly highlights Bahrain's vibrant jazz scene, providing a platform for local jazz musicians to showcase their talent. Experience the rich tapestry of jazz interpretations, reflecting the region's unique musical influences and cultural diversity.

# Immersive Outdoor Setting
The enchanting Bahrain Bay Park serves as the perfect backdrop for this musical extravaganza. Amidst the serene waterfront and lush greenery, attendees can revel in the ambiance, socialize, and delight in the communal celebration of jazz music under the starlit sky.

# Culinary Delights and Artisanal Crafts
Explore a variety of culinary offerings from local vendors offering delectable cuisines and beverages. Indulge in gourmet delights while browsing through artisanal crafts and merchandise available at the festival, adding to the holistic experience of the event.`}
						/>

						<h1 className="heading mt-12 mb-6">Venue</h1>
						<div key={generateKey()} className="flex gap-4 p-4">
							<img
								src={`/venue-${Math.floor(Math.random() * 8) + 1}.jpg`}
								alt="venue"
								className="w-1/3 h-full rounded-md"
							/>

							<div className="w-2/3 flex flex-col justify-center">
								<h2 className="subsubheading">{venue.name}</h2>
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
						</div>
						<form onSubmit={() => {}} className="space-y-4">
							<div className="flex flex-col gap-2 w-full" key={generateKey()}>
								<label className="small">Details</label>
								<Textarea placeholder="Give a detailed explanation of what you expect from the owner..." />
								<span className="muted">
									List the details about what you expect from the venue
								</span>
							</div>

							<Button type="submit">Send</Button>
						</form>

						<h1 className="heading mt-12 mb-6">Service</h1>
						<div key={generateKey()} className="flex gap-4 p-4">
							<img
								src={`/service-${Math.floor(Math.random() * 9) + 1}.jpg`}
								alt="service"
								className="w-1/3 h-full rounded-md"
							/>

							<div className="w-2/3 flex flex-col justify-center">
								<h2 className="subsubheading">{service.name}</h2>
								<p>{service.desc}</p>
								<div className="flex justify-between">
									<span className="large">${service.price} per hour</span>
									<span className="flex gap-2">
										<Star fill="true" /> {service.rating}
									</span>
								</div>
							</div>

							{/* <div className="w-1/6 flex flex-col justify-center gap-2 h-full">
								<Button
									className="w-full"
									variant={(requested && "outline") || "default"}
									disabled={requested && true}
								>
									{requested ? "Requested" : "Verified"}
								</Button>
								<Button className="w-full" variant="secondary">
									Contact
								</Button>
							</div> */}
						</div>
						<form onSubmit={() => {}} className="space-y-4">
							<div className="flex flex-col gap-2 w-full" key={generateKey()}>
								<label className="small">Details</label>
								<Textarea placeholder="Give a detailed explanation of what you expect from the singer..." />
								<span className="muted">
									List the details about what you expect from the singer
								</span>
							</div>

							<Button type="submit">Send</Button>
						</form>

						<Button disabled className="mt-12">Publish</Button>
					</div>
				</div>
			</main>
		</>
	);
}

export default DashboardEventPage;

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
import Link from "next/link";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

const venue = {
	name: "Golden Palace Hotel",
	desc: "In a realm of serenity and grandeur, the Golden Palace Hotel stands tall as an embodiment of sophistication and opulence. Commanding majestic vistas that capture nature's breathtaking beauty, this establishment redefines luxury, promising an indulgent escape amidst spellbinding landscapes.",
	services: ["Free WiFi", "Event Planning Assistance", "Catering Services"],
	price: {
		amount: 300,
		currency: "USD",
		duration: "per night",
	},
	rating: 4.7,
	src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const service = {
	name: "Live Painter",
	desc: "I am a live painter, specializing in transforming events into artistic experiences. My unique service adds an interactive and visually captivating element, turning any occasion into a memorable and creative affair.",
	profile: {
		name: "Reem",
		profilePicture: "/reem.jpg",
		title: "Live Painter",
		src: "/reem.jpg",
	},
	price: 20,
	rating: 4.9,
	src: "/painter.jpg",
};

function DashboardEventPage() {
	const router = useRouter();

	const client = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL || "",
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
	);
	const [requested, setRequested] = useState(false);
	const [verified, setVerified] = useState(false);

	useEffect(() => {
		(async () => {
			const { data, error } = await client.from("contract").select();
			if (data?.length !== 0 && data !== null) {
				setRequested(true);
				setVerified(data[0]?.verified);
			} else {
				setRequested(false);
			}
		})();
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { data, error } = await client.from("contract").insert([
			{
				code: "123",
				verified: false,
			},
		]);
		setRequested(true);
	};

	return (
		<>
			<Sidebar />
			{/* <main className="main"> */}
			<main className="p-6 max-w-full">
				<div className="w-full flex flex-col md:flex-row gap-2 overflow-hidden rounded-2xl">
					<div className="w-full h-[400px] relative">
						<NextImage
							src="https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
						<h1 className="title mt-12 mb-6">Art exhibition</h1>

						<Markdown
							content={`Welcome to "Unveiling Masterpieces," an exquisite art exhibition that invites you on a visual journey through captivating artistic expressions. This exhibition showcases an eclectic array of artworks from renowned local and international artists.

# Diverse Artistic Repertoire:
Immerse yourself in a diverse tapestry of artistic styles, from contemporary abstracts to classical portraits, ensuring a rich and varied experience for art enthusiasts and collectors alike.

# Featured Artists:
Discover the visions of both established and emerging artists, each piece a reflection of their unique perspectives and creative narratives. Our exhibition proudly presents a curated selection that encompasses a spectrum of emotions and techniques.

The exhibition's thematic approach invites contemplation and introspection, exploring themes of identity, nature, societal reflections, and the human condition. Each artwork serves as a window into the artist's soul, inviting interpretation and discourse.

# Interactive Engagement:
Engage with the art on a deeper level through interactive sessions led by curators or artists themselves. Gain insights into the creative process, inspirations, and stories behind the masterpieces displayed.

Participate in enlightening discussions and workshops, fostering artistic dialogues among attendees, artists, and experts. Delve into the world of artistry, exploring techniques, influences, and the ever-evolving art landscape.

Be captivated by specially curated installations and highlight pieces strategically placed to evoke emotional resonance and aesthetic appreciation. Witness the convergence of creativity and innovation.`}
						/>

						<h1 className="heading mt-12 mb-6">Venue</h1>
						<Link href={`/venue/${generateKey()}`} target="_blank">
							<div key={generateKey()} className="flex gap-4 p-4">
								<img
									src={
										(venue.src && venue.src) ||
										`/venue-${Math.floor(Math.random() * 8) + 1}.jpg`
									}
									alt="venue"
									className="w-1/3 h-full rounded-md"
								/>

								<div className="w-2/3 flex flex-col justify-center">
									<h2 className="subsubheading">{venue.name}</h2>
									<p className="truncate w-full">{venue.desc}</p>
									<p className="muted truncate">
										Services: {venue.services[0]}, {venue.services[1]},{" "}
										{venue.services[2]}, {venue.services[3]}...
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
						</Link>
						{!requested ? (
							<form onSubmit={handleSubmit} className="space-y-4">
								<div className="flex flex-col gap-2 w-full" key={generateKey()}>
									<label className="small">Details</label>
									<Textarea placeholder="Give a detailed explanation of what you expect from the owner..." />
									<span className="muted">
										List the details about what you expect from the venue
									</span>
								</div>

								<Button type="submit">Send</Button>
							</form>
						) : (
							<div className="p-4">
								Status:{" "}
								<span
									className={`p-2 rounded-sm ${
										!verified
											? "bg-gray-400 text-gray-50"
											: "bg-blue-500 text-white"
									}`}
								>
									{!verified ? "Requested" : "Verified"}
								</span>
							</div>
						)}

						<h1 className="heading mt-12 mb-6">Service</h1>
						<Link href={`/service/${generateKey()}`} target="_blank">
							<div key={generateKey()} className="flex gap-4 p-4">
								<img
									src={
										(service.src && service.src) ||
										`/service-${Math.floor(Math.random() * 8) + 1}.jpg`
									}
									alt="service"
									className="w-1/3 h-full rounded-md"
								/>

								<div className="w-2/3 flex flex-col justify-center">
									<h2 className="subsubheading">{service.name}</h2>
									<p className="truncate mb-2">{service.desc}</p>
									<Profile {...service.profile} />
									<div className="flex justify-between mt-2">
										<span className="large">${service.price} per hour</span>
										<span className="flex gap-2">
											<Star fill="true" /> {service.rating}
										</span>
									</div>
								</div>
							</div>
						</Link>

						<Link href={`/event/${generateKey()}`}>
							<Button disabled={!verified} className="mt-12">
								Publish
							</Button>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}

export default DashboardEventPage;

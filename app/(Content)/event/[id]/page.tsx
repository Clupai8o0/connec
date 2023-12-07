import { Event } from "@/types";

import Gallery from "@/components/content/Gallery";
import Profile from "@/components/content/Profile";
import Map from "@/components/content/Map";
import Reviews from "@/components/content/Reviews";
import Markdown from "@/components/content/Markdown";
import Package from "@/components/content/Package";
import PackageEvent from "@/components/content/PackageEvent";

import NextImage from "next/image";
import { generateKey } from "@/lib/api";
import { Star } from "lucide-react";
import Link from "next/link";
async function getEvent(id: string) {
	const resp = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER}api/event?id=${id}`,
		{
			// cache: process.env.status === "DEV" ? "no-store" : "default",
			cache: "no-store",
		}
	);
	const data = await resp.json();
	return data.data;
}

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
	name: "Crafting Unforgettable Musical Moments",
	desc: "Hello, I'm Reem, a renowned singer offering a personalized musical service crafted to enhance the essence of any event. My passion lies in captivating audiences with the soulful resonance of my voice, tailoring enchanting performances for various occasions.",
	profile: {
		name: "Reem",
		profilePicture: "/reem.jpg",
		title: "Singer",
		src: "/reem.jpg"
	},
	price: 20,
	rating: 4.9,
	src:"/singer.jpg"
};

async function EventPage({ params: { id } }: { params: { id: string } }) {
	const event: Event = await getEvent(id);

	//todo need to make a way to handle the situation where the venue doesn't exist
	// rather simple but im lazy so
	if (!event) throw new Error("Given event doesn't exist");

	//todo: also for mobile view, need a way to quickly access the package part, table of content?
	//todo: also level this up like airbnb's got
	return (
		<main className="main">
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
				<div className="w-full md:w-2/3">
					<h1 className="title mt-12 mb-6">{event.title}</h1>
					<Profile {...event.owner} />

					<Markdown content={event.desc} />

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

					<h1 className="heading mt-12 mb-6">Services</h1>
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

					{/* <h1 className="heading mt-12 mb-6">Location</h1>
					<Map /> */}

					{/* <Reviews reviews={event.reviews} /> */}
				</div>
				<div className="w-full md:w-1/3 pt-12">
					{/* //todo: need to make this mobile easy to use */}
					<PackageEvent {...event.package} />
				</div>
			</div>
		</main>
	);
}

export default EventPage;

//todo: get rid of this after static paths are done
export const dynamic = "force-dynamic";

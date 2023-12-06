import { Event } from "@/types";

import Gallery from "@/components/content/Gallery";
import Profile from "@/components/content/Profile";
import Map from "@/components/content/Map";
import Reviews from "@/components/content/Reviews";
import Markdown from "@/components/content/Markdown";
import Package from "@/components/content/Package";
import PackageEvent from "@/components/content/PackageEvent";

import NextImage from 'next/image'
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
					<Profile />

					<Markdown content={event.desc} />

					<h1 className="heading mt-12 mb-6">Location</h1>
					<Map />

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

import { Venue } from "@/types";

import Gallery from "@/components/content/Gallery";
import Profile from "@/components/content/Profile";
import Map from "@/components/content/Map";
import Reviews from "@/components/content/Reviews";
import Markdown from "@/components/content/Markdown";
import Package from "@/components/content/Package";

async function getVenue(id: string) {
	const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER}api/venue?id=${id}`, {
		// cache: process.env.status === "DEV" ? "no-store" : "default",
		cache: "no-store",
	});
	const data = await resp.json();
	return data.data;
}

async function Venue({ params: { id } }: { params: { id: string } }) {
	const venue: Venue = await getVenue(id);

	//todo need to make a way to handle the situation where the venue doesn't exist
	// rather simple but im lazy so...
	if (!venue) throw new Error("Given venue doesn't exist");

	//todo: also for mobile view, need a way to quickly access the package part, table of content?
	//todo: also level this up like airbnb's got
	return (
		<main className="main">
			<Gallery imgs={venue.imgs} />

			<div className="flex flex-col lg:flex-row gap-8">
				{/* //todo: missing an average review and other details */}
				<div className="w-full md:w-2/3">
					<h1 className="title mt-12 mb-6">{venue.title}</h1>
					{/* <Profile name={venue.owner.name} title={venue.owner.title} /> */}

					<Markdown content={venue.desc} />

					<h1 className="heading mt-12 mb-6">Location</h1>
					<Map {...venue.location} />

					<Reviews reviews={venue.reviews} />
				</div>
				<div className="w-full md:w-1/3 pt-12">
					{/* //todo: need to make this mobile easy to use */}
					<Package {...venue.package} />
				</div>
			</div>
		</main>
	);
}

export default Venue;

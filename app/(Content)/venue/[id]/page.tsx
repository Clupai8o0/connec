import { Venue } from "@/types";

import Gallery from "@/components/content/Gallery";

async function getVenue(id: string) {
	const resp = await fetch(`${process.env.SERVER}api/venue?id=${id}`);
	const data = await resp.json();
	return data.data;
}

async function Venue({ params: { id } }: { params: { id: string } }) {
	const venue: Venue = await getVenue(id);

	//todo need to make a way to handle the situation where the venue doesn't exist
	// rather simple but im lazy so...
	if (!venue) throw new Error("Given venue doesn't exist");

	//todo: also for mobile view, need a way to quickly access the package part, table of content?
	return (
		<main className="main">
			<Gallery imgs={venue.imgs} />
      
			<div className="flex mt-12">
				<div className="w-full md:w-1/2">
					{/* Title */}
					{/* Owner / Profile */}
					{/* Description - Markdown */}
					{/* Heading - Location */}
					{/* Location */}
					{/* Heading - Reviews */}
					{/* Reviews */}
				</div>
				<div className="w-full md:w-1/2">
					{/* Must always stay at the top (Desktop) */}
					{/* Package */}
				</div>
			</div>
		</main>
	);
}

export default Venue;

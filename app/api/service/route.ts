//todo: get rid of this after static paths are done
export const dynamic = "force-dynamic";

import { NextRequest } from "next/server";

import { generateKey, handleError, handleSuccess } from "@/lib/api";

//todo: a way to get a single venue
//todo: a way to get multiple venues
//todo: a way to get all the venue path for static path generation

// http://localhost:3000/api/venue?id=123
export async function GET(req: NextRequest) {
	try {
		const id = req.nextUrl.searchParams.get("id") || "";
		if (!id) throw new Error("Missing required query venue id");

		//todo: Get the data from some api...
		// note: this is only dummy data for now, we will be getting the data from microsoft azure somehow
		const data = {
			id: generateKey(),
			owner: {
				id: generateKey(),
				name: "Jennifer Sterling",
				title: "President and CEO",
			}, //? in the future this will only have an id
			title: "Event Photography Services",
			desc: `## Comprehensive Event Coverage
Our services encompass a comprehensive approach to event photography. We specialize in capturing candid moments, group photos, and intricate venue details. With a keen eye for lighting and composition, our goal is to ensure each image reflects the emotions and atmosphere of the event, creating a compelling narrative.

## Tailored Photography Packages
We provide customizable photography packages tailored to various events, including weddings, corporate functions, and social gatherings. Our diverse options range from digital albums to prints and personalized photo books, offering flexibility to cherish your memories in the perfect format.

## Professional Editing and Delivery
Proficient in professional editing and post-processing, we enhance images while preserving their authenticity. We prioritize timely delivery, ensuring high-resolution, edited images are promptly provided in digital formats for easy sharing and printing.

# Previous Experience
## Weddings and Special Events
We hold extensive experience in covering weddings, engagement ceremonies, and family gatherings. Our work is recognized for encapsulating intimate moments and crafting beautiful narratives through imagery.

## Corporate and Business Functions
Our portfolio includes collaborations with companies at conferences, product launches, and corporate galas. We excel in showcasing the professionalism and essence of business events through photography.

## Community and Cultural Events
We've documented cultural festivals, community gatherings, and local events, portraying the vibrancy and diversity of Bahrain's cultural heritage.`,
			imgs: [
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "A fuking desert",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "A mermaid",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1613067532651-7075a620c900?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "Another fuking desert",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "Cool landscape",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "A fuking plant",
				},
			],
			location: {
				google:
					"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3477.651113092308!2d50.572061211229006!3d26.211181489289192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af14f7389d1d%3A0x18da6ea2b6728982!2sNew%20Millennium%20School%20Bahrain!5e0!3m2!1sen!2sbh!4v1699447907079!5m2!1sen!2sbh",
			},
			package: {
				title: "SpectraFields Event Rental Package",
				price: {
					per: "hr",
					value: "$75",
				},
				desc: `- Comprehensive event coverage capturing candid moments, group photos, and venue details
- Customizable photography packages for weddings, corporate functions, and social gatherings
- Professional editing and prompt delivery of high-resolution, edited digital images`,
			}, //? for now let's only allow for one package
			reviews: [
				{
					user: {
						//? this will be an id in the future once the user database is set
						id: generateKey(),
						name: "Sarah W.",
						title: "Event Planner",
					},
					stars: 4.5,
					subject: "Capturing Memories with Excellence",
					body: "The photographer beautifully captured every emotion and detail of our wedding day. The photos were stunning, and their professionalism was top-notch. Highly recommended!",
				},
				{
					user: {
						//? this will be an id in the future once the user database is set
						id: generateKey(),
						name: "Sarah W.",
						title: "Event Planner",
					},
					stars: 5,
					subject: "Exceptional Talent and Creativity",
					body: "We hired this photographer for our corporate event, and the results were outstanding. Their creativity and ability to capture the essence of our event were truly impressive.",
				},
				{
					user: {
						//? this will be an id in the future once the user database is set
						id: generateKey(),
						name: "Sarah Mitchell",
						title: "Event Planner",
					},
					stars: 5,
					subject: "Professionalism and Attention to Detail",
					body: "The photographer's dedication to capturing every moment was commendable. Their attention to detail and friendly approach made everyone comfortable in front of the camera",
				},
			],
		};

		return handleSuccess("Works ig", data);
	} catch (e: any) {
		return handleError("Could not get the venue", e);
	}
}

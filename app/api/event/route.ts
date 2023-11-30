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
			title: "Bahrain International Jazz Festival",
			desc: `# Celebrating Jazz Rhythms Amidst Bahrain's Splendor
The Bahrain International Jazz Festival returns to Bahrain Bay Park, promising an unforgettable evening dedicated to the timeless and soulful melodies of jazz. This vibrant event unites passionate jazz enthusiasts and music aficionados for a night of enchanting performances and musical discovery.

# Captivating Performances by World-Class Artists
Experience the magic of live jazz with captivating performances by an eclectic lineup of acclaimed international jazz musicians. From smooth melodies to upbeat rhythms, witness the versatility and innovation of this beloved genre showcased by both seasoned jazz legends and emerging talents.

# Local Talent Spotlight
In addition to international acts, the festival proudly highlights Bahrain's vibrant jazz scene, providing a platform for local jazz musicians to showcase their talent. Experience the rich tapestry of jazz interpretations, reflecting the region's unique musical influences and cultural diversity.

# Immersive Outdoor Setting
The enchanting Bahrain Bay Park serves as the perfect backdrop for this musical extravaganza. Amidst the serene waterfront and lush greenery, attendees can revel in the ambiance, socialize, and delight in the communal celebration of jazz music under the starlit sky.

# Culinary Delights and Artisanal Crafts
Explore a variety of culinary offerings from local vendors offering delectable cuisines and beverages. Indulge in gourmet delights while browsing through artisanal crafts and merchandise available at the festival, adding to the holistic experience of the event.`,
			imgs: [
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1682687220211-c471118c9e92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "A fuking desert",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1682686581218-82326951f4ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "A mermaid",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "Another fuking desert",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1682687218982-6c508299e107?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "Cool landscape",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1699175481336-52d618f1f41d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
					general: "$25",
					vip: "$60",
				},
				desc: "The Bahrain International Jazz Festival invites all music enthusiasts to join in and immerse themselves in an evening filled with the soulful harmonies and captivating rhythms of jazz, promising an unforgettable experience in the heart of Bahrain's cultural tapestry.",
				duration: "6 hours",
				date: "15 April, 2023",
				time: "5:00 P.M. to 11:00 P.M."
			}, //? for now let's only allow for one package
		};

		return handleSuccess("Works ig", data);
	} catch (e: any) {
		return handleError("Could not get the event", e);
	}
}

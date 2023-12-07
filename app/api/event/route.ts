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
				name: "Reem",
				title: "Live Painter",
				src: "/reem.jpg",
			},
			title: "Art Exhibition",
			desc: `Welcome to "Unveiling Masterpieces," an exquisite art exhibition that invites you on a visual journey through captivating artistic expressions. This exhibition showcases an eclectic array of artworks from renowned local and international artists.

# Diverse Artistic Repertoire:
Immerse yourself in a diverse tapestry of artistic styles, from contemporary abstracts to classical portraits, ensuring a rich and varied experience for art enthusiasts and collectors alike.

# Featured Artists:
Discover the visions of both established and emerging artists, each piece a reflection of their unique perspectives and creative narratives. Our exhibition proudly presents a curated selection that encompasses a spectrum of emotions and techniques.

The exhibition's thematic approach invites contemplation and introspection, exploring themes of identity, nature, societal reflections, and the human condition. Each artwork serves as a window into the artist's soul, inviting interpretation and discourse.

# Interactive Engagement:
Engage with the art on a deeper level through interactive sessions led by curators or artists themselves. Gain insights into the creative process, inspirations, and stories behind the masterpieces displayed.

Participate in enlightening discussions and workshops, fostering artistic dialogues among attendees, artists, and experts. Delve into the world of artistry, exploring techniques, influences, and the ever-evolving art landscape.

Be captivated by specially curated installations and highlight pieces strategically placed to evoke emotional resonance and aesthetic appreciation. Witness the convergence of creativity and innovation.`,
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
					general: "$10",
					vip: "$25",
				},
				desc: "Experience the captivating Art Exhibition General tickets at $10 and VIP tickets at $25. Join us for an enchanting evening of soul-stirring artwork and emotive performances. Limited tickets available!",
				duration: "4 hours",
				date: "10 December, 2023",
				time: "6:00 P.M. to 10:00 P.M.",
			},
		};

		return handleSuccess("Works ig", data);
	} catch (e: any) {
		return handleError("Could not get the event", e);
	}
}

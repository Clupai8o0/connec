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
				title: "Singer",
				src: "/reem.jpg",
			},
			title: "Harmonious Reverie: Reem's Melodic Voyage",
			desc: `Harmonious Reverie: Reem's Melodic Voyage invites you to an unforgettable evening of musical enchantment. Set amidst the opulent grandeur of the city's renowned concert hall, the event promises an immersive experience that blends sophistication with the raw emotion of live music.

As the sun sets and the venue glimmers with ambient lights, guests are welcomed into a world where melodies become memories. Reem, a vocal virtuoso known for her emotive performances, takes center stage, her voice echoing through the hall, captivating every soul present.

The concert's program is meticulously curated, showcasing Reem's versatility with a repertoire that traverses through time and genres. From timeless classics that evoke nostalgia to contemporary chart-toppers, each song is woven with passion and precision, inviting the audience on an emotional rollercoaster.

Elevating the auditory journey, a symphony orchestra, and a small ensemble of renowned musicians accompany Reem, enriching the melodies with harmonies that resonate through the hall. Visual spectacles of lights and subtle stage effects complement the music, creating a multisensory experience that transcends mere entertainment.

During intermissions, guests indulge in a curated selection of refreshments, mingling in the venue's elegantly adorned foyer. Engaging with fellow music enthusiasts, they share in the anticipation of the performances yet to unfold.

The evening culminates in a crescendo of emotions as Reem delivers a powerful finale, leaving the audience spellbound. A standing ovation fills the hall, echoing gratitude for an evening that surpassed expectations.

Harmonious Reverie: Reem's Melodic Voyage is not just a concert; it's an immersive journey through emotions, artistry, and the unifying power of music. A night where melodies intertwine with memories, leaving an indelible mark on every heart fortunate enough to be part of this transcendent experience.`,
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
				desc: "Experience the captivating Harmonious Reverie: Reem's Melodic Voyage! General tickets at $10 and VIP tickets at $25. Join us for an enchanting evening of soul-stirring melodies and emotive performances. Limited seats available!",
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

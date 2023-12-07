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
				title: "Artist",
				src: "/reem.jpg",
			},
			title: "Live Painter",
			desc: `# Elevate Your Event with Live Artistry

I am a live painter, specializing in transforming events into artistic experiences. My unique service adds an interactive and visually captivating element, turning any occasion into a memorable and creative affair.

Live Painting Sessions:
At your event, I set up my easel and canvas, engaging guests with a mesmerizing live painting session. As the event unfolds, I translate the ambiance, energy, or chosen themes into a captivating visual masterpiece.

# Customized Artwork

Clients have the opportunity to request specific subjects, moments, or themes they wish to be immortalized on canvas during the event. This customization ensures a personalized touch that resonates with the occasion.

Guests are invited to witness the creative process firsthand, offering suggestions or simply observing as the artwork evolves. This interactive engagement fosters a sense of involvement and curiosity among attendees.

# Finished Masterpiece Presentation
Upon the event's conclusion, I present a near-complete or finished artwork. This stunning piece serves as a unique keepsake or a striking display for hosts or guests, encapsulating the essence of the event.

My live painting session adds a unique entertainment aspect to events, providing guests with an engaging visual experience that transcends conventional event activities.

The artwork becomes a cherished memento, encapsulating the vibrancy and spirit of the event in a tangible, lasting form. It serves as a meaningful keepsake for hosts or attendees alike.

I seamlessly integrate into various event spaces, ensuring that my artistic corner complements the event's ambiance without disrupting the flow of activities.

My goal is to enrich events with creativity, transforming moments into art and leaving guests captivated by the live creation of a masterpiece that encapsulates the essence of their experience.`,
			prev: `# Early Beginnings:
My passion for painting ignited at a young age, leading me on an artistic journey that merged with events. Through dedicated practice and creative exploration, I honed my skills as an artist, culminating in a seamless fusion of art and live experiences.

Commencing with local exhibitions and showcases, I gained recognition for my live painting prowess. These initial experiences allowed me to refine my techniques and connect intimately with diverse audiences, painting scenes that mirrored the event's ambiance.

Collaborations with event organizers and notable venues broadened my artistic horizons. Working across various event types—weddings, galas, corporate functions—I adapted my artistry to diverse themes and settings, mastering the live painting process.

# Event Highlights:
My journey led to live painting at prestigious events, where I captured pivotal moments on canvas. From commemorating weddings with intimate portraits to visually capturing the energy of concerts, each event contributed to my evolving expertise.

Constantly exploring new styles and approaches, my live painting evolved into an interactive performance. I engaged with guests, translating their stories and emotions onto canvas, creating bespoke artworks that resonated deeply.`,
			imgs: [
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1589996448606-27d38c70f3bc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "A fuking desert",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1507010444286-828ea71bfac7?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "A mermaid",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1532892643659-9034b26e8cce?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "Another fuking desert",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "Cool landscape",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1590853566724-83bc9da30d15?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
					value: "$20",
				},
				desc: `- *Live Painting Sessions:* I set up my easel and canvas at the event, creating an engaging visual spectacle as I paint the scene, ambiance, or focal points live.

- *Customized Artwork:* Clients can request specific themes, subjects, or moments they want immortalized on canvas during the event, ensuring a personalized touch.

- *Interactive Experience:* Guests can witness the creation process, interact, and even contribute ideas, fostering a sense of involvement and curiosity.`,
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

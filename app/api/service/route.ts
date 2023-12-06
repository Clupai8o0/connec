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
			title: "Crafting Unforgettable Musical Moments",
			desc: `Hello, I'm Reem, a renowned singer offering a personalized musical service crafted to enhance the essence of any event. My passion lies in captivating audiences with the soulful resonance of my voice, tailoring enchanting performances for various occasions.

# Versatile Repertoire

My musical journey spans diverse genres—pop, jazz, R&B, and classical tunes. This versatility allows me to curate immersive experiences, ensuring that weddings, corporate gatherings, private parties, and more, are adorned with the perfect melodies.

Collaborating closely with event planners and clients, I personalize each performance to align with the unique ambiance of the occasion. Whether it's crafting custom playlists or accommodating special song requests, I ensure the music harmonizes seamlessly with the event's vibe.

# Impeccable Delivery

Priding myself on professionalism, I arrive fully equipped with top-tier sound systems, delivering a flawless auditory journey. My commitment to excellence guarantees an immersive performance that captivates audiences through emotive renditions.

My aim is to leave an enduring mark on every event. I strive to create memories that linger, infusing each moment with musical magic that lingers long after the performance concludes.

My dedication lies in infusing passion, professionalism, and musical finesse into every performance. By crafting captivating melodies, I aim to ensure that each occasion becomes an unforgettable and cherished experience.`,
			prev: `# Early Foundations:
Reem's passion for music ignited in her youth, fostering an early love for melodies. Through dedicated practice and training, she cultivated her innate talent, laying the groundwork for a promising musical career.

Commencing with grassroots performances, Reem captivated audiences with her emotive voice and magnetic stage presence. These intimate settings provided fertile ground for honing her craft and establishing a connection with diverse crowds.

Collaborations with established musicians and production houses expanded Reem's musical horizons. Working across genres and styles, these partnerships shaped her into a versatile artist, amplifying her ability to adapt to various musical environments.

# Performance Pinnacle:
Gaining acclaim, Reem found herself at prestigious events, weddings, corporate functions, and cultural festivals. Her adaptability and vocal finesse allowed her to seamlessly blend into each event's unique atmosphere, leaving lasting impressions.

# Studio Sojourns:
Venturing into recording studios, Reem lent her vocals to commercials, music albums, and collaborations. Studio work fine-tuned her artistry, refining her voice and technique for a broader array of musical endeavors.`,
			imgs: [
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1473396413399-6717ef7c4093?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "A fuking desert",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1487954335942-047e6d1551ee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "A mermaid",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1487954277007-8c2d6710c312?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "Another fuking desert",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1475527588268-e6a157656e35?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
					alt: "Cool landscape",
				},
				{
					id: generateKey(),
					src: "https://images.unsplash.com/photo-1468392788711-903a924761a6?q=80&w=1487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
				desc: `- *Live Performances:* Engaging live musical performances tailored to the event's ambiance, encompassing diverse genres such as pop, jazz, R&B, or classical music.

- *Customized Setlists:* Collaborative creation of personalized playlists to suit the tone and preferences of the event, ensuring a seamless blend of songs that resonate with the audience.

- *Song Requests:* Accommodation of specific song requests from clients or attendees, adding a personalized touch to the performance and enhancing audience engagement.`,
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

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
			title: "The Ritz-Carlton Bahrain",
			desc: `Nestled along the captivating shores of Manama, The Ritz-Carlton Bahrain stands as a pinnacle of sophistication and luxury, offering an unparalleled setting for an array of events. With its prime location in the vibrant Seef District, this venue beckons guests with its breathtaking views of the Arabian Gulf, setting the stage for unforgettable moments.

# Elegant Event Spaces
The Ritz-Carlton Bahrain showcases a diverse selection of elegant event spaces designed to cater to various occasions. From the grand ballrooms adorned with exquisite chandeliers to the enchanting outdoor terraces overlooking the azure waters, each space is meticulously crafted to provide a blend of opulence and functionality. The versatility of these spaces enables seamless customization, ensuring that every event, whether an intimate gathering or a lavish celebration, is perfectly tailored to meet the client's desires.

# Exceptional Services
At the heart of The Ritz-Carlton Bahrain's allure lies its commitment to providing unparalleled service. A dedicated team of event specialists, including seasoned planners and coordinators, collaborates closely with clients to bring their vision to life. From the initial planning stages to the final execution, every detail is meticulously curated, ensuring a flawless and memorable experience for hosts and guests alike.

# Gastronomic Excellence
The culinary offerings at this venue are nothing short of extraordinary. The Ritz-Carlton Bahrain's culinary artisans craft delectable menus that tantalize the taste buds, offering an array of gastronomic delights tailored to each event. Whether it's a sumptuous buffet, an exquisite plated dinner, or bespoke themed cuisine, the culinary team delivers unparalleled excellence, complementing the ambiance and adding an extra layer of sophistication to every gathering.

# Impeccable Atmosphere
Beyond its luxurious facilities and exceptional services, The Ritz-Carlton Bahrain creates an atmosphere of refined elegance and tranquility. The harmonious blend of modern amenities and timeless sophistication, coupled with the warm hospitality of the staff, elevates every event hosted within its walls, leaving a lasting impression on guests.`,
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
					value: "$500",
				},
				desc: `- *Dedicated Event Coordinator:* A professional coordinator to assist in planning and executing events.
- *Audiovisual Equipment Rental:* Cutting-edge equipment available for presentations and entertainment.
- *Catering Services:* Customizable menus offering gourmet cuisine for various occasions.
- *Customizable Event Spaces:* Versatile indoor and outdoor areas suitable for weddings, corporate functions, and private gatherings.`,
			}, //? for now let's only allow for one package
			reviews: [
				{
					user: {
						//? this will be an id in the future once the user database is set
						id: generateKey(),
						name: "Sarah W.",
						title: "Event Planner",
					},
					stars: 5,
					subject: "Unforgettable Wedding Venue",
					body: "Exquisite venue with impeccable service. Our wedding reception here was nothing short of magical. The staff went above and beyond to ensure every detail was perfect.",
				},
				{
					user: {
						//? this will be an id in the future once the user database is set
						id: generateKey(),
						name: "Sarah W.",
						title: "Event Planner",
					},
					stars: 4.5,
					subject: "Ideal Venue for Corporate Events",
					body: "Had a corporate conference at The Ritz-Carlton Bahrain, and it was a fantastic experience. The event spaces were well-equipped, and the catering was exceptional. Highly recommended for business events",
				},
				{
					user: {
						//? this will be an id in the future once the user database is set
						id: generateKey(),
						name: "Sarah Mitchell",
						title: "Event Planner",
					},
					stars: 4,
					subject: "Luxurious Ambiance for Social Gatherings",
					body: "The ambiance and attention to detail make this venue stand out. Whether it's a gala dinner or a social gathering, The Ritz-Carlton Bahrain offers a truly luxurious setting",
				},
			],
		};

		return handleSuccess("Works ig", data);
	} catch (e: any) {
		return handleError("Could not get the venue", e);
	}
}

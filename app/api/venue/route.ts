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
				name: "Prakhar",
				title: "Owner of Golden Palace Hotels",
				src: "/prakhar.jpg",
			},
			title: "Golden Palace Hotels",
			desc: `# Unveiling the Magnificence of Golden Palace Hotel
In a realm of serenity and grandeur, the Golden Palace Hotel stands tall as an embodiment of sophistication and opulence. Commanding majestic vistas that capture nature's breathtaking beauty, this establishment redefines luxury, promising an indulgent escape amidst spellbinding landscapes.

Transcending the ordinary, the Golden Palace Hotel seamlessly merges modernity with refinement. From the resplendent grand foyer to the elegantly appointed rooms, every facet exudes an air of sophistication. Artful design elements blend seamlessly with comfort, ensuring an unmatched stay for every guest.

# Unrivaled Amenities and Distinctive Experiences
Crafted for the elite traveler, the Golden Palace Hotel prides itself on world-class amenities. Each room and suite embodies opulence, featuring sumptuous furnishings, cutting-edge technology, and panoramic vistas that transport guests into realms of tranquility and luxury.

# Exquisite Venue for Unforgettable Events
Beyond a haven for leisure, the hotel sets the stage for unforgettable events and conferences. With versatile, upscale event spaces featuring modern amenities and superior facilities, it offers an ideal setting for prestigious gatherings and sophisticated soirées.

Nestled amidst a picturesque canvas, the hotel overlooks sprawling vistas of rolling hills and serene lakes. A symphony of nature envelops the senses, inviting guests to revel in tranquility while admiring the breathtaking beauty. Meticulously landscaped gardens further enhance the ambiance of peace and harmony.

At the core of the hotel lies a culinary sanctuary, elevating gastronomic experiences to a realm of artistry. Guests embark on an epicurean journey through a diverse array of dining options, promising flavors that captivate the palate. From gourmet delights to locally inspired cuisines, the hotel's restaurants cater to discerning tastes.

Above all, the Golden Palace Hotel prides itself on unparalleled hospitality. A beacon of warmth and professionalism, each staff member epitomizes dedication, ensuring that every guest receives superlative service. Every need is met with finesse and grace, promising an unforgettable experience.

In conclusion, the Golden Palace Hotel stands as an icon of luxury, where modern elegance harmonizes with natural splendor. It's a sanctuary where guests transcend the ordinary and immerse themselves in an experience that defines luxury, leaving an indelible mark on their memory.`,
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
				price: {
					per: "night",
					value: "$300",
				},
				desc: `- *Dedicated Event Coordinator:* A professional coordinator to assist in planning and executing events.
- *Audiovisual Equipment Rental:* Cutting-edge equipment available for presentations and entertainment.
- *Catering Services:* Customizable menus offering gourmet cuisine for various occasions.
- *Customizable Event Spaces:* Versatile indoor and outdoor areas suitable for weddings, corporate functions, and private gatherings.`,
				services: [
					"Free WiFi",
					"Event Planning Assistance",
					"Catering Services",
					"Spa and Wellness Facilities",
					"Concierge Service",
					"Airport Shuttle",
					"Room Service",
					"Fitness Center",
					"Business Center",
					"Valet Parking",
					"Laundry and Dry Cleaning",
					"Limo/Town Car Service",
				],
			}, 
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

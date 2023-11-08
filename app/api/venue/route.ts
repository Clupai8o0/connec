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
			owners: {
				id: generateKey(),
				name: "Jennifer Sterling",
				title: "President and CEO",
			}, //? in the future this will only have an id
			title: "EliteVenue Stadium",
			desc: `# A Heading

Welcome to EliteVenue Stadium, your premier destination for hosting remarkable sporting events, concerts,  corporate gatherings, and more. Nestled in a picturesque setting, EliteVenue Stadium stands as a testament to excellence, offering you a versatile and vibrant space that caters to your every event need.

At EliteVenue Stadium, we pride ourselves on transforming your dreams into extraordinary realities. Whether it's a high-octane football match, an electrifying music concert, a corporate team-building extravaganza, or any event your heart desires, our world-class facility is the canvas upon which your vision will come to life.

![A fuking desert](https://images.unsplash.com/photo-1682686578842-00ba49b0a71a?q=80&w=1375&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

Our state-of-the-art amenities and impeccable services ensure that your event unfolds seamlessly. From spacious seating arrangements and cutting-edge audio-visual technology to well-maintained turf and a variety of culinary options, we've thought of everything to create a memorable experience for you and your guests.

# A Subheading

What truly sets EliteVenue Stadium apart is our commitment to exceeding expectations. Our dedicated team is here to assist you every step of the way, from event planning and logistics to execution, ensuring that every moment is as extraordinary as the next. The possibilities are endless at EliteVenue Stadium, where dreams take the center stage and turn into cherished realities.

Come, experience the magic of EliteVenue Stadium, where your event finds its perfect home, and memories are etched forever. Whether you're a sports enthusiast, a music lover, or a corporate professional, EliteVenue Stadium is ready to make your event exceptional.

Unleash the possibilities, book EliteVenue Stadium, and let your dreams take flight. Your vision, our playground – EliteVenue Stadium, the stage of your dreams.`,
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
				google: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3477.651113092308!2d50.572061211229006!3d26.211181489289192!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49af14f7389d1d%3A0x18da6ea2b6728982!2sNew%20Millennium%20School%20Bahrain!5e0!3m2!1sen!2sbh!4v1699447907079!5m2!1sen!2sbh" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
			},
			package: {
				title: "SpectraFields Event Rental Package",
				price: {
					per: "hour",
					value: "$1,500",
				},
				desc: `- *Exclusive Venue Access:* Secure exclusive access to SpectraFields, ensuring your event is the center of attention.

- *Flexible Hourly Booking:* Plan your event with ease, thanks to our flexible hourly booking options.

- *Meticulously Maintained Venue:* Enjoy our well-manicured turf and top-notch facilities that set the stage for an exceptional event.

- *Professional Event Staff:* Our experienced event professionals will assist you from planning to execution, ensuring your event runs smoothly.

- *State-of-the-Art Audio-Visual Equipment:* Benefit from our high-quality sound and lighting systems to enhance your event's atmosphere.

- *Catering and Hospitality Services:* We can arrange catering services, from casual to fine dining, tailored to your preferences.

- *Ample Seating Options:* Accommodate your guests with a variety of seating configurations and options to suit your event style.`,
			}, //? for now let's only allow for one package
			reviews: [
				{
					user: {
						//? this will be an id in the future once the user database is set
						id: generateKey(),
						name: "Sarah Mitchell",
						title: "Event Planner",
					},
					stars: 5,
					subject: "An Unforgettable Event Experience at SpectraFields",
					body: "I recently had the pleasure of hosting an event at SpectraFields, and it was an absolute dream come true! The venue's flexibility in terms of seating arrangements and the impeccable maintenance of the turf truly made a significant difference in creating a memorable atmosphere. Jennifer and her team went above and beyond to ensure our event was a success. The state-of-the-art audio-visual equipment added a special touch, and their professional event staff was there at every turn, making sure everything ran smoothly. Our client was delighted, and so were we. SpectraFields truly lives up to its name as a place where dreams take center stage. We can't wait to plan our next event here!",
				},
				{
					user: {
						//? this will be an id in the future once the user database is set
						id: generateKey(),
						name: "Sarah Mitchell",
						title: "Event Planner",
					},
					stars: 5,
					subject: "An Unforgettable Event Experience at SpectraFields",
					body: "I recently had the pleasure of hosting an event at SpectraFields, and it was an absolute dream come true! The venue's flexibility in terms of seating arrangements and the impeccable maintenance of the turf truly made a significant difference in creating a memorable atmosphere. Jennifer and her team went above and beyond to ensure our event was a success. The state-of-the-art audio-visual equipment added a special touch, and their professional event staff was there at every turn, making sure everything ran smoothly. Our client was delighted, and so were we. SpectraFields truly lives up to its name as a place where dreams take center stage. We can't wait to plan our next event here!",
				},
			],
		};

		return handleSuccess("Works ig", data);
	} catch (e: any) {
		return handleError("Could not get the venue", e);
	}
}

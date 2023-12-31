const VENUES = [
	{
		name: "Golden Palace Hotel",
		desc: "A luxurious hotel with modern amenities and scenic views. Ideal for events, conferences, and accommodation.",
		services: ["Free WiFi", "Event Planning Assistance", "Catering Services"],
		price: {
			amount: 300,
			currency: "USD",
			duration: "per night",
		},
		rating: 4.7,
	},
	{
		name: "Sunset Gardens Wedding Venue",
		desc: "A stunning outdoor venue perfect for weddings and receptions. Beautifully landscaped gardens with panoramic views.",
		services: [
			"Event Coordination",
			"Outdoor Ceremony Spaces",
			"Customizable Decor",
		],
		price: {
			amount: 500,
			currency: "USD",
			duration: "per hour",
		},
		rating: 4.9,
	},
	{
		name: "Tech Hub Conference Center",
		desc: "State-of-the-art conference facility equipped with advanced technology. Ideal for corporate events and seminars.",
		services: [
			"Audiovisual Equipment",
			"High-speed Internet",
			"Catering Options",
		],
		price: {
			amount: 150,
			currency: "USD",
			duration: "per hour",
		},
		rating: 4.5,
	},
	{
		name: "The Oasis Resort",
		desc: "A serene resort offering a range of recreational activities. Suitable for vacations and team retreats.",
		services: ["Swimming Pool", "Spa and Wellness Center", "Adventure Tours"],
		price: {
			amount: 2000,
			currency: "USD",
			duration: "per day",
		},
		rating: 4.6,
	},
	{
		name: "Crystal Ballroom Events Center",
		desc: "An elegant events center suitable for weddings, galas, and corporate functions. Offers a grand ambiance and customizable event spaces.",
		services: ["Event Coordination", "Banquet Catering", "Audiovisual Setup"],
		price: {
			amount: 600,
			currency: "USD",
			duration: "per hour",
		},
		rating: 4.8,
	},
	{
		name: "Tranquil Waterside Retreat",
		desc: "A peaceful waterfront retreat with picturesque views. Perfect for intimate gatherings and weekend getaways.",
		services: ["Private Dock Access", "Scenic Outdoor Areas", "BBQ Facilities"],
		price: {
			amount: 400,
			currency: "USD",
			duration: "per night",
		},
		rating: 4.9,
	},
	{
		name: "Downtown Loft Event Space",
		desc: "A modern loft-style event space in the heart of the city. Ideal for trendy social gatherings and art exhibitions.",
		services: ["Open Floor Plan", "Artistic Decor", "Catering Options"],
		price: {
			amount: 800,
			currency: "USD",
			duration: "per hour",
		},
		rating: 4.6,
	},
	{
		name: "Mountain View Lodge",
		desc: "A cozy lodge nestled in the mountains. Perfect for nature retreats, hiking excursions, and team building events.",
		services: ["Hiking Trails Access", "Bonfire Areas", "Conference Rooms"],
		price: {
			amount: 2500,
			currency: "USD",
			duration: "per day",
		},
		rating: 4.7,
	},
	{
		name: "Urban Rooftop Bar",
		desc: "A trendy rooftop bar offering city skyline views. Suitable for social events, cocktail parties, and receptions.",
		services: ["Skyline Views", "Cocktail Menu", "Music Entertainment"],
		price: {
			amount: 300,
			currency: "USD",
			duration: "per hour",
		},
		rating: 4.5,
	},
	{
		name: "Serenity Beach Resort",
		desc: "A serene beachfront resort with luxurious amenities. Ideal for destination weddings and leisure vacations.",
		services: [
			"Beachfront Access",
			"Spa and Wellness Facilities",
			"Water Sports",
		],
		price: {
			amount: 3500,
			currency: "USD",
			duration: "per night",
		},
		rating: 4.8,
	},
];

const keywords = "g".split(" ");
let venues = VENUES.filter((venue) => {
	let valid = false;
	keywords.forEach((keyword) => {
		if (venue.name.includes(keyword)) valid = true;
	});

	return valid;
});

console.log(venues);

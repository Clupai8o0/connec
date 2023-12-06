"use client";

import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { generateKey } from "@/lib/api";
import { Search, Star } from "lucide-react";
import { Button } from "../ui/button";
import Profile from "../content/Profile";

const SERVICES = [
  {
    name: "Event Planning Assistance",
    desc: "Comprehensive assistance in planning and organizing events, ensuring every detail is meticulously managed.",
    profile: {
      name: "Alexandra Johnson",
      profilePicture: "/profile-pic-1.jpg",
      email: "alexandra@example.com"
    },
    price: 80,
    rating: 4.9
  },
  {
    name: "Photography Services",
    desc: "Professional photography services capturing the essence of events, providing high-quality images.",
    profile: {
      name: "Daniel Smith",
      profilePicture: "/profile-pic-2.jpg",
      email: "daniel@example.com"
    },
    price: 100,
    rating: 4.8
  },
  {
    name: "Catering Services",
    desc: "Exquisite catering services offering a diverse range of culinary delights for events and gatherings.",
    profile: {
      name: "Sophia Garcia",
      profilePicture: "/profile-pic-3.jpg",
      email: "sophia@example.com"
    },
    price: 120,
    rating: 4.7
  },
  {
    name: "Audiovisual Equipment Rental",
    desc: "Advanced audiovisual equipment rental for presentations, entertainment, and event setup.",
    profile: {
      name: "William Turner",
      profilePicture: "/profile-pic-4.jpg",
      email: "william@example.com"
    },
    price: 90,
    rating: 4.6
  },
  {
    name: "DJ Services",
    desc: "Professional DJ services providing music entertainment for various events and parties.",
    profile: {
      name: "Olivia Davis",
      profilePicture: "/profile-pic-5.jpg",
      email: "olivia@example.com"
    },
    price: 110,
    rating: 4.9
  },
  {
    name: "Venue Decoration",
    desc: "Creative and customizable venue decoration services to enhance the ambiance of events.",
    profile: {
      name: "Ethan Wilson",
      profilePicture: "/profile-pic-6.jpg",
      email: "ethan@example.com"
    },
    price: 85,
    rating: 4.5
  },
  {
    name: "Bartending Services",
    desc: "Professional bartending services providing exquisite drinks and cocktail mixes for events.",
    profile: {
      name: "Ava Martinez",
      profilePicture: "/profile-pic-7.jpg",
      email: "ava@example.com"
    },
    price: 95,
    rating: 4.7
  },
  {
    name: "Valet Parking Services",
    desc: "Efficient valet parking services ensuring convenience and security for event attendees.",
    profile: {
      name: "Noah Brown",
      profilePicture: "/profile-pic-8.jpg",
      email: "noah@example.com"
    },
    price: 75,
    rating: 4.6
  },
  {
    name: "Live Band Entertainment",
    desc: "Live band performances offering a vibrant and engaging musical experience for events.",
    profile: {
      name: "Mia Rodriguez",
      profilePicture: "/profile-pic-9.jpg",
      email: "mia@example.com"
    },
    price: 150,
    rating: 4.8
  },
  {
    name: "Floral Arrangement Services",
    desc: "Elegant floral arrangement services to adorn events with exquisite floral designs.",
    profile: {
      name: "Liam Clark",
      profilePicture: "/profile-pic-10.jpg",
      email: "liam@example.com"
    },
    price: 70,
    rating: 4.7
  }
];


const ServiceSearch = () => {
	const [search, setSearch] = useState("");
	const [services, setServices] = useState<typeof SERVICES>(SERVICES);
	const [booked, setBooked] = useState("");

	useEffect(() => {
		setServices(
			SERVICES.filter((service) => {
				const keywords = search.split(" ");
				let valid = false;

				keywords.forEach((keyword) => {
					if (service.name.toLowerCase().includes(keyword)) valid = true;
					if (service.desc.toLowerCase().includes(keyword)) valid = true;
					if (service.profile.name.toLowerCase().includes(keyword)) valid = true;
					if (keyword.includes(String(service.price))) valid = true;
				});

				return valid;
			})
		);
	}, [search]);

	return (
		<div className="border border-gray-200 rounded-md w-full">
			<div className="flex items-center border-b border-gray-200 px-2">
				<Search className="w-6 h-6" />
				<Input
					placeholder="e.g. Venue with free Wi-Fi..."
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					className="border-0"
				/>
			</div>

			<div className="flex flex-col h-[300px] overflow-y-auto w-full">
				{services.map((service) => (
					<div key={generateKey()} className="flex gap-4 p-4">
						<img
							src={`/service-${Math.floor(Math.random() * 9) + 1}.jpg`}
							alt="service"
							className="w-1/3 h-full rounded-md"
						/>

						<div className="w-1/2 flex flex-col justify-center">
							<h2 className="subsubheading">{service.name}</h2>
							<p>{service.desc}</p>
							<div className="flex justify-between">
								<span className="large">
									${service.price} per hour
								</span>
								<span className="flex gap-2">
									<Star fill="true" /> {service.rating}
								</span>
							</div>
						</div>

						<div className="w-1/6 flex flex-col justify-center gap-2 h-full">
							<Button
								className="w-full"
								variant={(booked === service.name && "outline") || "default"}
								disabled={booked === service.name && true}
								onClick={() => setBooked(service.name)}
							>
								{booked === service.name ? "Booked" : "Book Now"}
							</Button>
							<Button className="w-full" variant="secondary">
								Contact
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ServiceSearch;

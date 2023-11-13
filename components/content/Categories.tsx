import Image from "next/image";

import { CategoryType } from "@/types";
import { Button } from "../ui/button";
import { generateKey } from "@/lib/api";

async function getCategories(type: CategoryType) {
	//todo: this server link has to be changed I don't trust it
	const resp = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER}api/categories?type=${type}`
	);
	const data = await resp.json();
	return data.data;
}

const Categories = async () => {
  //todo: need to give these proper types
  const events: any[] = await getCategories(CategoryType.Events);
  const services: any[] = await getCategories(CategoryType.Services);
  const venues: any[] = await getCategories(CategoryType.Venues);

	return (
		<div className="main">
			<h1 className="title mb-8">Categories</h1>

			<div className="mb-8">
				<div className="flex justify-between">
					<h1 className="heading">Events</h1>
					<Button>View More</Button>
				</div>
				<div className="grid grid-cols-3 lg:grid-cols-6">
					{events.slice(0, 6).map(
						(
							event: any //todo: need to give this proper types for safety
						) => (
							//todo: also this is supposed to be a link to categories page, but I'm not sure of implementing that yet
							<div className="flex flex-col items-center rounded-xl py-8 cursor-pointer hover:bg-gray-100">
								<Image
									src={event.icon.src}
									height={64}
									width={64}
									className="object-cover"
									alt={event.icon.alt}
								/>
								<p className="large">{event.name}</p>
							</div>
						)
					)}
				</div>
			</div>

			<div className="mb-8">
				<div className="flex justify-between">
					<h1 className="heading">Services</h1>
					<Button>View More</Button>
				</div>
				<div className="grid grid-cols-3 lg:grid-cols-6">
					{services.slice(0, 6).map(
						(
							service: any //todo: need to give this proper types for safety
						) => (
							//todo: also this is supposed to be a link to categories page, but I'm not sure of implementing that yet
							<div className="flex flex-col items-center rounded-xl py-8 cursor-pointer hover:bg-gray-100">
								<Image
									src={service.icon.src}
									height={64}
									width={64}
									className="object-cover"
									alt={service.icon.alt}
								/>
								<p className="large">{service.name}</p>
							</div>
						)
					)}
				</div>
			</div>
			<div className="mb-8">
				<div className="flex justify-between">
					<h1 className="heading">Venues</h1>
					<Button>View More</Button>
				</div>
				<div className="grid grid-cols-3 lg:grid-cols-6">
					{venues.slice(0, 6).map(
						(
							venue: any //todo: need to give this proper types for safety
						) => (
							//todo: also this is supposed to be a link to categories page, but I'm not sure of implementing that yet
							<div className="flex flex-col items-center rounded-xl py-8 cursor-pointer hover:bg-gray-100">
								<Image
									src={venue.icon.src}
									height={64}
									width={64}
									className="object-cover"
									alt={venue.icon.alt}
								/>
								<p className="large">{venue.name}</p>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Categories;

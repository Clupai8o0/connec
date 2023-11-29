import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import VenueCard from "./VenueCard";

import { ArrowRight } from "lucide-react";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const Events = () => {
	return (
		<div className="p-6">
			{/* <Link href="/app/create/venue">
				<Button>Create Venue</Button>
			</Link> */}

			<h1 className="title">Venues</h1>

			<div className="mt-4 flex gap-2">
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Filters" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="filter-1">Filter 1</SelectItem>
						<SelectItem value="filter-2">Filter 2</SelectItem>
						<SelectItem value="filter-3">Filter 3</SelectItem>
					</SelectContent>
				</Select>
				<Select>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Sort By" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="rating">Rating</SelectItem>
						<SelectItem value="rating">Rating</SelectItem>
						<SelectItem value="rating">Rating</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="flex flex-col gap-8 mt-6">
				<div>
					<div className="flex justify-between items-center">
						<div>
							<h2 className="heading pb-0">Created</h2>
							<p className="muted">
								The venues you have created will appear here
							</p>
						</div>
						<Link href="/app/create/venue">
							<Button>Create Venue</Button>
						</Link>
					</div>

					<div className="flex gap-4">
						<VenueCard />
					</div>
				</div>

				<div>
					<div className="flex justify-between">
						<div>
							<h2 className="heading pb-0">Saved</h2>
							<p className="muted">
								The venues you have saved will appear here
							</p>
						</div>
						<Button
							variant="ghost"
							className="flex gap-2 text-gray-600 hover:text-gray-900"
						>
							View More <ArrowRight />{" "}
						</Button>
					</div>

					<div className="flex gap-4">
						<VenueCard />
						<VenueCard />
						<VenueCard />
						<VenueCard />
					</div>
				</div>

				<div>
					<h2 className="heading pb-0">Previously Visited</h2>
					<p className="muted">
						The venues you previously visited or used will appear here
					</p>

					<div className="flex gap-4">
						<VenueCard />
						<VenueCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;

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
import EventCard from "./EventCard";

const Events = () => {
	return (
		<div className="p-6 w-full min-h-[90vh]">
			{/* <Link href="/app/create/venue">
				<Button>Create Venue</Button>
			</Link> */}

			<h1 className="title">Events</h1>

			<div className="flex justify-center items-center flex-col w-full h-full">
				<h1 className="heading text-gray-700 mb-8">
					You haven&apos;t saved or created any events yet
				</h1>
				<div className="flex gap-2">
					<Link href="/app/create/event">
						<Button>Create Event</Button>
					</Link>
					<Button variant="ghost">Browse Events</Button>
				</div>
			</div>

			{/* <div className="mt-4 flex gap-2">
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
				<Link href="/app/create/event">
					<Button>Start an Event</Button>
				</Link>
			</div> */}

			{/* <ol className="relative border-s border-gray-200 dark:border-gray-700 mt-6">
				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						Today, 30th November, 2023
					</time>

					<EventCard />
				</li>

				<li className="mb-10 ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						March 2022
					</time>
					<div className="flex flex-col gap-2">
						<EventCard />
						<EventCard />
					</div>
				</li>
				<li className="ms-4">
					<div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
					<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
						April 2022
					</time>
					<EventCard />
				</li>
			</ol> */}
		</div>
	);
};

export default Events;

import Link from "next/link";
import React from "react";

const EventCard = () => {
	return (
		<Link
			href="/event/123"
			className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-lg shadow md:flex-row w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
		>
			<img
				className="object-cover w-full rounded-t-lg h-full md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
				src="/concert.jpg"
				alt=""
			/>
			<div className="flex flex-col justify-between p-4 leading-normal max-w-full overflow-hidden">
				{/* <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> */}
				<h2 className="subheading">
					Sounds of Bahrain: A Night with Hala Al Turk
				</h2>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate max-w-full">
					Experience the enchanting melodies and vibrant rhythms of Bahrain's
					musical sensation, Hala Al Turk, in an exclusive concert celebrating
					the rich cultural heritage of Bahraini music.
				</p>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					Ticket Price: $40
				</p>
			</div>
		</Link>
	);
};

export default EventCard;

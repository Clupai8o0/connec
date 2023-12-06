"use client";

import { DashboardContent } from "@/types";
import { CalendarCheck2, Map, Speech } from "lucide-react";
import React, { SetStateAction } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
	profile?: {
		url: string;
		src: string;
		name: string;
		title: string;
	};
	venues?: string;
	services?: string;
	events?: string;
}

const Sidebar = ({
	profile,
	venues,
	services,
	events,
}: Props) => {
	const pathname = usePathname().split("/")[3];

	return (
		<div className="flex min-h-full flex-col justify-between border-e bg-white">
			<div className="px-4 py-6">
				<ul className="mt-6 space-y-1">
					<li>
						<Link
							href={(venues && venues) || "/app/dashboard/venues"}
							className={`flex items-center gap-x-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 w-full ${
								pathname === DashboardContent.Venues
									? "text-blue-500 bg-gray-100"
									: "hover:bg-gray-100 hover:text-gray-700"
							}`}
						>
							<Map /> <span>Venues</span>
						</Link>
					</li>
					<li>
						<Link
							href={(services && services) || "/app/dashboard/services"}
							className={`flex items-center gap-x-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 w-full ${
								pathname === DashboardContent.Services
									? "text-blue-500 bg-gray-100"
									: "hover:bg-gray-100 hover:text-gray-700"
							}`}
						>
							<Speech /> <span>Services</span>
						</Link>
					</li>

					<li>
						<Link
							href={(events && events) || "/app/dashboard/events"}
							className={`flex items-center gap-x-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 w-full ${
								pathname === DashboardContent.Events
									? "text-blue-500 bg-gray-100"
									: "hover:bg-gray-100 hover:text-gray-700"
							}`}
						>
							<CalendarCheck2 /> <span>Events</span>
						</Link>
					</li>
				</ul>
			</div>

			<div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
				<Link
					href={(profile && profile.url) || "/app/dashboard/profile"}
					className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 w-full ${
						pathname === DashboardContent.Profile
							? "text-blue-500 bg-gray-100"
							: "hover:bg-gray-100 hover:text-gray-700"
					}`}
					// className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
				>
					<img
						alt="Man"
						src={
							(profile && profile.src) ||
							"https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
						}
						className="h-10 w-10 rounded-full object-cover"
					/>

					<div className="overflow-hidden w-full">
						<p className="text-xs text-start">
							<strong className="block font-medium">
								{(profile && profile.name) || "Eric Frusciante"}
							</strong>
							<span>{(profile && profile.title) || "Non Profit Worker"}</span>
						</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;

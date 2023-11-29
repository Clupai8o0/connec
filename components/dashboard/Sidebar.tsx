"use client";

import { DashboardContent } from "@/types";
import { CalendarCheck2, Map, Speech } from "lucide-react";
import React, { SetStateAction } from "react";

interface Props {
	content: DashboardContent;
	setContent: React.Dispatch<SetStateAction<DashboardContent>>;
}

const Sidebar = ({ content, setContent }: Props) => {
	return (
		<div className="flex h-screen flex-col justify-between border-e bg-white">
			<div className="px-4 py-6">
				<ul className="mt-6 space-y-1">
					<li>
						<button
							onClick={() => setContent(DashboardContent.Venues)}
							className={`flex items-center gap-x-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 w-full ${
								content === DashboardContent.Venues
									? "text-blue-500 bg-gray-100"
									: "hover:bg-gray-100 hover:text-gray-700"
							}`}
						>
							<Map /> <span>Venues</span>
						</button>
					</li>
					<li>
						<button
							onClick={() => setContent(DashboardContent.Services)}
							className={`flex items-center gap-x-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 w-full ${
								content === DashboardContent.Services
									? "text-blue-500 bg-gray-100"
									: "hover:bg-gray-100 hover:text-gray-700"
							}`}
						>
							<Speech /> <span>Services</span>
						</button>
					</li>

					<li>
						<button
							onClick={() => setContent(DashboardContent.Events)}
							className={`flex items-center gap-x-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 w-full ${
								content === DashboardContent.Events
									? "text-blue-500 bg-gray-100"
									: "hover:bg-gray-100 hover:text-gray-700"
							}`}
						>
							<CalendarCheck2 /> <span>Events</span>
						</button>
					</li>
				</ul>
			</div>

			<div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
				<button
					onClick={() => setContent(DashboardContent.Profile)}
					className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 w-full ${
						content === DashboardContent.Profile
							? "text-blue-500 bg-gray-100"
							: "hover:bg-gray-100 hover:text-gray-700"
					}`}
					// className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
				>
					<img
						alt="Man"
						src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
						className="h-10 w-10 rounded-full object-cover"
					/>

					<div>
						<p className="text-xs text-start">
							<strong className="block font-medium">Eric Frusciante</strong>

							<span> eric@frusciante.com </span>
						</p>
					</div>
				</button>
			</div>
		</div>
	);
	// return (
	// 	<div className="flex h-screen w-16 flex-col justify-between border-e bg-white">
	// 		<div>
	// 			{/* //todo: profile */}
	// 			<div className="inline-flex h-16 w-16 items-center justify-center">
	// 				<span className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
	// 					L
	// 				</span>
	// 			</div>

	// 			<div className="border-t border-gray-100">
	// 				<div className="px-2">
	// 					<ul className="space-y-1 pt-4">
	// 						<li className="flex justify-center">
	// 							<button
	// 								onClick={() => setContent(DashboardContent.Events)}
	// 								className={`group relative flex justify-center rounded px-2 py-1.5 ${
	// 									content === DashboardContent.Events
	// 										? "text-blue-700 bg-blue-50"
	// 										: "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
	// 								}`}
	// 							>
	// 								<CalendarCheck2 className="h-5 w-5 opacity-75" />
	// 								<span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
	// 									Events
	// 								</span>
	// 							</button>
	// 						</li>

	// 						<li className="flex justify-center">
	// 							<button
	// 								onClick={() => setContent(DashboardContent.Services)}
	// 								className={`group relative flex justify-center rounded px-2 py-1.5 ${
	// 									content === DashboardContent.Services
	// 										? "text-blue-700 bg-blue-50"
	// 										: "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
	// 								}`}
	// 							>
	// 								<Speech className="w-5 h-5 opacity-75" />
	// 								<span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
	// 									Services
	// 								</span>
	// 							</button>
	// 						</li>

	// 						<li className="flex justify-center">
	// 							<button
	// 								onClick={() => setContent(DashboardContent.Venues)}
	// 								className={`group relative flex justify-center rounded px-2 py-1.5 ${
	// 									content === DashboardContent.Venues
	// 										? "text-blue-700 bg-blue-50"
	// 										: "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
	// 								}`}
	// 							>
	// 								<Map className="w-5 h-5 opacity-75" />
	// 								<span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
	// 									Venues
	// 								</span>
	// 							</button>
	// 						</li>
	// 					</ul>
	// 				</div>
	// 			</div>
	// 		</div>

	// 		<div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
	// 			{/* //todo:logout action */}
	// 			<form action="/logout">
	// 				<button
	// 					type="submit"
	// 					className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
	// 				>
	// 					<svg
	// 						xmlns="http://www.w3.org/2000/svg"
	// 						className="h-5 w-5 opacity-75"
	// 						fill="none"
	// 						viewBox="0 0 24 24"
	// 						stroke="currentColor"
	// 						strokeWidth="2"
	// 					>
	// 						<path
	// 							strokeLinecap="round"
	// 							strokeLinejoin="round"
	// 							d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
	// 						/>
	// 					</svg>

	// 					<span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
	// 						Logout
	// 					</span>
	// 				</button>
	// 			</form>
	// 		</div>
	// 	</div>
	// );
};

export default Sidebar;

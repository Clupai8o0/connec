"use client";

import ArtistProfile from "@/components/dashboard/ArtistProfile";
import BusinessProfile from "@/components/dashboard/BusinessProfile";
import Events from "@/components/dashboard/Events";
import Profile from "@/components/dashboard/Profile";
import Services from "@/components/dashboard/Services";
import Sidebar from "@/components/dashboard/Sidebar";
import Venues from "@/components/dashboard/Venues";

import { DashboardContent } from "@/types";
import { useState } from "react";

function Dashboard() {
	const [content, setContent] = useState<DashboardContent>(
		DashboardContent.Profile
	);

	return (
		<div className="flex w-full h-full">
			<Sidebar content={content} setContent={setContent} />
			<main className="w-full mb-12">
				{content === DashboardContent.Profile && <ArtistProfile />}
				{content === DashboardContent.Venues && <Venues />}
				{content === DashboardContent.Services && <Services />}
				{content === DashboardContent.Events && <Events />}
			</main>
		</div>
	);
}

export default Dashboard;

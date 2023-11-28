"use client";

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
		<div className="flex">
			<Sidebar content={content} setContent={setContent} />
			<main>
				{content === DashboardContent.Profile && <Profile />}
				{content === DashboardContent.Venues && <Venues />}
				{content === DashboardContent.Services && <Services />}
				{content === DashboardContent.Events && <Events />}
			</main>
		</div>
	);
}

export default Dashboard;

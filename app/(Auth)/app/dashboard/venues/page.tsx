import Sidebar from "@/components/dashboard/Sidebar";
import Venues from "@/components/dashboard/Venues";
import React from "react";

function VenuesPage() {
	return (
		<>
			<Sidebar
				profile={{
					title: "Golden Palace Hotle Owner",
					name: "Prakhar",
					src: "/prakhar.jpg",
					url: "/prakhar",
				}}
			/>
			<Venues />
		</>
	);
}

export default VenuesPage;

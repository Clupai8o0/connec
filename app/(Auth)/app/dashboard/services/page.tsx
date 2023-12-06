import Services from "@/components/dashboard/Services";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";

function ServicesPage() {
	return (
		<>
			<Sidebar
				profile={{
					title: "Singer",
					name: "Reem",
					src: "/reem.jpg",
					url: "/reem",
				}}
			/>
			<Services />
		</>
	);
}

export default ServicesPage;

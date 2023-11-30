import type { Metadata } from "next";

import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import Banner from "@/components/content/Banner";
import Sidebar from "@/components/dashboard/Sidebar";

export const metadata: Metadata = {
	title: "Connec",
	description: "Generated by create next app",
};

export default function ContentLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col w-full h-full">
			<Banner />
			<Navbar />
			<div className="flex h-full">
				<Sidebar />
				<main className="mb-12 max-w-[100vw] overflow-hidden">
					{children}
				</main>
			</div>
		</div>
	);
}
"use client";

import { Bell } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { createClient } from "@supabase/supabase-js";
import { Button } from "../ui/button";
import Link from "next/link";

function Notification() {
	const client = createClient(
		process.env.NEXT_PUBLIC_SUPABASE_URL || "",
		process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
	);
	const [requested, setRequested] = useState(false);

	useEffect(() => {
		(async () => {
			const { data, error } = await client.from("contract").select();

			if (data?.length !== 0 && data !== null) {
				if (data[0].verified === false) setRequested(true);
			} else {
				setRequested(false);
			}
		})();
	});

	return (
		<div>
			<Popover>
				<PopoverTrigger asChild>
					<Button variant="ghost" className="relative">
						<Bell />
						{requested && (
							<div className="absolute top-2 right-4 w-2 h-2 bg-red-500 rounded-full"></div>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-[400px]">
					<Link
						href="/auth/contract"
						className="w-full flex items-center gap-2"
					>
						<img
							src={"/reem.jpg"}
							width={64}
							height={64}
							alt="A random avatar from faker"
							className="rounded-full"
						/>

						<div className="flex flex-col">
							<h1 className="large">Venue Request</h1>
							<h2 className="muted">
								Harmonious Reverie: Reem&apos;s Melodic Voyage
							</h2>
						</div>
					</Link>
				</PopoverContent>
			</Popover>
		</div>
	);
}

export default Notification;

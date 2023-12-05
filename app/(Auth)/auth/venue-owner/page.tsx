"use client";

import { useUser, useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PaginatedForm from "@/components/form/PaginatedForm";
import * as z from "zod";
import { ControlTypes } from "@/types";
import { generateKey } from "@/lib/api";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import CategoryCard from "@/components/form/CategoryCard";

//* after signing up the user will be redirected here

//todo: check if user has already given important details
//todo: if they haven't then make them add those details
function VenueOwnerSetup() {
	const router = useRouter();
	const { isLoaded, isSignedIn, user } = useUser();

	const [name, setName] = useState("");
	const [title, setTitle] = useState("");

	useEffect(() => {
		//todo: check if user has already finished "get-started"
		const hasFinishedSetup = false;

		if (hasFinishedSetup) router.replace("/app/dashboard");
	}, [isLoaded, isSignedIn]);

	return (
		<div className="w-full">
			<PaginatedForm
				forms={[
					//todo: tbf the best approach would instead be through functions
					{
						title: "Final Step",
            desc: "As a venue owner",
						onSubmit: async (e: React.FormEvent<HTMLFormElement>) => {
							// send data to some api to upload that info
						},
						elements: [
							{
								name: "name",
								label: "Full Name",
								control: (
									<Input placeholder="e.g. John Doe" key={generateKey()} />
								),
								desc: "This is the name that will be displayed on your profile",
							},
						],
					},
				]}
			/>
		</div>
	);
}

export default VenueOwnerSetup;

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
function ArtistSetup() {
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
						title: "Final step",
            desc: "",
						onSubmit: async (e: React.FormEvent<HTMLFormElement>) => {
							// send data to some api to upload that info
						},
						elements: [
							{
								name: "appearance",
								label: "Describe your Appearance",
								control: (
									<Textarea placeholder="e.g. 170cm Asian..." key={generateKey()} />
								),
								desc: "Describe how you look in person so that people can verify it is you."
							},
						],
					},
				]}
			/>
		</div>
	);
}

export default ArtistSetup;

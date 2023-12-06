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
function GetStarted() {
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
						title: "What should we call you?",
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
					{
						title: "What is your current position",
						onSubmit: async (values: { pos: string }) => {
							// send data to some api to upload that info
						},
						elements: [
							{
								name: "pos",
								label: "Position",
								control: (
									<Input
										placeholder="e.g. Senior Developer at Facebook"
										key={generateKey()}
									/>
								),
								desc: "Describe what you do in a single line (Student, CEO, Non-profit worker etc.)",
							},
						],
					},
					{
						title: "Tell us about yourself",
						onSubmit: async (values: { bio: string }) => {
							// send data to some api to upload that info
						},
						elements: [
							{
								name: "bio",
								label: "Bio",
								control: (
									<Textarea
										placeholder="Write about yourself here..."
										className="w-full"
									/>
								),
								desc: "Your bio will be shown on your profile",
							},
						],
					},
					{
						title: "Show us how you look", //todo: dunno what to do bout this one
						onSubmit: async (values: { name: string }) => {
							// send data to some api to upload that info
						},
						elements: [
							{
								name: "pic",
								label: "Profile Picture",
								control: <Input type="file" />,
								desc: "This is the picture that will be shown on your profile",
							},
						],
					},
					{
						title: "Final Step", //todo: dunno what to do bout this one
						desc: "Do any of these categories match your goal?",
						onSubmit: async (values: { name: string }) => {
							// send data to some api to upload that info
						},
						elements: [
							{
								name: "categories",
								label: "Categories",
								control: (
									<div className="grid grid-cols-4 w-auto gap-2">
										<CategoryCard
											href="/app/dashboard/profile"
											desc="Do you own any venue and would like to put it up for rent?"
											label="Venue Owner"
											src="/venue-owner.jpg"
										/>
										<CategoryCard
											href="/auth/artist"
											desc="Are you an artist looking to put together a tour?"
											label="Artist"
											src="/artist.jpg"
										/>
										<CategoryCard
											href="/"
											desc="Are you someone capable of providing a service and would like to do so?"
											label="Service Provider"
											src="/service-provider.jpg"
										/>
										<CategoryCard
											href="/"
											desc="If none of these categories fit you, then you can still continue using our app."
											label="Not sure yet?"
											src="/not-sure.jpg"
										/>
									</div>
								),
								desc: "Click whichever category matches your agenda",
							},
						],
					},
				]}
			/>
		</div>
	);
}

export default GetStarted;

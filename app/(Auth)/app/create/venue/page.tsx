"use client";

import * as z from "zod";

import PaginatedForm from "@/components/form/PaginatedForm";
import { ControlTypes } from "@/types";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Price from "@/components/form/Price";

const CreateVenue = () => {
	return (
		<div className="w-full">
			<PaginatedForm
				forms={[
					// {
					// 	title: "What is the name of your venue?",
					// 	onSubmit: async (values) => {},
					// 	elements: [
					// 		{
					// 			name: "name",
					// 			label: "Venue name",
					// 			control: <Input placeholder="e.g. National Stadium..." />,
					// 			desc: "Give a catchy name of your venue",
					// 		},
					// 	],
					// },
					// {
					// 	title: "Describe your venue",
					// 	onSubmit: async (values) => {},
					// 	elements: [
					// 		{
					// 			name: "desc",
					// 			label: "Description",
					// 			control: <Textarea placeholder="Describe your venue here" />,
					// 			desc: "This description will appear on your venue once published",
					// 		},
					// 	],
					// },
					// {
					// 	title: "Where is your venue located?",
					// 	onSubmit: async (values) => {},
					// 	elements: [
					// 		{
					// 			name: "address",
					// 			label: "Address",
					// 			control: (
					// 				<Input placeholder="e.g. Building 123 Road 1000 City..." />
					// 			),
					// 			desc: "The address should contain all the necessary details",
					// 		},
					// 		{
					// 			name: "map",
					// 			label: "Google Map",
					// 			control: (
					// 				<Textarea placeholder="e.g. <iframe src='https://www.google.com/maps/embed?pb=..." />
					// 			),
					// 			desc: "Copy and paste the google map embed here",
					// 		},
					// 	],
					// },
					{
						title: "What does your venue offer",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "price",
								label: "Price",
								control: <Price />,
								desc: "The price you will charge for your venue.",
							},
							{
								name: "services",
								label: "Services",
								control: (
									<Textarea placeholder="e.g. 1. Free Wi-Fi..." />
								),
								desc: "List all the services that your venue will offer",
							},
						],
					},
				]}
				destination="/venue/123"
			/>
		</div>
	);
};

export default CreateVenue;

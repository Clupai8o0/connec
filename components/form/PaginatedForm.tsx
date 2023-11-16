"use client";

import * as z from "zod";

import FormPage from "./FormPage";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface Props {
	forms: {
		title: string;
		desc?: string;
		elements: {}[];
	}[];
}

export enum ControlTypes {
	Input = "input",
	Date = "date",
	Location = "location",
	Textarea = "textarea",
	File = "file",
}

// location?
// profile picture
const forms = [
	{
		title: "What should we call you?",
		schema: z.object({
			name: z.string().min(5, {
				message: "Name must be at least 5 characters",
			}),
		}),
		onSubmit: async (values: { name: string }) => {
			// send data to some api to upload that info
		},
		elements: [
			{
				name: "name",
				label: "Full Name",
				control: {
					type: ControlTypes.Input,
					fields: {
						placeholder: "e.g. Samridh Limbu...",
					},
				},
				desc: "This is the name that will be displayed on your profile",
			},
		],
	},
	{
		title: "When were you born?",
		schema: z.object({
			dob: z.date({
				required_error: "Date of birth is required",
			}),
		}),
		onSubmit: async (values: { dob: string }) => {
			// send data to some api to upload that info
		},
		elements: [
			{
				name: "dob",
				label: "Date of Birth",
				control: {
					type: ControlTypes.Date,
				},
				desc: "Your date of birth will be used to calculate your age",
			},
		],
	},
	{
		title: "What is your current position",
		schema: z.object({
			pos: z.string().min(5, {
				message: "Your position should be longer than 5 characters",
			}),
		}),
		onSubmit: async (values: { pos: string }) => {
			// send data to some api to upload that info
		},
		elements: [
			{
				name: "pos",
				label: "Position",
				control: {
					type: ControlTypes.Input,
					fields: {
						placeholder: "e.g. Senior Developer at Facebook",
					},
				},
				desc: "Describe what you do in a single line (Student, CEO, Non-profit worker etc.)",
			},
		],
	},
	{
		title: "Tell us about yourself",
		schema: z.object({
			bio: z.string({
				required_error: "Your bio cannot be empty",
			}),
		}),
		onSubmit: async (values: { bio: string }) => {
			// send data to some api to upload that info
		},
		elements: [
			{
				name: "bio",
				label: "Bio",
				control: {
					type: ControlTypes.Input,
					fields: {
						placeholder: "Describe yourself...",
					},
				},
				desc: "Your bio will be shown on your profile",
			},
		],
	},
	{
		title: "Where do you live?",
		schema: z.object({
			country: z.string({
				required_error: "Country cannot be empty",
			}),
			state: z.string({
				required_error: "State cannot be empty",
			}),
			city: z.string({
				required_error: "City cannot be empty",
			}),
			street: z.string({
				required_error: "Street Address cannot be empty",
			}),
		}),
		onSubmit: async (values: {
			country: string;
			state: string;
			city: string;
			street: string;
		}) => {
			// send data to some api to upload that info
		},
		elements: [
			{
				//todo: shouldn't this be a dropdown select
				name: "country",
				label: "Country",
				control: {
					type: ControlTypes.Input,
					// fields: { //todo: missing them placeholder tbh
					// 	placeholder: "Building No., Road No...",
					// },
				},
			},
			{
				name: "state",
				label: "State",
				control: {
					type: ControlTypes.Input,
				},
			},
			{
				name: "city",
				label: "City",
				control: {
					type: ControlTypes.Input,
				},
			},
			{
				name: "street",
				label: "Street Address",
				control: {
					type: ControlTypes.Input,
				},
			},
			// {
			// 	name: "location",
			// 	label: "Location on Map",
			// 	control: {
			// 		type: ControlTypes.Location,
			// 	},
			// 	desc: "Your location will be shown on your profile",
			// }, //todo: this only for when setting up venue or business profile?
		],
	},
	{
		title: "Show us how you look", //todo: dunno what to do bout this one
		schema: z.object({
			pic: z.string(),
		}),
		onSubmit: async (values: { name: string }) => {
			// send data to some api to upload that info
		},
		elements: [
			{
				name: "pic",
				label: "Profile Picture",
				control: {
					type: ControlTypes.File,
				},
				desc: "This is the picture that will be shown on your profile",
			},
		],
	},
];

//todo: what about navbar and footer
//todo: progress bar
const PaginatedForm = ({}) => {
	const router = useRouter();

	const [index, setIndex] = useState(0);
	//todo: animation -> initiate and kill animation state?

	const next = () => {
		if (index === forms.length - 1) router.replace("/home"); //todo: do something
		setIndex((prevIndex) => prevIndex + 1);
	};

	return (
		<div className="h-screen flex flex-col">
			{/* //todo: https://www.hyperui.dev/components/application-ui/steps -> for steps */}
			<div className="w-full">
				<div
					className={`bg-blue-600 h-1 transition-all duration-300 ease-in-out`}
					style={{
						width: `${((index + 1) / forms.length) * 100}%`,
					}}
				/>
			</div>

			<div className="max-w-4xl w-full h-full flex items-center mx-auto">
				<FormPage {...forms[index]} next={next} />
			</div>
		</div>
	);
};

export default PaginatedForm;

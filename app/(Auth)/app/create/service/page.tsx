"use client";

import * as z from "zod";

import PaginatedForm from "@/components/form/PaginatedForm";
import { ControlTypes } from "@/types";

const CreateService = () => {
	return (
		<div className="w-full">
			<PaginatedForm
				forms={[
					{
						title: "What is the name of your service?",
						onSubmit: async (values) => {},
						desc: "Give a descriptive name of your service",
						schema: z.object({
							name: z.string().min(3, {
								message: "Name must be more than 3 characters",
							}),
						}),
						elements: [
							{
								name: "name",
								label: "Service name",
								control: {
									type: ControlTypes.Input,
									fields: {
										placeholder: "e.g. Security guard",
									},
								},
							},
						],
					},
					{
						// location on map
						title: "Where is the venue located?",
						onSubmit: async (values) => {},
						// desc: "Give a catchy name of your venue",
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
							location: z.string().optional(), //todo: need to make this map possible
						}),
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
						title: "Describe the venue",
						schema: z.object({
							desc: z.string({
								required_error: "The description cannot be empty",
							}),
						}),
						onSubmit: async (values: { desc: string }) => {
							// send data to some api to upload that info
						},
						elements: [
							{
								name: "desc",
								label: "Description",
								control: {
									type: ControlTypes.Textarea,
									fields: {
										placeholder: "Describe yourself...",
									},
								},
								desc: "Customize your description to your liking. Don't worry you can edit this later.",
							},
						],
					},
					{
						//todo: layout issue
						title: "Describe your timings",
						schema: z.object({
							sat: z.boolean().optional(),
							sun: z.boolean().optional(),
							mon: z.boolean().optional(),
							tue: z.boolean().optional(),
							wed: z.boolean().optional(),
							thu: z.boolean().optional(),
							fri: z.boolean().optional(),
							from: z.string(),
							to: z.string(),
						}),
						onSubmit: async (values: { desc: string }) => {
							// send data to some api to upload that info
						},
						elements: [
							//todo: one for heading?
							{
								name: "sat",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Saturday",
									},
								},
							},
							{
								name: "sun",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Sunday",
									},
								},
							},
							{
								name: "mon",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Monday",
									},
								},
							},
							{
								name: "tue",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Tuesday",
									},
								},
							},
							{
								name: "wed",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Wednesday",
									},
								},
							},
							{
								name: "thu",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Thursday",
									},
								},
							},
							{
								name: "fri",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Friday",
									},
								},
							},
							{
								name: "from",
								label: "From",
								control: {
									type: ControlTypes.Input,
									fields: {
										placeholder: "e.g. 8:00 A.M.",
									},
								},
							},
							{
								name: "to",
								label: "To",
								control: {
									type: ControlTypes.Input,
									fields: {
										placeholder: "e.g. 9:00 P.M.",
									},
								},
							},
						],
					},
					{
						//todo: layout issue
						title: "Describe your timings",
						schema: z.object({
							sat: z.boolean().optional(),
							sun: z.boolean().optional(),
							mon: z.boolean().optional(),
							tue: z.boolean().optional(),
							wed: z.boolean().optional(),
							thu: z.boolean().optional(),
							fri: z.boolean().optional(),
							from: z.string(),
							to: z.string(),
						}),
						onSubmit: async (values: { desc: string }) => {
							// send data to some api to upload that info
						},
						elements: [
							//todo: one for heading?
							{
								name: "sat",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Saturday",
									},
								},
							},
							{
								name: "sun",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Sunday",
									},
								},
							},
							{
								name: "mon",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Monday",
									},
								},
							},
							{
								name: "tue",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Tuesday",
									},
								},
							},
							{
								name: "wed",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Wednesday",
									},
								},
							},
							{
								name: "thu",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Thursday",
									},
								},
							},
							{
								name: "fri",
								control: {
									type: ControlTypes.Checkbox,
									fields: {
										title: "Friday",
									},
								},
							},
							{
								name: "from",
								label: "From",
								control: {
									type: ControlTypes.Input,
									fields: {
										placeholder: "e.g. 8:00 A.M.",
									},
								},
							},
							{
								name: "to",
								label: "To",
								control: {
									type: ControlTypes.Input,
									fields: {
										placeholder: "e.g. 9:00 P.M.",
									},
								},
							},
						],
					},
				]}
			/>
		</div>
	);
};

export default CreateService;

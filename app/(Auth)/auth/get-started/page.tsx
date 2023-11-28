"use client";

import { useUser, useAuth } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import PaginatedForm from "@/components/form/PaginatedForm";
import * as z from "zod";
import { ControlTypes } from "@/types";

//* after signing up the user will be redirected here

//todo: check if user has already given important details
//todo: if they haven't then make them add those details
function GetStarted() {
	const router = useRouter();
	const { isLoaded, isSignedIn, user } = useUser();

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
				]}
			/>
		</div>
	);
}

export default GetStarted;

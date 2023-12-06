"use client";

import * as z from "zod";

import PaginatedForm from "@/components/form/PaginatedForm";
import { ControlTypes } from "@/types";
import { Input } from "@/components/ui/input";
import { generateKey } from "@/lib/api";
import ServiceType from "@/components/form/ServiceType";
import { Textarea } from "@/components/ui/textarea";
import Price from "@/components/form/Price";

const CreateService = () => {
	return (
		<div className="w-full">
			<PaginatedForm
				forms={[
					{
						title: "What is the name of your service?",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "name",
								label: "Service name",
								control: (
									<Input
										placeholder="e.g. Security guard"
										key={generateKey()}
									/>
								),
								desc: "Give a descriptive name of your service",
							},
						],
					},
					{
						title: "What type of service do you offer?",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "type",
								label: "Service Type",
								control: <ServiceType />,
								desc: "Choose the service that matches your type",
							},
						],
					},
					{
						title: "Describe your service",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "desc",
								label: "Description",
								control: (
									<Textarea
										placeholder="Describe your service here"
										key={generateKey()}
									/>
								),
								desc: "Give a brief description of your service including all relevant details",
							},
						],
					},
					{
						title: "Describe your previous experience",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "prev-exp",
								label: "Previous Experience",
								control: (
									<Textarea
										placeholder="Describe your previous experiences with the service here"
										key={generateKey()}
									/>
								),
								desc: "Give a brief description of your previous experiences",
							},
						],
					},
					{
						title: "Upload some pictures of your work",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "portfolio",
								label: "Portfolio",
								control: (
									<div className="flex flex-col gap-2">
										<Input type="file" />
										<Input type="file" />
										<Input type="file" />
										<Input type="file" />
										<Input type="file" />
									</div>
								),
								desc: "Upload 5 pictures to show any work you have done",
							},
						],
					},
					{
						title: "What does your service offer?",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "price",
								label: "Price",
								control: <Price />,
								desc: "The price you will charge for your service.",
							},
							{
								name: "services",
								label: "Services",
								control: (
									<Textarea
										placeholder="List down what you offer with your service"
										key={generateKey()}
									/>
								),
								desc: "List all the details about what your service offers.",
							},
						],
					},
				]}
				destination="/service/123"
			/>
		</div>
	);
};

export default CreateService;

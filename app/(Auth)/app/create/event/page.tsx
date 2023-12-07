"use client";

import * as z from "zod";

import PaginatedForm from "@/components/form/PaginatedForm";
import { ControlTypes } from "@/types";
import { Input } from "@/components/ui/input";
import EventType from "@/components/form/EventType";
import { Textarea } from "@/components/ui/textarea";
import { generateKey } from "@/lib/api";
import TimeDropdown from "@/components/form/TimeDropdown";
import DatePicker from "@/components/form/DatePicker";
import VenueSearch from "@/components/form/VenueSearch";
import ServiceSearch from "@/components/form/ServiceSearch";

const CreateEvent = () => {
	return (
		<div className="w-full">
			<PaginatedForm
				forms={[
					{
						title: "What is the name of your event?",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "name",
								label: "Event name",
								control: <Input placeholder="e.g. Blood Donation Camp at..." />,
								desc: "Give a descriptive name for your event",
							},
						],
					},
					{
						title: "What type of event is it?",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "type",
								label: "Event type",
								control: <EventType />,
								desc: "Give a descriptive name for your event",
							},
						],
					},
					{
						title: "Describe your event",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "desc",
								label: "Description",
								control: (
									<Textarea
										placeholder="Describe your event here"
										key={generateKey()}
									/>
								),
								desc: "Give a brief description of your event including what all is expected to take place",
							},
						],
					},
					{
						title: "When will your event be occurring?",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "time",
								label: "Time",
								control: (
									<div className="flex gap-2 items-center">
										<TimeDropdown placeholder="From" />
										<span className="text-lg">to</span>
										<TimeDropdown placeholder="To" />
									</div>
								),
								desc: "From what time to what time will be the event be occurring",
							},
							{
								name: "date",
								label: "Date",
								control: <DatePicker />,
								desc: "Decide from when to when will your event be occurring.",
							},
						],
					},
					{
						title: "Choose your venue",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "venue",
								label: "Venue",
								control: <VenueSearch />,
							},
						],
					},
					{
						title: "Incorporate your services",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "services",
								label: "Services",
								control: <ServiceSearch />,
							},
						],
					},
					{
						title: "Prepare your tickets",
						onSubmit: async (values) => {},
						elements: [
							{
								name: "general-ticket",
								label: "General Tickets",
								control: <Input placeholder="$0" className="w-[150px]"/>,
								desc: "The price for your normal tickets."
							},
							{
								name: "vip-ticket",
								label: "VIP Tickets",
								control: <Input placeholder="$0" className="w-[150px]"/>,
								desc: "The price for your VIP tickets. Leave empty if you don't plan to have them."
							},
							{
								name: "desc",
								label: "Description",
								control: <Textarea placeholder="Write a final ticket description for your event" />
							}
						],
					},
				]}
				destination={`/app/dashboard/events/${generateKey()}`}
			/>
		</div>
	);
};

export default CreateEvent;

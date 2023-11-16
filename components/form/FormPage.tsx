"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ControlTypes } from "./PaginatedForm";
import DatePicker from "./DatePicker";
import { generateKey } from "@/lib/api";

const FormPage = ({ title, schema, elements, onSubmit, next }: any) => {
	// 1. Define your form.
	const form = useForm<z.infer<typeof schema>>({
		resolver: zodResolver(schema),
	});

	// 2. Define a submit handler.
	function handleSubmit(values: z.infer<typeof schema>) {
		onSubmit(values);
		next();
	}

	return (
		<div>
			<h1 className="title mb-12">{title}</h1>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
					{elements.map((element: any) => (
						<FormField
							key={generateKey()}
							control={form.control}
							name={element.name}
							render={({ field }) => (
								<FormItem className="flex flex-col">
									<FormLabel>{element.label}</FormLabel>
									<FormControl>
										{element.control.type === ControlTypes.Input ? (
											<Input {...field} {...element.control.fields} />
										) : element.control.type === ControlTypes.Date ? (
											<DatePicker field={field} /> //todo: wait how input?
										) : (
											""
										)}
									</FormControl>
									<FormDescription>{element.desc}</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
					<Button type="submit">Next</Button>
				</form>
			</Form>
		</div>
	);
};

export default FormPage;

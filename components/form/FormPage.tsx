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
import DatePicker from "./DatePicker";
import { generateKey } from "@/lib/api";
import { ControlTypes } from "@/types";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";

const ControlInput = ({ element, field }: any) => {
	if (element.control.type === ControlTypes.Input)
		return <Input {...field} {...element.control.fields} />;
	if (element.control.type === ControlTypes.Date)
		return <DatePicker field={field} />;
	if (element.control.type === ControlTypes.Textarea)
		return <Textarea {...field} {...element.control.fields} />;
	if (element.control.type === ControlTypes.Checkbox)
		return (
			<div className="flex gap-2 items-center">
				<Checkbox {...field} {...element.control.fields} />
				<div>
					<p className="small">{element.control.fields.title}</p>
				</div>
			</div>
		);
};

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
										<ControlInput element={element} field={field} />
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

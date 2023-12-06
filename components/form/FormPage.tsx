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
import { generateKey } from "@/lib/api";
import { ControlTypes } from "@/types";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import DatePicker from "./DatePicker";

const ControlInput = ({ element }: any) => {
	if (element.control.type === ControlTypes.Input)
		return <Input {...element.control.fields} />;
	// return <Input {...field} {...element.control.fields} />;
	// if (element.control.type === ControlTypes.Date) return <DatePicker />;
	if (element.control.type === ControlTypes.Textarea)
		return <Textarea {...element.control.fields} />;
	if (element.control.type === ControlTypes.Checkbox)
		return (
			<div className="flex gap-2 items-center">
				<Checkbox {...element.control.fields} />
				<div>
					<p className="small">{element.control.fields.title}</p>
				</div>
			</div>
		);
};

const FormPage = ({ title, schema, elements, onSubmit, next, desc }: any) => {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		onSubmit(e);
		next();
	}

	return (
		<div className="w-full">
			<h1 className="title mb-2">{title}</h1>
			<p className="text-lg opacity-80 mb-12">{desc}</p>

			<form onSubmit={handleSubmit} className="space-y-8">
				{elements.map((element: any) => (
					<div className="flex flex-col gap-2 w-full" key={generateKey()}>
						<label className="small">{element.label}</label>
						{element.control}
						<span className="muted">{element.desc}</span>
					</div>
				))}
				<Button type="submit">Next</Button>
			</form>
		</div>
	);
};

export default FormPage;

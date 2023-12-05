"use client";

import * as z from "zod";

import FormPage from "./FormPage";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ControlTypes } from "@/types";

interface Props {
	forms: {
		title: string;
		desc?: string;
		onSubmit: (values: any) => Promise<void>;
		elements: {
			name: string;
			label?: string;
			// control: {
			// 	type: ControlTypes;
			// 	fields?: any;
			// };
			control: React.ReactElement;
			desc?: string;
		}[];
	}[];
	destination?: string;
}

//todo: what about navbar and footer
//todo: progress bar
const PaginatedForm = ({ forms, destination }: Props) => {
	const router = useRouter();

	const [index, setIndex] = useState(0);
	//todo: animation -> initiate and kill animation state?

	const next = () => {
		if (index === forms.length - 1) router.replace(destination || "/home");
		else setIndex((prevIndex) => prevIndex + 1);
	};

	const back = () => {
		//todo: create the back button
		if (index < 0) {
		}
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

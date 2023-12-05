"use client";

import { cubicBezier, motion } from "framer-motion";

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
	const [animate, setAnimate] = useState(false);

	const next = () => {
		setAnimate(true);
		const timeout = setTimeout(() => {
			setAnimate(false);
			
			if (index === forms.length - 1) router.replace(destination || "/home");
			else setIndex((prevIndex) => prevIndex + 1);

			// return () => {
			// 	clearTimeout(timeout);
			// };
		}, 1000);
	};

	const back = () => {
		//todo: create the back button
		if (index < 0) {
		}
	};

	return (
		<div className="h-screen flex flex-col overflow-y-hidden">
			{/* //todo: https://www.hyperui.dev/components/application-ui/steps -> for steps */}
			<div className="w-full">
				<div
					className={`bg-blue-600 h-1 transition-all duration-700 ease-in-out`}
					style={{
						width: `${((index + 1) / forms.length) * 100}%`,
					}}
				/>
			</div>

			<motion.div
				className="max-w-4xl w-full h-full flex items-center mx-auto"
				variants={{
					in: {
						y: 0,
						opacity: 1,
					},
					out: {
						y: 24,
						opacity: 0,
					},
				}}
				initial={animate ? "in" : "out"}
				animate={animate ? "out" : "in"}
				transition={{ duration: 0.8, ease: cubicBezier(0.77, 0, 0.18, 1) }}
			>
				<FormPage {...forms[index]} next={next} />
			</motion.div>
		</div>
	);
};

export default PaginatedForm;

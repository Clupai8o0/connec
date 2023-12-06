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
	const [loading, setLoading] = useState(false);

	const next = () => {
		setLoading(false);
		setAnimate(true);
		const timeout = setTimeout(() => {
			if (index === forms.length - 1) {
				setLoading(true);
				router.replace(destination || "/home");
			} else {
				setAnimate(false);
				setIndex((prevIndex) => prevIndex + 1);
			}

			return () => {
				clearTimeout(timeout);
			};
		}, 1000);
	};

	const back = () => {
		//todo: create the back button
		if (index < 0) {
		}
	};

	return (
		<div className="h-screen flex flex-col overflow-y-hidden relative">
			{/* //todo: https://www.hyperui.dev/components/application-ui/steps -> for steps */}
			<div className="w-full">
				<div
					className={`bg-blue-600 h-1 transition-all duration-700 ease-in-out relative z-[9999999999]`}
					style={{
						width: `${((index + 1) / forms.length) * 100}%`,
					}}
				/>
			</div>

			{loading && (
				<motion.div
					className={`absolute top-0 left-0 w-full h-full flex justify-center items-center mx-auto`}
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
					initial={loading ? "out" : "in"}
					animate={loading ? "in" : "out"}
					transition={{ duration: 0.8, ease: cubicBezier(0.77, 0, 0.18, 1) }}
				>
					<svg viewBox="25 25 50 50" className="loader">
						<circle r="20" cy="50" cx="50"></circle>
					</svg>
				</motion.div>
			)}

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
